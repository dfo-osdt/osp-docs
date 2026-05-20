import React, {useEffect, useMemo, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {I18N, type RegionCode, RoleKey} from '@site/src/components/i18n';
import styles from './styles.module.css';

type Locale = 'en' | 'fr';

type Status = 'complete' | 'scheduled' | 'in_progress' | 'not_started';

type OnboardingGroup = {
  role: RoleKey;
  status?: Status;
  date?: string;
};

type Region = {
  code: RegionCode;
  svgIds?: string[];
  groups?: OnboardingGroup[];
};

type OnboardingData = {
  regions: Region[];
};

const SVG_ID_TO_CODE: Record<string, string> = {
  DFO_NL: 'NL',
  DFO_PAC: 'PAC',
  DFO_ONT_PRA: 'ONT_PRA',
  DFO_QC: 'QC',
  DFO_ARCTIC: 'ARCTIC',
  DFO_MAR: 'MAR',
  DFO_GULF: 'GULF',
  DFO_NCR: 'NCR',
};

function getLocale(currentLocale: string): Locale {
  return currentLocale.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function completionScore(region: Region): number {
  const groups = region.groups ?? [];
  return groups.filter((group) => group.status === 'complete').length;
}

function classForScore(score: number): string {
  if (score >= 3) return styles.score3;
  if (score === 2) return styles.score2;
  if (score === 1) return styles.score1;
  return styles.score0;
}

function plainScoreClass(score: number): string {
  if (score >= 3) return 'score-3';
  if (score === 2) return 'score-2';
  if (score === 1) return 'score-1';
  return 'score-0';
}

function stripSvgXmlDeclaration(svg: string): string {
  return svg.replace(/^\s*<\?xml[^>]*\?>\s*/i, '');
}

function scrollToRegion(code: string): void {
  const target = document.getElementById(`region-${code}`);

  if (!target) return;

  target.scrollIntoView({behavior: 'smooth', block: 'start'});
  target.classList.add('region-flash');

  window.setTimeout(() => {
    target.classList.remove('region-flash');
  }, 900);
}

export default function DfoRegionsMap(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = getLocale(i18n.currentLocale);
  const t = I18N[locale] ?? I18N.en;

  const mapUrl = useBaseUrl('/maps/dfo-regions.svg');
  const dataUrl = useBaseUrl(`/data/onboarding.json`);

  const mapRef = useRef<HTMLDivElement | null>(null);

  const [svg, setSvg] = useState('');
  const [regions, setRegions] = useState<Region[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadMapData() {
      try {
        setError('');

        const [svgResponse, dataResponse] = await Promise.all([
          fetch(mapUrl, {cache: 'no-store'}),
          fetch(dataUrl, {cache: 'no-store'}),
        ]);

        if (!svgResponse.ok) {
          throw new Error(`HTTP ${svgResponse.status} loading ${mapUrl}`);
        }

        if (!dataResponse.ok) {
          throw new Error(`HTTP ${dataResponse.status} loading ${dataUrl}`);
        }

        const rawSvg = await svgResponse.text();

        if (!rawSvg.includes('<svg')) {
          throw new Error('Map file did not contain <svg> markup.');
        }

        const json = (await dataResponse.json()) as OnboardingData;

        if (cancelled) return;

        setSvg(stripSvgXmlDeclaration(rawSvg));
        setRegions(Array.isArray(json.regions) ? json.regions : []);
      } catch (e) {
        if (cancelled) return;

        setError(e instanceof Error ? e.message : String(e));
      }
    }

    loadMapData();

    return () => {
      cancelled = true;
    };
  }, [mapUrl, dataUrl]);

  useEffect(() => {
    if (!svg || regions.length === 0 || !mapRef.current) return;

    const root = mapRef.current;

    for (const region of regions) {
      const score = completionScore(region);
      const scoreClass = plainScoreClass(score);

      for (const id of region.svgIds ?? []) {
        const element = root.querySelector<SVGElement>(`#${CSS.escape(id)}`);

        if (!element) continue;

        element.classList.add('region-fill', scoreClass);
        element.setAttribute('data-region', `${t.regions[region.code]}`);
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');

        const title = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title',
        );

        title.textContent = `${t.regions[region.code]}\n${score}/3 ${t.complete}`;
        element.appendChild(title);
      }
    }

    const cleanupHandlers: Array<() => void> = [];

    for (const [svgId, code] of Object.entries(SVG_ID_TO_CODE)) {
      const element = root.querySelector<SVGElement>(`#${CSS.escape(svgId)}`);

      if (!element) continue;

      const handleClick = (event: Event) => {
        event.preventDefault();
        scrollToRegion(code);
      };

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          scrollToRegion(code);
        }
      };

      element.addEventListener('click', handleClick);
      element.addEventListener('keydown', handleKeydown);

      cleanupHandlers.push(() => {
        element.removeEventListener('click', handleClick);
        element.removeEventListener('keydown', handleKeydown);
      });
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, [svg, regions, t.complete]);

  const legendItems = useMemo(
    () => [
      {label: '0/3', className: styles.swatch0},
      {label: '1/3', className: styles.swatch1},
      {label: '2/3', className: styles.swatch2},
      {label: '3/3', className: styles.swatch3},
    ],
    [],
  );

  return (
    <div className={styles.mapCard}>
      <h3 className={styles.mapTitle}>{t.mapTitle}</h3>

      {error ? (
        <div className={styles.mapError}>Failed to load map/data: {error}</div>
      ) : (
        <div
          ref={mapRef}
          className={styles.mapWrap}
          dangerouslySetInnerHTML={{__html: svg}}
        />
      )}

      <div className={styles.mapLegend}>
        {legendItems.map((item) => (
          <React.Fragment key={item.label}>
            <span className={`${styles.swatch} ${item.className}`} />
            {item.label}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
import React, {useEffect, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {I18N, type RegionCode} from '@site/src/components/i18n';
import styles from './styles.module.css';

type Locale = 'en' | 'fr';

type TurnaroundRegion = {
  name?: string;
  code: RegionCode;
  svgIds?: string[];
  enabled: boolean;
};

type TurnaroundData = {
  definition?: string;
  regions: TurnaroundRegion[];
};

function getLocale(currentLocale: string): Locale {
  return currentLocale.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function stripSvgXmlDeclaration(svg: string): string {
  return svg.replace(/^\s*<\?xml[^>]*\?>\s*/i, '');
}

function classForEnabled(enabled: boolean): string {
  return enabled ? 'enabled' : 'disabled';
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

export default function TurnaroundMap(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = getLocale(i18n.currentLocale);
  const t = I18N[locale] ?? I18N.en;

  const mapUrl = useBaseUrl('/maps/dfo-regions.svg');
  const dataUrl = useBaseUrl(`/data/turnaround.json`);

  const mapRef = useRef<HTMLDivElement | null>(null);

  const [svg, setSvg] = useState('');
  const [data, setData] = useState<TurnaroundData>({
    definition: '',
    regions: [],
  });
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

        const contentType = dataResponse.headers.get('content-type') || '';

        if (!contentType.includes('application/json')) {
          const snippet = (await dataResponse.text()).slice(0, 120);
          throw new Error(
            `Expected JSON but got "${contentType}". Body starts: ${snippet}`,
          );
        }

        const json = (await dataResponse.json()) as TurnaroundData;

        if (cancelled) return;

        setSvg(stripSvgXmlDeclaration(rawSvg));
        setData({
          definition: json.definition ?? '',
          regions: Array.isArray(json.regions) ? json.regions : [],
        });
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
    if (!svg || data.regions.length === 0 || !mapRef.current) return;

    const root = mapRef.current;
    const cleanupHandlers: Array<() => void> = [];

    for (const region of data.regions) {
      const statusClass = classForEnabled(region.enabled);
      const regionLabel = t.regions[region.code];
      const statusLabel = region.enabled
        ? t.turnaroundEnabled
        : t.turnaroundDisabled;

      for (const id of region.svgIds ?? []) {
        const element = root.querySelector<SVGElement>(`#${CSS.escape(id)}`);

        if (!element) continue;

        element.classList.add('region-fill', statusClass);
        element.setAttribute('data-region', regionLabel);
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');

        // Prevent duplicate <title> elements if the effect re-runs.
        element.querySelector('title')?.remove();

        const title = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title',
        );

        title.textContent = `${regionLabel}\n${statusLabel}`;
        element.appendChild(title);

        const handleClick = (event: Event) => {
          event.preventDefault();
          scrollToRegion(region.code);
        };

        const handleKeydown = (event: KeyboardEvent) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            scrollToRegion(region.code);
          }
        };

        element.addEventListener('click', handleClick);
        element.addEventListener('keydown', handleKeydown);

        cleanupHandlers.push(() => {
          element.removeEventListener('click', handleClick);
          element.removeEventListener('keydown', handleKeydown);
        });
      }
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, [svg, data.regions, t]);

  return (
    <div className={styles.mapCard}>
      <h3 className={styles.mapTitle}>{t.turnaroundMapTitle}</h3>

      {data.definition ? (
        <p className={styles.mapSubtitle}>{t.turnaroundDefinition}</p>
      ) : null}

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
        <span className={`${styles.swatch} ${styles.enabled}`} />
        {t.turnaroundEnabled}

        <span className={`${styles.swatch} ${styles.disabled}`} />
        {t.turnaroundDisabled}
      </div>
    </div>
  );
}
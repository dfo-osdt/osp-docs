import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {I18N, formatDate, type RegionCode, RoleKey} from '@site/src/components/i18n';
import styles from './styles.module.css';

type Locale = 'en' | 'fr';

type Status = 'complete' | 'scheduled' | 'in_progress' | 'not_started';

type OnboardingGroup = {
  role: RoleKey;
  status?: Status;
  date?: string;
};

type Region = {
  name: string;
  code: RegionCode;
  groups?: OnboardingGroup[];
};

type OnboardingData = {
  definition?: string;
  regions: Region[];
};

type FlatGroup = {
  region: string;
  regionCode: string;
  group: string;
  status: Status;
  date?: string;
  key: string;
};

function getLocale(currentLocale: string): Locale {
  return currentLocale.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function getStatusLabel(status: Status | undefined, locale: Locale): string {
  const t = I18N[locale] ?? I18N.en;

  switch (status) {
    case 'complete':
      return t.complete;
    case 'scheduled':
      return t.scheduled;
    case 'in_progress':
      return t.inProgress;
    case 'not_started':
    default:
      return t.notStarted;
  }
}

function regionComplete(region: Region): number {
  return (region.groups ?? []).filter((group) => group.status === 'complete').length;
}

export default function OnboardingWidget(): React.JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = getLocale(i18n.currentLocale);
  const t = I18N[locale] ?? I18N.en;

  const dataUrl = useBaseUrl(`/data/onboarding.json`);

  const [data, setData] = useState<OnboardingData>({
    definition: '',
    regions: [],
  });

  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadOnboardingData() {
      try {
        setError('');

        const response = await fetch(dataUrl, {cache: 'no-store'});

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} loading ${dataUrl}`);
        }

        const json = await response.json();

        if (cancelled) return;

        setData({
          definition: json.definition ?? '',
          regions: Array.isArray(json.regions) ? json.regions : [],
        });
      } catch (e) {
        if (cancelled) return;

        setError(e instanceof Error ? e.message : String(e));
      }
    }

    loadOnboardingData();

    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  const regions = data.regions ?? [];

  const allGroups = useMemo<FlatGroup[]>(
    () =>
      regions.flatMap((region) =>
        (region.groups ?? []).map((group) => ({
          region: t.regions[region.code],
          regionCode: region.code,
          group: t.roles[group.role],
          status: group.status ?? 'not_started',
          date: group.date,
          key: `${region.code}:${group.role}`,
        })),
      ),
    [regions],
  );

  const totalCount = allGroups.length;

  const completedCount = useMemo(
    () => allGroups.filter((group) => group.status === 'complete').length,
    [allGroups],
  );

  const percentComplete = totalCount ? (completedCount / totalCount) * 100 : 0;

  const upcoming = useMemo(
    () =>
      allGroups
        .filter((group) => group.status === 'scheduled' && group.date)
        .sort((a, b) => String(a.date).localeCompare(String(b.date))),
    [allGroups],
  );

  return (
    <div className={styles.onboardCard}>
      {error ? (
        <div className={styles.onboardError}>
          Failed to load onboarding data: {error}
        </div>
      ) : (
        <>
          <div className={styles.onboardSummary}>
            <div>
              <strong>{completedCount}</strong> / {totalCount} {t.sessionsComplete}
            </div>

            <div className={styles.onboardBar}>
              <div
                className={styles.onboardBarFill}
                style={{width: `${percentComplete}%`}}
              />
            </div>

            <div className={styles.onboardPercent}>
              {percentComplete.toFixed(0)}%
            </div>
          </div>

          <div className={styles.onboardGrid}>
            {regions.map((region) => (
              <div
                key={region.code}
                className={styles.onboardRegion}
                id={`region-${region.code}`}
              >
                <div className={styles.onboardRegionHeader}>
                  <div className={styles.onboardRegionName}>{t.regions[region.code]}</div>

                  <div className={styles.onboardRegionCount}>
                    {regionComplete(region)}/{region.groups?.length ?? 0}
                  </div>
                </div>

                <ul className={styles.onboardGroups}>
                  {(region.groups ?? []).map((group) => {
                    const status = group.status ?? 'not_started';

                    return (
                      <li key={t.roles[group.role]} className={styles.onboardGroup}>
                        <span
                          className={clsx(
                            styles.badge,
                            styles[`badge_${status}`],
                          )}
                        >
                          {getStatusLabel(status, locale)}
                        </span>

                        <span className={styles.groupName}>{t.roles[group.role]}</span>

                        {group.date ? (
                          <span className={styles.groupDate}>
                            {formatDate(group.date, locale)}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {upcoming.length > 0 ? (
            <div className={styles.onboardUpcoming}>
              <h3 className={styles.onboardUpcomingTitle}>{t.upcomingTitle}</h3>

              <ul>
                {upcoming.map((item) => (
                  <li key={item.key}>
                    <strong>
                      {item.date ? formatDate(item.date, locale) : '—'}
                    </strong>{' '}
                    — {item.region} ({item.group})
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
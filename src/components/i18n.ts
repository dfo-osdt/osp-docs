export const I18N = {
  en: {
    onboardingDefinition:
      'Onboarded = a live demo + Q&A session has been delivered to the role group.',

    mapTitle: 'Onboarding by region',
    upcomingTitle: 'Upcoming scheduled sessions',
    complete: 'Complete',
    scheduled: 'Scheduled',
    inProgress: 'In progress',
    notStarted: 'Not started',
    sessionsComplete: 'roles onboarded',

    roles: {
      authors: 'Authors',
      editors: 'Editors',
      division_managers: 'Division Managers',
    },

    regions: {
      ARCTIC: 'Arctic',
      PAC: 'Pacific',
      ONT_PRA: 'Ontario and Prairies',
      QC: 'Quebec',
      MAR: 'Maritimes',
      GULF: 'Gulf',
      NL: 'Newfoundland and Labrador',
      NCR: 'National Capital Region',
    },

    turnaroundDefinition:
      'Indicates whether the region has adopted the optional 10 business day turnaround for secondary publications.',
    turnaroundMapTitle: 'Optional 10 business day turnaround by region',
    turnaroundEnabled: 'Adopted',
    turnaroundDisabled: 'Not adopted',
  },

  fr: {
    onboardingDefinition:
      'Intégré = une séance de démonstration en direct suivie d’une période de questions a été offerte au groupe de rôles.',

    mapTitle: 'Intégration par région',
    upcomingTitle: 'Séances à venir',
    complete: 'Terminé',
    scheduled: 'Planifié',
    inProgress: 'En cours',
    notStarted: 'Non commencé',
    sessionsComplete: 'rôles intégrés',

    roles: {
      authors: 'Auteurs',
      editors: 'Éditeurs',
      division_managers: 'Gestionnaires de division',
    },

    regions: {
      ARCTIC: 'Arctique',
      PAC: 'Pacifique',
      ONT_PRA: 'Ontario et Prairies',
      QC: 'Québec',
      MAR: 'Maritimes',
      GULF: 'Golfe',
      NL: 'Terre-Neuve-et-Labrador',
      NCR: 'Région de la capitale nationale',
    },

    turnaroundDefinition:
      'Indique si la région a adopté le délai facultatif de 10 jours ouvrables pour les publications secondaires.',
    turnaroundMapTitle: 'Délai facultatif de 10 jours ouvrables par région',
    turnaroundEnabled: 'Adopté',
    turnaroundDisabled: 'Non adopté',
  },
} as const;

export type Locale = keyof typeof I18N;
export type RoleKey = keyof typeof I18N.en.roles;
export type RegionCode = keyof typeof I18N.en.regions;

export function formatDate(
  iso: string | undefined,
  locale: 'en' | 'fr',
): string {
  if (!iso) return '';

  const date = new Date(`${iso}T00:00:00`);

  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date);
}
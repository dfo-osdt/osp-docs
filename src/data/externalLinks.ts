export const externalLinks = {
  openGovernmentLicence: {
    en: 'https://open.canada.ca/en/open-government-licence-canada',
    fr: 'https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada',
  },

  communicationsCommunityOffice: {
    en: 'https://www.canada.ca/en/government/system/government-communications/communications-community-office.html',
    fr: 'https://www.canada.ca/fr/gouvernement/systeme/communications-gouvernementales/bureau-collectivite-communications.html',
  },

  useOfAI: {
    en: 'https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html',
    fr: 'https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/utilisation-responsable-ai/guide-utilisation-intelligence-artificielle-generative.html',
  },

  requestPubNums: {
    en: 'https://intranet.ent.dfo-mpo.ca/mpo/sites/dfo-mpo/files/publishing-form-formulaire-publication-eng_0.pdf',
    fr: 'https://intranet.ent.dfo-mpo.ca/mpo/sites/dfo-mpo/files/publishing-form-formulaire-publication-fra.pdf',
  },

  crownCopyright: {
    en: 'https://www.dfo-mpo.gc.ca/terms-avis/copyright-droits-eng.htm',
    fr: 'https://www.dfo-mpo.gc.ca/terms-avis/copyright-droits-fra.htm',
  },

  privacyAct: {
    en: 'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-privacy-act/pa_brief/',
    fr: 'https://www.priv.gc.ca/fr/sujets-lies-a-la-protection-de-la-vie-privee/lois-sur-la-protection-des-renseignements-personnels-au-canada/la-loi-sur-la-protection-des-renseignements-personnels/lprp_survol/',
  },

  codeOfConduct: {
    en: 'https://intranet.ent.dfo-mpo.ca/hr-rh/en/node/1172',
    fr: 'https://intranet.ent.dfo-mpo.ca/hr-rh/fr/node/1172',
  },

  sciencePubPolicy: {
    en: 'https://intranet.ent.dfo-mpo.ca/science/en/node/2304',
    fr: 'https://intranet.ent.dfo-mpo.ca/science/fr/node/2304',
  },

  colophonPage: {
    en: 'https://dfo-mpo.libguides.com/en/preparing-dfo-scientific-reports/formatting/colophon-page',
    fr: 'https://dfo-mpo.libguides.com/fr/preparation-rapports-scientifiques-techniques-mpo/mise-en-forme/colophon',
  },
  
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
export type SupportedLocale = 'en' | 'fr';

export function getExternalLink(
  key: ExternalLinkKey,
  locale: string,
): string {
  const link = externalLinks[key];

  if (locale === 'fr') {
    return link.fr;
  }

  return link.en;
}

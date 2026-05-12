export const I18N = {
    en: {
        mapTitle: "Onboarding by region (map)",
        upcomingTitle: "Upcoming scheduled sessions",
        complete: "Complete",
        scheduled: "Scheduled",
        inProgress: "In progress",
        notStarted: "Not started",
        sessionsComplete: "roles onboarded",
        nrc: "NCR",

        turnaroundMapTitle: "Optional 10 business day turnaround by region",
        turnaroundEnabled: "Adopted",
        turnaroundDisabled: "Not adopted",
    },

    fr: {
        mapTitle: "Intégration par région (carte)",
        upcomingTitle: "Séances à venir",
        complete: "Terminé",
        scheduled: "Planifié",
        inProgress: "En cours",
        notStarted: "Non commencé",
        sessionsComplete: "rôles intégrés",
        ncr: "RCN",

        turnaroundMapTitle: "Délai facultatif de 10 jours ouvrables par région",
        turnaroundEnabled: "Adopté",
        turnaroundDisabled: "Non adopté",
    }
};

/**
 * Format an ISO date string according to locale
 */
export function formatDate(iso: string, locale: "en" | "fr") {
    if (!iso) return "";

    const d = new Date(iso + "T00:00:00");

    return new Intl.DateTimeFormat(
        locale === "fr" ? "fr-CA" : "en-CA",
        {
            year: "numeric",
            month: "short",
            day: "2-digit",
        }
    ).format(d);
}

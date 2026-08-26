import React, {type ReactNode} from 'react';
import EditThisPage from '@theme-original/EditThisPage';
import type EditThisPageType from '@theme/EditThisPage';
import type {WrapperProps} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

type Props = WrapperProps<typeof EditThisPageType>;

const feedbackEmail = 'DFO.OpenScience-ScienceOuverte.MPO@dfo-mpo.gc.ca'

function FeedbackIcon(): JSX.Element {
  return (
    <svg
      className={styles.feedbackIcon}
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.3-8-5.3V6l8 5.3L20 6v2.2Z"
      />
    </svg>
  );
}

export default function EditThisPageWrapper(props: Props): ReactNode {
const {siteConfig} = useDocusaurusContext();
  const location = useLocation();

  const pageUrl = `${siteConfig.url}${location.pathname}`;
  const subject = encodeURIComponent(`[OSP-Docs] Documentation feedback: ${location.pathname}`);
  const body = encodeURIComponent(
    `Incorrect or unclear content on this page:\n\n${pageUrl}\n\nSuggested correction or comment:\n`,
  );

  const mailtoHref = `mailto:${feedbackEmail}?subject=${subject}&body=${body}`;

  return (
    <div className={styles.feedbackRow}>
      <EditThisPage {...props} />

      <Link className={styles.feedbackLink} to={mailtoHref}>
	<FeedbackIcon />
							     <Translate
    id="theme.EditThisPage.feedbackLink"
    description="Feedback link shown beside Edit this page link"
							     >
								or let me know if there's incorrect or unclear content!
							     </Translate>
      </Link>
    </div>
  );
}

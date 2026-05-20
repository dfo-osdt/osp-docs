import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.authors.title" description="The title of the authors features section on the homepage">👩‍🔬 For Authors</Translate>,
    description: (
      <>
      <Translate id="homepage.features.authors.intro" description="The introductory text for the authors section on the homepage">
        Submit your manuscripts with ease:
      </Translate>
        <ul className='text--left'>
          <li>
            <Link to="/docs/getting-started">
              <Translate id="homepage.features.authors.gettingStarted" description="The text for the 'Getting Started' link for authors">
                Getting Started
              </Translate>
            </Link>{' '} 
            <Translate id="homepage.features.authors.systemRequirements" description="The text for the 'System Requirements' link for authors">
              System requirements and initial setup
            </Translate>
          </li>
          <li>
            <Link to="/docs/publication-process/manuscript-record-form">
              <Translate id="homepage.features.authors.manuscriptRecordForm" description="The text for the 'Manuscript Record Form' link for authors">
                Manuscript Record Form
              </Translate>
            </Link>{' '} - Create and manage your manuscript submissions
          </li>
          <li>
            <Link to="/docs/portal-features/author-explorer">
              <Translate id="homepage.features.authors.authorExplorer" description="The text for the 'Author Explorer' link for authors">
                Author Explorer
              </Translate>
            </Link>{' '} - Find and connect with other researchers
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
    <>
    <Translate id="homepage.features.managers.title" description="The title of the managers features section on the homepage">
      👨‍💼 For Managers
      </Translate>
      </>,
    description: (
      <>
        <Translate id="homepage.features.managers.intro" description="The introductory text for the managers section on the homepage">
        Review and approve manuscript submissions:
        </Translate>
        <ul className='text--left'>
          <li>
            <Link to="/docs/publication-process/manuscript-management-review">
              <Translate id="homepage.features.managers.manuscriptManagementReview" description="The text for the 'Manuscript Management Review' link for managers">
                Manuscript Management Review Process
              </Translate>
            </Link>{' '} - Step-by-step review procedures
          </li>
          <li>
            <Link to="/docs/portal-features/publication-explorer">
              <Translate id="homepage.features.managers.publicationExplorer" description="The text for the 'Publication Explorer' link for managers">
                Publication Explorer
              </Translate>
            </Link>{' '} - Browse and manage publications
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

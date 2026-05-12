import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '👩‍🔬 For Authors',
    description: (
      <>
        Submit your manuscripts with ease:
        <ul className='text--left'>
          <li>
            <Link to="/docs/general/getting-started">Getting Started</Link>{' '} - System requirements and initial setup
          </li>
          <li>
            <Link to="/docs/publication-process/manuscript-record-form">Manuscript Record Form</Link>{' '} - Create and manage your manuscript submissions
          </li>
          <li>
            <Link to="/docs/features/author-explorer">Author Explorer</Link>{' '} - Find and connect with other researchers
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '👨‍💼 For Managers',
    description: (
      <>
        Review and approve manuscript submissions:
        <ul className='text--left'>
          <li>
            <Link to="/docs/publication-process/management-review-process">Manuscript Management Review Process</Link>{' '} - Step-by-step review procedures
          </li>
          <li>
            <Link to="/docs/features/publication-explorer">Publication Explorer</Link>{' '} - Browse and manage publications
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

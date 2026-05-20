import type {ReactNode} from 'react';
import clsx from 'clsx';
import Logo from '@site/static/img/logo.png';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={Logo} className={styles.heroLogo} alt="OSP-PSO Docs Logo" />
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.title" description="The main title of the homepage">
          {siteConfig.title}
          </Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.subtitle" description="The subtitle of the homepage">
            {siteConfig.tagline}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              <Translate id="homepage.getStarted" description="The text of the get started button on the homepage">
            Get Started
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OSP-PSO User Docs <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

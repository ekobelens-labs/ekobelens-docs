import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/api/login">
            🚀 Explore API
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/intro">
            📖 Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function ApiOverview() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center">
              <Heading as="h2">API Endpoints Overview</Heading>
              <p>Comprehensive REST API for the Ekobelens platform</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="text--center">
              <div className={styles.featureIcon}>🔐</div>
              <Heading as="h3">Authentication</Heading>
              <p>
                Secure user login and token-based authentication system with refresh token support.
              </p>
              <Link
                className="button button--outline"
                to="/docs/api/login">
                View Auth Endpoints
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <div className={styles.featureIcon}>📋</div>
              <Heading as="h3">DRAM Management</Heading>
              <p>
                Create and manage DRAM (Document Risk Assessment Management) chapters with detailed metadata.
              </p>
              <Link
                className="button button--outline"
                to="/docs/api/create-dram-document-chapter">
                View DRAM API
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center">
              <div className={styles.featureIcon}>👥</div>
              <Heading as="h3">User & Organization</Heading>
              <p>
                Manage users and organizations with comprehensive registration and management capabilities.
              </p>
              <Link
                className="button button--outline"
                to="/docs/api/register-user">
                View User API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="API Documentation"
      description="Comprehensive REST API documentation for the Ekobelens platform with authentication, DRAM management, and user operations.">
      <HomepageHeader />
      <main>
        <ApiOverview />
      </main>
    </Layout>
  );
}

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';
import apiSidebar from '@site/docs/api/generated/sidebar';

type Feature = {
  title: string;
  description: string;
  link: string;
  cta: string;
  icon: string;
};

type Resource = {
  label: string;
  to?: string;
  href?: string;
};

const features: Feature[] = [
  {
    title: 'Authentication & Identity',
    description:
      'Token-based authentication with refresh token rotation keeps sessions secure across Ekobelens clients.',
    link: '/docs/api/generated/login',
    cta: 'Review Auth APIs',
    icon: '🔐',
  },
  {
    title: 'DRAM Lifecycle',
    description:
      'Create, update, and publish DRAM chapters with structured metadata aligned to mitigation workflows.',
    link: '/docs/api/generated/create-dram-document-chapter-1',
    cta: 'Browse DRAM APIs',
    icon: '📄',
  },
  {
    title: 'Organization & Users',
    description:
      'Manage organizations, roles, and users with consistent governance patterns and audited changes.',
    link: '/docs/api/generated/create-organization',
    cta: 'Explore Management APIs',
    icon: '🏢',
  },
];

const resources: Resource[] = [
  {label: 'Platform Overview', to: '/docs/intro'},
  {label: 'Full API Explorer', to: '/docs/api/ekobelens-api'},
  {label: 'Swagger Source', href: 'https://github.com/ekobelens-labs/ekobelens-docs/blob/main/specs/swagger.yaml'},
];


type SidebarDocItem = {
  type: 'doc';
  id: string;
  label?: string;
};

type SidebarCategoryItem = {
  type: 'category';
  label: string;
  items: SidebarItem[];
};

type SidebarItem = SidebarDocItem | SidebarCategoryItem | {type: string; items?: SidebarItem[]};

const endpointCount = countDocs(apiSidebar as SidebarItem[]);

function countDocs(items: SidebarItem[]): number {
  return items.reduce((total, item) => {
    if (item.type === 'doc') {
      const doc = item as SidebarDocItem;
      if (doc.id.endsWith('ekobelens-api')) {
        return total;
      }
      return total + 1;
    }

    if (item.type === 'category' && Array.isArray(item.items)) {
      return total + countDocs(item.items as SidebarItem[]);
    }

    return total;
  }, 0);
}

const stats = [
  {label: 'Endpoints documented', value: endpointCount.toString()},
  {label: 'Response schemas', value: '100%'},
  {label: 'Average uptime', value: '99.9%'},
];

function HeroCard(): ReactNode {
  return (
    <div className={styles.heroCard}>
      <p className={styles.heroIntro}>Ekobelens API Documentation</p>
      <Heading as="h1" className={styles.heroTitle}>
        Build reliable mitigation workflows faster
      </Heading>
      <p className={styles.heroSubtitle}>
        Authoritative REST documentation for authentication, DRAM lifecycles, and organization management across the Ekobelens ecosystem.
      </p>
      <div className={styles.heroActions}>
        <Link className="button button--primary button--lg" to="/docs/api/ekobelens-api">
          Explore API Reference
        </Link>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Read Getting Started
        </Link>
      </div>
    </div>
  );
}

function StatBar(): ReactNode {
  return (
    <dl className={styles.statBar}>
      {stats.map(stat => (
        <div key={stat.label} className={styles.statItem}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Quickstart(): ReactNode {
  return (
    <section className={styles.quickstart}>
      <div className="container">
        <div className={styles.quickstartLayout}>
          <div>
            <Heading as="h2">Quick start</Heading>
            <p>
              Generate a local preview and navigate the API explorer in minutes. These commands assume Node 18+ and Yarn.
            </p>
            <ul className={styles.quickstartList}>
              <li>Install dependencies</li>
              <li>Run the live docs server</li>
              <li>Regenerate OpenAPI pages when specs change</li>
            </ul>
          </div>
          <div>
            <CodeBlock language="bash">{`yarn install
yarn start
# When specs/swagger.yaml updates
yarn regen-api`}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid(): ReactNode {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What you can build
        </Heading>
        <p className={styles.sectionLead}>
          Use consistent endpoints, validation, and examples tailored to mitigation action plans.
        </p>
        <div className={styles.featureGrid}>
          {features.map(feature => (
            <article key={feature.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
              <Link className={styles.featureLink} to={feature.link}>
                {feature.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceStrip(): ReactNode {
  return (
    <section className={styles.resourceStrip}>
      <div className="container">
        <div>
          <Heading as="h2">Essential resources</Heading>
          <p>Stay aligned with platform updates and governance requirements.</p>
        </div>
        <ul className={styles.resourceList}>
          {resources.map(resource => {
            const linkProps = resource.href ? {href: resource.href} : {to: resource.to!};
            return (
              <li key={resource.label}>
                <Link {...linkProps}>{resource.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="API Documentation"
      description={siteConfig.tagline}>
      <div className={clsx('hero', styles.heroWrap)}>
        <div className="container">
          <HeroCard />
          <StatBar />
        </div>
      </div>
      <main>
        <Quickstart />
        <FeatureGrid />
        <ResourceStrip />
      </main>
    </Layout>
  );
}

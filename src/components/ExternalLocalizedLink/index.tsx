import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
  getExternalLink,
  type ExternalLinkKey,
} from '@site/src/data/externalLinks';

type ExternalLocalizedLinkProps = {
  linkKey: ExternalLinkKey;
  children: ReactNode;
  className?: string;
};

export default function ExternalLocalizedLink({
  linkKey,
  children,
  className,
}: ExternalLocalizedLinkProps): JSX.Element {
  const {i18n} = useDocusaurusContext();

  const href = getExternalLink(linkKey, i18n.currentLocale);

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

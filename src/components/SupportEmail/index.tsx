import React from 'react';
import Link from '@docusaurus/Link';

import {contactInfo} from '@site/src/data/contactInfo';

type SupportEmailProps = {
  subject?: string;
  body?: string;
  children?: React.ReactNode;
};

export default function SupportEmail({
  subject,
  body,
  children,
}: SupportEmailProps): JSX.Element {
  const email = contactInfo.ospSupportEmail;

  const query = new URLSearchParams();

  if (subject) {
    query.set('subject', subject);
  }

  if (body) {
    query.set('body', body);
  }

  const queryString = query.toString();
  const href = queryString ? `mailto:${email}?${queryString}` : `mailto:${email}`;

  return <Link to={href}>{children ?? email}</Link>;
}

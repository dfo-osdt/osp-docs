import React, {type ReactNode} from 'react';
import Footer from '@theme-original/Footer';
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const {i18n} = useDocusaurusContext();
  const year = new Date().getFullYear();

  // Update the copyright message with the current year
  const copyright = 
  i18n.currentLocale === 'fr'
  ? `Droits d'auteur © ${year} Pêches et Océans Canada | Sous licence Open Government Licence – Canada.`
  : `Crown Copyright © ${year}  Fisheries and Oceans Canada | Licensed under Open Government Licence – Canada.`;
  
  return (
    <>
      <Footer {...props} />

      <div style={{textAlign: 'center', padding: '1rem 0'}}>
        <small>{copyright}</small>
      </div>
    </>
  );
}

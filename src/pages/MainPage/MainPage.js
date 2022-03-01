import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../../components/Content/Content';
// import { useTranslation } from 'react-i18next';
import Definition from '../../components/Definition/Definition';
import Layout from '../../components/Layout';
function MainPage() {
  // const { t } = useTranslation();
  return (
    <Layout>
      <Container>
        <Definition />
        <Content />
      </Container>
    </Layout>
  );
}

export default MainPage;

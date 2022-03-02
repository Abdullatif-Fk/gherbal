import { Container } from '@material-ui/core';
import React from 'react';
import Content from '../../components/Content/Content';
import Definition from '../../components/Definition/Definition';
import Layout from '../../components/Layout';
function MainPage() {
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

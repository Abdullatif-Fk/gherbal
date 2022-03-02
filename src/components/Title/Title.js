import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Title.css';

function Title({ title, filled }) {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid className="title__container" container>
        <Grid
          style={
            filled
              ? {
                  backgroundColor: '#D2743B',
                  color: 'white',
                }
              : null
          }
          item
        >
          <h2 className="title">{t(title)}</h2>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Title;

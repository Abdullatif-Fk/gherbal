import { Container, Grid, Typography } from '@material-ui/core';
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
          <Typography className="title">{t(title)}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Title;
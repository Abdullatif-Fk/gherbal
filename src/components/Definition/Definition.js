import { Grid, List, ListItem } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { definition } from '../../utils/data';
import './Definition.css';
function Definition() {
  const { t } = useTranslation();

  return (
    <Grid className="def__container" container>
      <Grid className="def__title__container" item>
        {t('Definition.title')}
      </Grid>
      <Grid item className="def__list">
        <List>
          {definition.list.map((_, key) => (
            <ListItem key={key}>{t('Definition.list.' + key)}</ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default Definition;

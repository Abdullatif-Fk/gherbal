import { Box, Grid, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Judgment.css';
function Judgment({ desc, items }) {
  const { t } = useTranslation();
  return (
    <Box className="judgment">
      <Grid className="judgment__desc" item>
        <p>{t(desc)}</p>
      </Grid>
      <Grid className="judgment__list" item>
        <List>
          {items?.map((item, key) => (
            <ListItem key={key}>
              <p>{t(item)}</p>{' '}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}

export default Judgment;

import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function Idea({ index }) {
  const { t } = useTranslation();
  const lng = i18next.language || 'en';
  return (
    <div className="idea__container">
      <img
        alt=""
        className="idea__img"
        style={{
          marginRight: lng === 'en' ? 5 : 0,
          marginLeft: lng === 'en' ? 0 : 5,
        }}
        src={lng === 'en' ? './right.png' : './left.png'}
      />
      <div>
        <p
          style={{
            textAlign: lng === 'ar' ? 'right' : 'left',
          }}
        >
          {t('ideas.' + index)}
        </p>
      </div>
    </div>
  );
}

export default Idea;

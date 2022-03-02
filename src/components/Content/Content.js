import { Grid, List, ListItem } from '@material-ui/core';
import React from 'react';
import { ideas } from '../../utils/data';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';
import '../../components/Idea/Idea.css';
import Idea from '../Idea/Idea';
import Judgment from '../Judgment/Judgment';
import './Content.css';
import { Label, Pie, PieChart, Text } from 'recharts';
import i18next from 'i18next';
function Content() {
  const { t } = useTranslation();
  const data = [{ name: 'Group A', value: 400 }];
  const lng = i18next.language;
  console.log(lng);
  return (
    <Grid container>
      <Grid item md={12}>
        <Title filled={false} title="Definition.explication.title"></Title>
      </Grid>
      <Grid item md={12}>
        <List>
          {ideas.map((index) => (
            <ListItem key={index}>
              <Idea index={index} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid style={{ marginBottom: 30, display: 'flex' }} item>
        <img
          style={{ width: 40, height: 40, margin: 8 }}
          src="./search.png"
          alt=""
        />
        <div>
          <p
            style={{
              textAlign: lng === 'ar' ? 'right' : 'left',
            }}
          >
            {t('search')}
          </p>
        </div>
      </Grid>
      <Grid container spacing={10}>
        <Grid item lg={3} md={6} sm={12}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={130}
              outerRadius={150}
              startAngle={lng === 'en' ? -90 : 90}
              endAngle={lng === 'en' ? 90 : 270}
              fill="#6DA0D5"
              paddingAngle={5}
              dataKey="value"
            >
              {' '}
              <Label width={200} position="center">
                {t('chart1')}
              </Label>
            </Pie>
          </PieChart>
        </Grid>
        <Grid alignItems="center" item lg={3} md={6} sm={12}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={130}
              outerRadius={150}
              startAngle={lng === 'en' ? -90 : 90}
              endAngle={lng === 'en' ? 90 : 270}
              fill="#D4753C"
              paddingAngle={5}
              dataKey="value"
            >
              {' '}
              <Label width={200} position="center">
                {t('chart2')}
              </Label>
            </Pie>
          </PieChart>
        </Grid>

        <Grid alignItems="center" item lg={3} md={6} sm={12}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={130}
              outerRadius={150}
              startAngle={lng === 'en' ? -90 : 90}
              endAngle={lng === 'en' ? 90 : 270}
              fill="#BE4066"
              paddingAngle={5}
              dataKey="value"
            >
              {' '}
              <Label
                width={200}
                position="center"
                style={{ borderColor: ' black', border: 2 }}
              >
                {t('chart3')}
              </Label>
            </Pie>
          </PieChart>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={130}
              outerRadius={150}
              startAngle={lng === 'en' ? -90 : 90}
              endAngle={lng === 'en' ? 90 : 270}
              fill="#93D2B9"
              paddingAngle={5}
              dataKey="value"
            >
              {' '}
              <Label width={200} position="center">
                {t('chart4')}
              </Label>
            </Pie>
          </PieChart>
        </Grid>
      </Grid>
      <Grid
        style={{
          marginBottom: 30,
          display: 'flex',
          alignItems: 'center',
          marginTop: 20,
        }}
        item
      >
        <img
          style={{ width: 40, height: 40, margin: 8 }}
          src="./push-pin.png"
          alt=""
        />
        <div>
          <p
            style={{
              textAlign: lng === 'ar' ? 'right' : 'left',
            }}
          >
            {t('pin')}
          </p>
        </div>
      </Grid>
      <hr style={{ border: '2px #D2743B solid', width: '90%' }} />
      <Grid item xs={12}>
        <Title filled={false} title="delay_of_appeal"></Title>
      </Grid>
      <Grid item xs={12}>
        <Title filled={true} title="final_judgments"></Title>
      </Grid>
      <Grid className="judgments" container spacing={100}>
        <Grid item md={3} xs={12}>
          <Judgment
            desc="judgments.descriptions.0"
            items={['judgments.list.0.0', 'judgments.list.0.1']}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Judgment
            desc="judgments.descriptions.1"
            items={['judgments.list.1.0']}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <Judgment
            desc="judgments.descriptions.2"
            items={['judgments.list.2.0']}
          />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Title filled={true} title="title"></Title>
      </Grid>
      <Grid
        className="judgments"
        style={{ flexDirection: 'start', justifyContent: 'space-evenly' }}
        container
      >
        <Grid xs={12} md={3}>
          <Judgment desc="decision.0.desc" items={['decision.0.item']} />
        </Grid>
        <Grid xs={12} md={3}>
          <Judgment desc="decision.1.desc" items={['decision.1.item']} />
        </Grid>
      </Grid>
      <p style={{ marginTop: '20px' }}> {t('remarque')} </p>
      <Grid item md={12}>
        <Title filled={true} title="title2"></Title>
      </Grid>
      <Grid item>
        <List>
          <ListItem>{t('dec1')}</ListItem>
          <ListItem>{t('dec2')}</ListItem>
        </List>
      </Grid>
      <hr style={{ border: '2px #D2743B solid', width: '90%' }} />
    </Grid>
  );
}

export default Content;

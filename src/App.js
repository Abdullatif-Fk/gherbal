import { useTranslation } from 'react-i18next';
import './App.css';
import Layout from './components/Layout';

function App() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="App">
        {' '}
        <img width="50px" src="./curve-arrow.png" />
        {t('welcome_to_react')}
      </div>
    </Layout>
  );
}

export default App;

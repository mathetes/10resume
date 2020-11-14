import Head from "next/head";
import Layout from '../src/layout/Layout';
import Feedback from '../src/components/Feedback/Feedback';

export default function Contacts() {
  
  return (
    <div>
      <Head>
        <title>Контакты - Роман Аяпергенов - Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <Feedback />
      </Layout>
    </div>
  );
}
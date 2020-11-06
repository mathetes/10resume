import Head from "next/head";
import Layout from '../src/layout/Layout';

export default function Contacts() {
  
  return (
    <div>
      <Head>
        <title>Контакты - Роман Аяпергенов - Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <h2>Contacts</h2>
      </Layout>
    </div>
  );
}
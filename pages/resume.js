import Head from "next/head";
import Layout from '../src/layout/Layout';


export default function Resume() {
  
  return (
    <div>
      <Head>
        <title>Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <h2>My resume</h2>
      </Layout>
    </div>
  );
}
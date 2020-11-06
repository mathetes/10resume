import Head from "next/head";
import Layout from '../src/layout/Layout';


export default function Portfolio() {
  
  return (
    <div>
      <Head>
        <title>Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <h2>My portfolio</h2>
      </Layout>
    </div>
  );
}
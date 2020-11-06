import Head from "next/head";
import Layout from '../src/layout/Layout';

export default function About() {
  
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
      <Layout>
        <h2>Я React-developer</h2>
      </Layout>
    </div>
  );
}
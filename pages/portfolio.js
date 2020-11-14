import Head from "next/head";
import Layout from '../src/layout/Layout';
import Projects from '../src/components/Projects/Projects';


export default function Portfolio() {
  
  return (
    <div>
      <Head>
        <title>Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <Projects />
      </Layout>
    </div>
  );
}
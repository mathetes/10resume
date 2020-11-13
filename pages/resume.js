import Head from "next/head";
import Layout from '../src/layout/Layout';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import Skills from '../src/components/Skills/Skills';


export default function Resume() {
  
  return (
    <div>
      <Head>
        <title>Резюме 10. Построенное на NEXT.JS</title>
      </Head>
      <Layout>
        <h1>My resume</h1>
        <Education />
        <Experience />
        <Skills />
      </Layout>
    </div>
  );
}
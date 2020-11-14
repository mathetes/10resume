import Head from "next/head";
import Layout from '../src/layout/Layout';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';
import Skills from '../src/components/Skills/Skills';


export default function Resume() {
  
  return (
    <div>
      <Head>
        <title>Resume 10. Built on NEXT.JS</title>
      </Head>
      <Layout>
        <h2 className="title">My resume</h2>
        <Education />
        <Experience />
        <Skills />
      </Layout>
    </div>
  );
}
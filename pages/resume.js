import Head from "next/head";
import Layout from '../src/layout/Layout';
import {Education} from '../src/components/Education/';
import {Experience} from '../src/components/Experience/';
import {Skills} from '../src/components/Skills/';
import {Tech} from '../src/components/Tech/';
import {Knowledges} from '../src/components/Knowledges/';

export default function Resume() {
  
  return (
    <div>
      <Head>
        <title>Resume 10. Built on NEXT.JS</title>
      </Head>
      <Layout>
        <Knowledges />
        <Education />
        <Experience />
        <Skills />
        <Tech />
      </Layout>
    </div>
  );
}
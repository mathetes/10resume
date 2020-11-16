import Head from "next/head";
import Layout from '../src/layout/Layout';
import {Feedback} from '../src/components/Feedback/';

export default function Contacts() {
  
  return (
    <div>
      <Head>
        <title>Contacts - Roman Ayapergenov. Resume built with NEXT.JS</title>
      </Head>
      <Layout>
        <Feedback />
      </Layout>
    </div>
  );
}
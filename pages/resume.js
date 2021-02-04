import Head from "next/head";
import Layout from "../src/layout/Layout";
import { Education } from "../src/components/Education/";
import { Experience } from "../src/components/Experience/";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume 10. Built on NEXT.JS</title>
      </Head>
      <Layout>
        <Education />
        <Experience />
      </Layout>
    </div>
  );
}

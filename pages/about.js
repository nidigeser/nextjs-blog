import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';

export default function About() {
    return (
      <Layout>
        <Head>
            <title>About this blog</title>
        </Head>        
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About this blog</h2>
        <p>This blog was developed during the frontend lecture in the Professional Software Engineering course.</p>
      </section>
      </Layout>
    );
}
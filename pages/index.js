import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const name = 'Niklas` Blog ';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Niklas. I'm a development engineer studying Professional Software Engineering part-time at Reutlingen University.</p>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Get in touch with me</h2>
          <section className={utilStyles.contacts}>
            <div>
              <a href='https://www.linkedin.com/in/niklas-digeser-21329720a/'>LinkedIn</a> <br/> <BsLinkedin style={{color: "blue"}}/>
            </div>
            <div>
              <a href='https://www.instagram.com/'>Instagram</a> <br/> <BsInstagram style={{color:"#d65486"}}/>
            </div>
            <div>
              <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Ftwitterde%3Flang%3Dde'>Twitter</a> <br/> <BsTwitter style={{color:"#54b3d6"}}/>
            </div>
          </section>
      </section>
    </Layout>
  );
}
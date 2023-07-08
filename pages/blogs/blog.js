import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Blog({ allPostsData }) {
    return (
      <Layout>
        <Head>
            <title>Blog Entries</title>
        </Head>        
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <a href={`/posts/${id}`} key={id} className={utilStyles.link}>
            <li className={utilStyles.listItem}>
              <span className={utilStyles.listHeader}>{title}</span>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            </a>
          ))}
        </ul>
      </section>
      </Layout>
    );
}
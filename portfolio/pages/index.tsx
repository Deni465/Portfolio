import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hey this is Denise</p>

                <div className="flex flex-col border-green-700 border-double border-4 rounded-full pl-5">
                    <p>This is the way to Go</p>
                </div>
            </section>
        </Layout>
    );
}

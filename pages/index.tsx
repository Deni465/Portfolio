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
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <div className="flex flex-col border-green-700 border-double border-4 rounded-full">
                    <p>This is the way to Go</p>
                </div>
            </section>
        </Layout>
    );
}

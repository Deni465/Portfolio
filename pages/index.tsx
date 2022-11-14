import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import homeStyle from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Layout home>
                <p>Hello</p>
            </Layout>

            <div className="flex flex-col place-items-center">
                <h1 className={utilStyles.heading2Xl}>The Finest</h1>
                <p>A Website to find the finest recipes for every occassion</p>
            </div>
        </>
    );
}

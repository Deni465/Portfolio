import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function Home() {
    return (
        <Layout home>
            <div className={styles.container}>
                <header className={styles.header}>
                    <>
                        <div className="flex items-center">
                            <h1 className={utilStyles.heading2Xl}>FoodWars</h1>
                        </div>
                    </>
                </header>
            </div>
        </Layout>
    );
}

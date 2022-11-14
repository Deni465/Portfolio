import Layout from "../components/layout";
import style from "../styles/search.module.css";
import placeholderImg from "../public/images/food.jpg";
import Image from "next/image";
import { useState } from "react";

export default function About() {
    console.log("About Page");
    const [userQuery, setUserQuery] = useState("");
    return (
        <>
            <Layout home>
                <h1>This is my Search Recipe Page</h1>
            </Layout>
            <div className="flex  m-5 place-content-center">
                <input
                    className="border-solid border-gray border-2 p-1 "
                    type="text"
                    placeholder="search here"
                    onChange={(e) => {
                        setUserQuery(e.target.value);
                    }}
                ></input>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <figure className={style.card__thumb}>
                        <div>
                            <Image
                                src={placeholderImg}
                                alt="food"
                                className={style.card__image}
                            />
                        </div>
                        <figcaption className={style.card__caption}>
                            <h2 className={style.card__title}>Hello</h2>
                            <p className={style.card__snippet}>
                                Is it me you're looking for
                            </p>
                            <a className={style.card__button}>More</a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}

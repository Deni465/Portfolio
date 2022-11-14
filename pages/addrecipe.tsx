import { useEffect, useState } from "react";
import style from "../styles/add.module.css";

export default function Contact() {
    console.log("Add Recipe Page");

    const [state, setState] = useState({
        recipe: {
            id: "",
            name: "",
            ingredients: "",
            description: "",
            img_url: "",
        },
    });

    useEffect(() => {});

    return (
        <>
            <div className={style.container}>
                <form action="" className={style.form}>
                    <input
                        type="text"
                        placeholder="recipe name"
                        className={style.input}
                    />
                    <input
                        type="text"
                        placeholder="ingredient"
                        className={style.input}
                    />
                    <p></p>
                    <input
                        type="file"
                        placeholder="recipe img"
                        className={style.input}
                    />
                    <textarea cols={20} rows={5} className={style.input} />
                    <button type="submit" className={style.button}>
                        Create Recipe
                    </button>
                </form>
            </div>
        </>
    );
}

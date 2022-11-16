import { useRouter } from "next/router";
import React, { useState } from "react";
import { flattenDiagnosticMessageText } from "typescript";
import style from "../styles/add.module.css";

const initialState = {
    name: "",
    ingredients: "",
    description: "",
    image: "",
};
export default function Contact() {
    console.log("Add Recipe Page");
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(initialState);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, name: e.target.value });
    };

    const handleIngredientsChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        // console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, ingredients: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("e.target.value", e.target.files?.[0]);
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        // setState(e.currentTarget.value);
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                setState({
                    ...state,
                    image: fileReader.result,
                });
            }
        };
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        // console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, description: e.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        fetch(`/api/recipe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("add recipe data", data);

                router.push("/searchrecipe");
            });
    };

    return (
        <>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <h1 className="text-white text-xl mb-5">
                        Time To Create Your Very Own Favorite Recipe And Share
                        it With The World!
                    </h1>
                    <input
                        type="text"
                        placeholder="Garlic Bread"
                        className={style.input}
                        name="name"
                        value={state.name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="1 Baguette, 50gr Butter, Garlic"
                        className={style.input}
                        name="ingredients"
                        value={state.ingredients}
                        onChange={handleIngredientsChange}
                    />
                    <p></p>
                    <input
                        type="file"
                        placeholder="recipe img"
                        className={style.input}
                        name="img_url"
                        onChange={handleFileChange}
                    />
                    <textarea
                        name="description"
                        cols={30}
                        rows={5}
                        placeholder="Let's Heat The Oven! Here Comes The Description 🤌🏼"
                        className={style.input}
                        value={state.description}
                        onChange={handleDescriptionChange}
                    />
                    <div className={style.btncontainer}>
                        <button type="submit" className={style.button}>
                            <span className={style.span}>Create Recipe 🤙🏼</span>
                        </button>
                    </div>
                </form>
            </div>
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-slate-200">
                    <div className="w-80 flex flex-col justify-center items-center">
                        <svg
                            className="animate-spin h-10 w-10 mb-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <div className="animate-pulse">Loading</div>
                    </div>
                </div>
            )}
        </>
    );
}

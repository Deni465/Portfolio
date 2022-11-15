import React, { ReactEventHandler, useEffect, useState } from "react";
import style from "../styles/add.module.css";

export default function Contact() {
    console.log("Add Recipe Page");

    const [state, setState] = useState({
        name: "",
        ingredients: "",
        description: "",
        img_url: "",
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, name: e.target.value });
    };

    const handleIngredientsChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, ingredients: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, img_url: e.target.value });
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        console.log("e.target.value", e.target.value);
        // setState(e.currentTarget.value);
        setState({ ...state, description: e.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch(`/api/recipe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("add recipe data", data);
                // setFoundRecipeList(data);
            });
    };

    return (
        <>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <input
                        type="text"
                        placeholder="recipe name"
                        className={style.input}
                        name="name"
                        value={state.name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="ingredient"
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
                        value={state.img_url}
                        onChange={handleFileChange}
                    />
                    <textarea
                        name="description"
                        cols={20}
                        rows={5}
                        className={style.input}
                        value={state.description}
                        onChange={handleDescriptionChange}
                    />
                    <button type="submit" className={style.button}>
                        Create Recipe
                    </button>
                </form>
            </div>
        </>
    );
}

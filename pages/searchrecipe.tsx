import Layout from "../components/layout";
import { useState, useEffect } from "react";
import ResultList from "../components/resultList";

export default function Search() {
    const [recipeQuery, setRecipeQuery] = useState("");
    const [foundRecipeList, setFoundRecipeList] = useState([]);

    useEffect(() => {
        // console.log("recipeQuery", recipeQuery);
        fetch(`/getlatestusers/?query=${recipeQuery}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Hello find user");
                setFoundRecipeList(data);
            });
    }, [recipeQuery]);

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
                        setRecipeQuery(e.target.value);
                    }}
                ></input>
            </div>
            <ResultList recipes={foundRecipeList} />
        </>
    );
}

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Recipe {
    created_at: string;
    description: string;
    id: number;
    img_url: string;
    ingredients: string;
    name: string;
}

export default function DetailedRecipe() {
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        if (router.query.id) {
            const url = `/api/show-details?recipeId=${router.query.id}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setRecipe(data);
                });
        }
    }, [router.query.id]);

    return (
        <div className="flex flex-col justify-center items-center pt-8 text-white">
            <h1 className="mb-12 text-2xl">Detailed Recipes</h1>
            <div className="w-8/12 flex justify-between max-h-96">
                {recipe && (
                    <Image
                        priority
                        src={recipe?.img_url}
                        alt="food"
                        width={300}
                        height={100}
                    />
                )}
                <div className="flex-1 flex flex-col pl-8">
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-lg mb-4">{recipe?.name}</h2>
                        <h3 className="text-base mb-1">Ingredients:</h3>
                        <ul className="list-disc mb-4">
                            {recipe?.ingredients
                                .split(",")
                                .map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                        </ul>
                        <p>{recipe?.description}</p>
                    </div>
                    <p className="text-sm ">{recipe?.created_at}</p>
                </div>
            </div>
        </div>
    );
}

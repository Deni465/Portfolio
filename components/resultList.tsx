import Image from "next/image";
import style from "../styles/search.module.css";
import placeholderImg from "../public/images/food.jpg";
import stylus from "./resultList.module.css";
import Link from "next/link";
interface ResultListProps {
    recipes: { id: number }[];
}

export default function ResultList({ recipes }: ResultListProps) {
    console.log(
        "🚀 ~ file: resultList.tsx ~ line 10 ~ ResultList ~ recipes",
        recipes
    );
    const showProfile = (id: number) => {
        console.log("id", id);
    };

    return (
        <ul className={stylus.findRecipe}>
            {recipes.map((recipe) => (
                <li key={recipe.id} onClick={() => showProfile(recipe.id)}>
                    <div className={style.container}>
                        <div className={style.card}>
                            <figure className={style.card__thumb}>
                                <div>
                                    <Image
                                        priority
                                        src={recipe.img_url}
                                        alt="food"
                                        className={style.card__image}
                                        width={500}
                                        height={200}
                                    />
                                </div>
                                <figcaption className={style.card__caption}>
                                    <h2 className={style.card__title}>
                                        {recipe.name}
                                    </h2>
                                    <p className={style.card__snippet}></p>
                                    <Link
                                        href={`/show-recipes/${recipe.id}`}
                                        className={style.card__button}
                                    >
                                        More
                                    </Link>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

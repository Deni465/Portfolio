import Image from "next/image";
import style from "../styles/search.module.css";
import placeholderImg from "../public/images/food.jpg";
import Link from "next/link";
interface ResultListProps {
    recipes: { id: number }[];
}

export default function ResultList({ recipes }: ResultListProps) {
    console.log(
        "🚀 ~ file: resultList.tsx ~ line 10 ~ ResultList ~ recipes",
        recipes
    );
    const showProfile = (id: any) => {
        console.log("id", id);
    };

    return (
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id} onClick={() => showProfile(recipe.id)}>
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
                                        Is it me youre looking for
                                    </p>
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

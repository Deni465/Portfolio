import Image from "next/image";
import style from "../styles/search.module.css";
import placeholderImg from "../public/images/food.jpg";
interface ResultListProps {
    recipes: any[];
}

export default function ResultList({ recipes }: ResultListProps) {
    return (
        <ul>
            <li>
                {" "}
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
            </li>
        </ul>
    );
}

//     const showProfile = (id) => {
//         // console.log("id", id);
//         // history.push(`/showlatestuser/${id}`);
//     };

//     return (
//         <ul className="findUser">
//             {users.map((user) => (
//                 <li
//                     className="userlist"
//                     key={user.id}
//                     onClick={() => showProfile(user.id)}
//                 >
//                     <Link
//                         className="links userInfo"
//                         to={`/showlatestuser/${user.id}`}
//                     >
//                         <img src={user.img_url} style={{ width: 100 }} />{" "}
//                         <p className="links">
//                             {user.first} {user.last}
//                         </p>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }

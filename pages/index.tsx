import utilStyles from "/styles/utils.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex flex-col place-items-center bg-[url('../public/images/food.jpg')] bg-cover h-screen  overflow-hidden fixed w-full ">
                <div className="backdrop-blur-sm m-20 rounded-full">
                    <h1 className={utilStyles.heading2Xl}>The Finest</h1>
                    <p className="text-slate-200 text-2xl m-5 mx-10">
                        A Website to find the finest recipes for every occassion
                    </p>
                </div>
            </div>
        </>
    );
}

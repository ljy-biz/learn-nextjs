process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import Link from "next/link";
import { resolve } from "path";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../contants";

export const metadata = {
    title: "Home",
}
  
async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // return await fetch(URL).then(response => response.json());
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                // <li key={movie.id}>
                //     <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                // </li>
                // <div key={movie.id}>
                //     <img src={movie.poster_path} alt={movie.title} />
                //     <Link href={`/movies/${movie.id}`} >{movie.title}</Link>
                // </div>   ==> <Movie />
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                />
            ))}
        </div>
    )
}
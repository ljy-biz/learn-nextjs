import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
    // console.log(`Fetching movies: ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function Movieinfo({id}: {id: string}) {
    const movie = await getMovie(id);
    return (
        // <h6>{JSON.stringify(movie)}</h6>
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.hompage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}
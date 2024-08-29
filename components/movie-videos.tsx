process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { API_URL } from "../app/contants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    // console.log(`Fetching videos: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error('something Broke...')
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id);
    return (
        // <h6>{JSON.stringify(videos)}</h6>
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe 
                    key={video.id} 
                    src={`https://youtube.com/embed/{$video.key}`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    )
}
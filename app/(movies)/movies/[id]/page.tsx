process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import Movieinfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import Loading from "./loading";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({params: {id},}: IParams) {
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <div>
            {/* <h3>Movie detail page</h3> */}
            {/* <Suspense fallback={<h1>Loading movie info</h1>}> */}
            <Suspense fallback={<Loading />}>
                <Movieinfo id={id} />
            </Suspense>
            {/* <h4>Videos</h4> */}
            <Suspense fallback={<Loading />}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
}
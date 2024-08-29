process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { resolve } from "path";
import { API_URL } from "../../../(home)/page";
import Movieinfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import Loading from "./loading";

export default async function MovieDetail({
    params: {id},
}: {
    params: {id: string};
}) {
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return <div>
            <h3>Movie detail page</h3>
            {/* <Suspense fallback={<h1>Loading movie info</h1>}> */}
            <Suspense fallback={<Loading />}>
                <Movieinfo id={id} />
            </Suspense>
            <h4>Videos</h4>
            <Suspense fallback={<Loading />}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
}
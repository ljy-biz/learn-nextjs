import Image from "next/image";
import loading from "../../../images/loading.gif";

export default function Loading() {
    return (
        <center><Image src={loading} alt="loading" quality={75} /></center>
    )
}
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const urlParams = useParams();
    return(
        <>
            <h1>Detail Blog</h1>
            <p>ini adalah detail blog {urlParams.slug}</p>
        </>
    );
}
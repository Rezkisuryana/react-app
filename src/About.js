import { Link } from "react-router-dom";

export default function About () {
    return (
        <>
            <h1>Halaman About</h1>
            <p>ini adalah halaman about, untuk asuk kedalam halaman detail about</p>
            <ul>
                <li>
                    <Link to="/about/team">Team</Link>
                </li>
            </ul>
        </>
    );
}
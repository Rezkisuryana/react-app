import { useEffect, useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("rezky");

    useEffect(() => {
        document.title = name;
    });

    function handleNameChange(e) {
        setName(e.tarrget.value);
    }

    return(
        <section>
            <input value={name} onChange={handleNameChange} />
        </section>
    );
}
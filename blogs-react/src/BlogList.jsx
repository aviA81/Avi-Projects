import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function BlogList() {
    const [state, setState] = useState();

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setState(data);
        }());
    }, []);

    return (
        <div>
            <h2>Blog List</h2>
            {state ?
                state.map(user =>
                    (<Blog user={user} key={user.id} />)
                )
                : <h1>Loading...</h1>}
        </div>
    )
}

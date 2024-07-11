import { useState } from "react";
import { Button } from "react-bootstrap";

interface FunctionalComponentProps {
    title: string
}

const FunctionalComponent = (props: FunctionalComponentProps) => {

    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1>{props.title} - Funzione</h1>
            <Button onClick={() => setCount(1000)}>INCREMENTA</Button>
            <p>{count}</p>
        </div>
    )
}

export default FunctionalComponent;
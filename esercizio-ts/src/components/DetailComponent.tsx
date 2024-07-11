import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/IFetch";
import { Spinner } from "react-bootstrap";


const DetailComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticle(data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, [id]);

    if (!article) {
        return <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    }

    return (
        <div style={{ width: "800px" }} className='mx-auto text-center article'>
            <h1 className="mt-3">{article.title}</h1>
            <img className="mt-3" src={article.image_url} alt="immagine-articolo" style={{ width: '800px', height: 'auto' }} />
            <p className="summary mt-3">{article.summary}</p>
            <p><span className="fw-bold">Published at:</span> {new Date(article.published_at).toLocaleDateString()}</p>
            <a href={article.url}>Read more</a>
        </div>

    );
}

export default DetailComponent;




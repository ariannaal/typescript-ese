import { useEffect, useState } from 'react';
import { Article } from '../interfaces/IFetch';




const FetchArticles = () => {
    const [data, setData] = useState<Article[]>([]);

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.results);
                console.log("dati fetch", data)
                console.log("data results", data.results)
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []);


    return (
        <div style={{ width: "600px" }} className='mx-auto text-center article' >
            <h1 className='mt-3'>Articles</h1>
            {data.map((article: Article) => (
                <div key={article.id}>
                    <h2 className='mt-4'>{article.title}</h2>
                    <img src={article.image_url} alt="immagine-articolo" style={{ width: '600px', height: 'auto' }} />
                    <p className='mt-3 summary'>{article.summary}</p>
                    <h6 className='my-3'>News site: {article.news_site}</h6>
                    <p><span className='fw-bold'>Published at:</span> {new Date(article.published_at).toLocaleDateString()}</p>
                    <a href={article.url}>Read more</a>
                </div>
            ))}
        </div>
    );
}

export default FetchArticles;
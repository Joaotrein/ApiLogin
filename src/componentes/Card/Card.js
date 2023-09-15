function Card({i, title, content}) {
    return (
        <>
            <div key={i}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </>
    )
}

export default Card

import './css/card.css'

export default function HomeCard({listing}) {
    return(
        <>
            <div className="card">
                <div className="img-container">
                    <img src={`${listing.image}`} alt="cardimg" className='card-img'/>
                    <span className="heart">&hearts;</span>
                </div>
                <div>
                    {   <>
                        <div className="card-title">{listing.title}</div>
                        <div className="card-price">&#8377;{listing.price.toLocaleString('en-IN')} for two nights</div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}
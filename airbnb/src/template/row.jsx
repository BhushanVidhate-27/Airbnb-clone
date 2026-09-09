import HomeCard from '../template/card';
import './css/card.css'

export default function Row({ title, listings }) {
    let index = 0;
    return (
        <>
            <div className="row-title">
                <div className="one">
                    <div className='ttl'>{title}</div>
                    <img className='arrow' src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-circle-right-icon-svg-download-png-3001927.png?f=webp&w=512" alt="arrow" />
                </div>
                <div className="two">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-icon-svg-download-png-13358093.png?f=webp&w=512" alt="arrrow-left" />
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-circle-right-icon-svg-download-png-13358095.png?f=webp&w=512" alt="arrow-right" />
                </div>
            </div>
            <div className="row-wrapper">
                <div className="row">
                    {
                        listings.map((ele, index) => (
                            <HomeCard listing={ele} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
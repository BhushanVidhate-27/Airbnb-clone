import "./css/nav.css";
import './search.png'
import searchIcon from "./search.png";

export default function Nav() {

    return (
        <nav>
            <div className="nav-icon">
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1280px-Airbnb_Logo_Bélo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230603231949" alt="icon" className="nav-logo" />
            </div>
            <div className="nav-search-bar">
                <i className="fa-thin fa-house" style={{color : " rgb(0, 0, 0)" }}></i>
                <div className="capsule">
                    Anywhere
                </div>
                <div className="capsule">
                    Anytime
                </div>
                <div className="capsule">
                    Add guests
                </div>
                <img src={searchIcon} alt="search" className="nav-search" />
            </div>
            <div className="nav-end-links">
                <div className="btn p-3">Become a host</div>
                <i className="fa-solid fa-globe p-3" style={{ color: "rgb(0, 0, 0)" }}></i>
                <i className="fa-solid fa-bars p-3" style={{ color: "rgb(0, 0, 0)" }}></i>
            </div>
        </nav>
    );
}
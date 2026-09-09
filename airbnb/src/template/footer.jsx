import './css/foot.css'

export default function Footer() {
    return(
        <>
            <div className="foot">
                <div className="foot-links">
                    <div className="support">
                        <a className='top-link' href="">Support</a>
                        <a href="">Help Center</a>
                        <a href="">Get help with a safety issue</a>
                        <a href="">AirCover</a>
                        <a href="">Anti-discrimination</a>
                        <a href="">Disability support</a>
                        <a href="">Cancellation options</a>
                        <a href="">Report neighbourhood concern</a>
                    </div>

                    <div className="hosting">
                        <a className='top-link' href="">Hosting</a>
                        <a href="">Airbnb your home</a>
                        <a href="">Airbnb your experience</a>
                        <a href="">Airbnb your service</a>
                        <a href="">AirCover for Hosts</a>
                        <a href="">Hosting resources</a>
                        <a href="">Community forum</a>
                        <a href="">Hosting responsibly</a>
                        <a href="">Join a free hosting class</a>
                        <a href="">Find a co-host</a>
                        <a href="">Refer a host</a>
                    </div>

                    <div className="airbnb">
                        <a className='top-link' href="">Airbnb</a>
                        <a href="">2026 Summer Release</a>
                        <a href="">Newsroom</a>
                        <a href="">Careers</a>
                        <a href="">Investors</a>
                        <a href="">Airbnb.org emergency stays</a>
                    </div>
                </div>
                <hr />
                <div className="last">
                    <div className="tnc">© 2026 Airbnb, Inc.·PrivacyTermsCompany details</div>
                    <div className="socials"></div>
                </div>
            </div>
        </>
    );
}
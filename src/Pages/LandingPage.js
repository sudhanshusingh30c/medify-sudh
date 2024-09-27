import Footer from '../component/footer/Footer';
import Navbar from '../component/header/Navbar';
import Hero from '../component/herosession/Hero';

function LandingPage(){
    return (
        <div className="landing">
            <h5 className='Topheading'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h5>
    <Navbar />
    <Hero />
    <Footer />
        </div>
    )
}
export default LandingPage;
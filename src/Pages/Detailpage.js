import Navbar from "../component/header/Navbar"
import Footer from "../component/footer/Footer";
import Searchbar from "../component/searchbar/searchbar";
import Cards from "../component/Cards/Cards";
import Side_small_card from "../component/Cards/SideSmallcard";
export default function Centers() {
    return (
        <div >
            <Navbar />
            <Searchbar />
            <div style={{ backgroundColor: 'lightgreen', display: 'flex', flexDirection: 'column' }}>
                <div >
                    <h2 >{localStorage.getItem('count')} medical centers available in {localStorage.getItem('state')}</h2>
                    <p>Book appointments with minimum wait-time & verified doctor details</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Cards />
                    <Side_small_card />

                </div>
            </div>
            <Footer />

        </div>
    )
}
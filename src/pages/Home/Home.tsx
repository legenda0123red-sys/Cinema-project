import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyTickets from "../BuyTickets/BuyTickets";
import MovieList from "../MovieList/MovieList";

function Home(){
    return(
        <>
        <Header />
        <main>
            <BuyTickets />
            <MovieList />
        </main>
        <Footer />
        </>
    )
}

export default Home
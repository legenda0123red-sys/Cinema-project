import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MovieList from "../MovieList/MovieList";

function Home(){
    return(
        <>
        <Header />
        <main>
            <MovieList />
        </main>
        <Footer />
        </>
    )
}

export default Home
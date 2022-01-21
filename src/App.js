import '../src/assets/sass/main.sass'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";

function App() {
    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;

import '../src/assets/sass/main.sass'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Fix0 from "../src/assets/images/0d.png"

function App() {
    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
            <img src={Fix0} alt="" className="fix-0d"/>
        </div>
    );
}

export default App;

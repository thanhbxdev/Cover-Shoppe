import '../src/assets/sass/main.sass'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/User/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Error404Page from "./pages/User/Error404/Error404Page";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

function App() {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/admin" component={Dashboard} exact/>
            <Route exact component={Error404Page}/>
        </Switch>
    );
}

export default App;

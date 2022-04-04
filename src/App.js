import '../src/assets/sass/main.sass'
import HomePage from "./pages/User/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Error404Page from "./pages/User/Error404/Error404Page";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddProducts from "./pages/Admin/Products/addProducts";

function App() {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/admin" component={Dashboard} exact/>
            <Route path="/admin/product/add" component={AddProducts} exact/>
            <Route exact component={Error404Page}/>
        </Switch>
    );
}

export default App;

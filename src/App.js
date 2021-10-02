import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Index from "./Pages/Index";
import Library from "./Pages/Library";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import FormloginAndRegister from "./Pages/FormloginAndRegister";
import AdminAddgames from "./Pages/AdminAddgames";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/catalog" component={Catalog} />
                <Route path="/library" component={Library} />
                <Route path="/home" component={Index} />
                <Route path="/login" component={FormloginAndRegister} />
                <Route path="/contact" component={Contact} />
                <Route path="/admin" component={AdminAddgames} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

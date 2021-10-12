import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Index from "./Pages/Index";
import Library from "./Pages/Library";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import AdminAddgames from "./Pages/AdminAddgames";
import GamePage from "./Pages/GamePage";
import FormRegister from "./Pages/FormRegister";
import Formlogin from "./Pages/Formlogin";
import { AuthContextProvider } from "./components/contexts/authContext";
import Editgame from "./Pages/Editgame";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/editgame/:gameId" component={Editgame} />
                    <Route path="/catalog" component={Catalog} />
                    <Route path="/library" component={Library} />
                    <Route path="/login" component={Formlogin} />
                    <Route path="/register" component={FormRegister} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={AdminAddgames} />
                    <Route path="/gamepage/:gameId" component={GamePage} />
                    <Route path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;

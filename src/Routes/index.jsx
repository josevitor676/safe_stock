
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => {
    
    /* const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Token:User"));

        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated]) */

    return (
        <Switch>
            <Route exact path="/">
                <Register />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    )
}
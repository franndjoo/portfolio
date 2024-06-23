import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Home } from "./src/home";
import { Ad } from "./src/ad";

function App() {
    return <Router>
        <Route path="/" component={Home} />
        <Route path="/ad" component={Ad} />
    </Router>
}

render(App, document.getElementById("main") as HTMLElement);

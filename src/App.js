import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavComponent from "./components/nav/nav"; 
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top/back-to-top";

import HomePage from "./pages/homepage/homepage"

import "./App.scss";

function App() {
  return (
    <Router>
      <BackToTop />
      <NavComponent/>
      <Switch>
        <Route path='/' exact>
          <HomePage/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

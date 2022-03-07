import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top/back-to-top";

import Home from "./pages/home/home";

import "./App.scss";

function App() {
  return (
    <Router>
      <BackToTop />
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

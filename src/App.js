import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

import BackToTop from "./components/back-to-top/back-to-top";

import "./App.scss";

function App() {
  return (
    <Router>
      <BackToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMain from "./components/About/AboutMain";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMain} />
        {/* <Route path="/services" component={Services} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

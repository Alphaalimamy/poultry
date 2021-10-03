import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import InfoSection from "./components/InfoSection/InfoSection";
import HomeDetails from "./components/HomeDetails/HomeDetails";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <InfoSection />
      <HomeDetails />
      <Footer />
      <Switch>
        <Route exact path="/" components={Home} />
      </Switch>
    </Router>
  );
}

export default App;

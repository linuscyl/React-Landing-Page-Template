import { Navigation } from "./components/navigation";
import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Services } from "./components/services";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

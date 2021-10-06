import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./styles/global.scss";
import Routes from "./routes/baseRoutes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

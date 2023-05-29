import Routing from "./pages";
import {WithRouter} from "./components/WithRouter";
import "./index.css";
function App() {
  return (
    <div className="App">
        <Routing/>
    </div>
  );
}

export default WithRouter(App);

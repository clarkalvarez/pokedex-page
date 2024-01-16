import "./App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default App;

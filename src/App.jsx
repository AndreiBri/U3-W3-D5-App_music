import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from "./redux/store";
import { Provider } from "react-redux";

import MyNavbar from "./components/MyNavbar";
import LeftSidebar from "./components/LeftSidebar";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100 bg-dark">
        <div className="d-lg-none position-sticky top-0 start-0 end-0 z-1050 bg-dark">
          <MyNavbar />
        </div>

        <div className="d-flex flex-grow-1 position-relative">
          <div className="d-none d-lg-block position-fixed top-0 start-0 bottom-0 z-1200 flex-shrink-0">
            <LeftSidebar />
          </div>

          <div className="flex-grow-1 d-flex flex-column">
            <main className="flex-grow-1 pt-lg-70 ps-lg-240">
              <HomePage className="bg-dark text-light" />
            </main>

            <div className=" d-md-none">
              <MyFooter className="bg-dark text-secondary small py-5 px-3 px-lg-5 w-100" />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Header></Header>
    </div>
  );
}

export default App;

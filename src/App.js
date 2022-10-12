import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Topics from "./components/Topics/Topics";
import TopicDetails from "./components/TopicDetails/TopicDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/home",
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        { path: "/statistics", element: <Statistics></Statistics> },
        {
          path: "/topics",
          loader: async () => {
            return fetch(" https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        { path: "/blog", element: <Blog></Blog> },
        {
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },
          element: <TopicDetails></TopicDetails>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <h1>This route not found</h1>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

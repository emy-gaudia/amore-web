import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Layout from "./layout/Layout";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Match from "./pages/Match";
import ProtectedRoutes from "./assets/component/ProtectedRoutes";
import ChatScreen from "./pages/ChatsScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />}></Route>
      <Route path="stage" element={<Layout />} errorElement={<Error />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Route>
      <Route path="user" element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
        <Route path="home" element={<Home/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="match" element={<Match/>}></Route>
        <Route path="chat/:userId/:matchUserId" element={<ChatScreen/>} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <body>
      <RouterProvider router={router} />
    </body>
  );
}

export default App;

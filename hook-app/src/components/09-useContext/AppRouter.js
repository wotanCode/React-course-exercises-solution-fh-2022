import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />

        <div className="container">

          <Routes>
            <Route exac path='/' element={<HomeScreen />} />
            <Route exac path='/about' element={<AboutScreen />} />
            <Route exac path='/login' element={<LoginScreen />} />

            {/* <Navigate to='/' /> */}

            <Route element={<HomeScreen />} />

          </Routes>

        </div>
      </div>

    </Router>
  )
}
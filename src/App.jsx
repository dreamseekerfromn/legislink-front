import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

/** component */
import DynamicNav from "./components/DynamicNav";

/** pages */
import FoF from "./pages/FoF";
import TestLobby from "./pages/TestLobby";
import Home from "./pages/Home";
import Bills from "./pages/Bills";
import Representatives from "./pages/Representatives";
import Settings from "./pages/Settings";
import About from "./pages/About.jsx";
import RepresentativeDetail from "./pages/RepresentativeDetail.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import SignIn from "./pages/SignIn.jsx";

/** style */
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <main className="grid-container">
            <DynamicNav />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SignIn/>} />
                <Route path="/dashboard" element={<TestLobby />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/representatives" element={<Representatives />} />
                <Route path="/representatives/:bioguideID" element={<RepresentativeDetail />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help-center" element={<HelpCenter/>} />
                <Route path="*" element={<FoF />} />
              </Routes>
            </div>
          </main>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

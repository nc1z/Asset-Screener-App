import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Watchlist from "./routes/Watchlist";
import Navbar from "./components/Navbar";
import Portfolio from "./routes/Portfolio";
import Ticket from "./routes/Ticket";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/ticket" element={<Ticket />} />
      </Routes>
    </>
  );
}

export default App;

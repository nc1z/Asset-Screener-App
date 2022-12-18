import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Watchlist from "./routes/Watchlist";
import Navbar from "./components/Navbar";
import Portfolio from "./routes/Portfolio";
import Ticket from "./routes/Ticket";
import { UserAuth } from "./context/AuthContext";
import ErrorDisplay from "./components/ErrorDisplay";
import ProtectedRoute from "./ProtectRoute/ProtectedRoute";
import TicketHistory from "./components/TicketHistory";

function App() {
  const [user] = UserAuth();

  return (
    <>
      {user.data && <Navbar />}
      <Routes>
        <Route path="/" element={user.data ? <Home /> : <Login />} />
        <Route path="/signup" element={user.data ? <Account /> : <Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ticket" element={<Ticket />} />
          <Route path="/portfolio/history" element={<TicketHistory />} />
        </Route>
        <Route
          path="*"
          element={<ErrorDisplay error={"Route does not exist"} />}
        />
      </Routes>
    </>
  );
}

export default App;

// Current:
//   - Check for authentication once if entering any private routes
// Alternative:
//   - A more secure way would be to wrap every route with ProtectedRoute
//   - This re-renders and checks for token every route change
//   - Pros: More secure, if token removed, then unauthorized upon route change
//   - Cons: Api calls (in AuthContext) on every route change, heavier load on network

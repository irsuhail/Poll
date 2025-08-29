import { Routes, Route, Link } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";
import PollList from "./components/PollList";
import PollDetail from "./components/PollDetail";
import createPoll from "./components/createPoll";
import { useContext } from "react";

function Navbar() {
  const { isAuthenticated, login } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated && <Link to="/create">Create Poll</Link>}
      {!isAuthenticated && <button onClick={login}>Login</button>}
    </nav>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<PollList />} />
        <Route path="/poll/:id" element={<PollDetail />} />
        <Route path="/create" element={<createPollreatePoll />} />
      </Routes>
    </UserProvider>
  );
}

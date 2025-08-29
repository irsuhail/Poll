import {BrowserRouter as Link, Route, Router, Routes } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";
import PollList from "./components/PollList";
import PollDetail from "./components/PollDetail";
import CreatePoll from "./components/createPoll";
import { useContext } from "react";

function Navbar() {
  const {isAuthenticated,login}=useContext(UserContext);

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
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<PollList/>}/>
         <Route path="/" element={<PollDetail/>}/>
          <Route path="/" element={<CreatePoll/>}/>
          </Routes>
      </Router>
    </UserProvider>
  );
}

import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import NotFound from "./components/NotFound";
import { GithubUserList } from "./components/GithubUserList";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="users">Ricerca GitHub</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Umberto" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

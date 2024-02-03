import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Root = (props) => (
  <div>
    <Outlet />
  </div>
);

// Taken mostly from https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path=""
        element={
          <ul>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        }
      />
      <Route
        path="about"
        element={
          <>
            <div>About</div>
            <Link to="/">Go back</Link>
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <div>Contact</div>
            <Link to="/">Go back</Link>
          </>
        }
      />
      <Route
        path="login"
        element={
          <>
            <div>Login</div>
            <Link to="/">Go back</Link>
          </>
        }
      />
    </Route>,
  ),
  {
    basename: "/app",
  },
);

const App = () => <RouterProvider router={router} />;

export default App;

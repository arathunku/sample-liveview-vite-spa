import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import ReactSvg from "./assets/react.svg";
import Contact from "./Contact";

const LiveLink = ({ navigate, href, patch, replace, ...props }) => {
  const dataProps = {};

  if (navigate) {
    dataProps["data-phx-link"] = "redirect";
    dataProps["data-phx-link-state"] = replace ? "replace" : "push";
  } else if (patch) {
    dataProps["data-phx-link"] = "patch";
    dataProps["data-phx-link-state"] = replace ? "replace" : "push";
  }

  return (
    <Link to={navigate || patch || href || "#"} {...props} {...dataProps} />
  );
};

const Root = (props) => (
  <>
    <header className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between border-b border-zinc-100 py-3 text-sm">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={ReactSvg} alt="React SVG" className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
          <Link to="about" className="hover:text-zinc-700">
            About
          </Link>
          <Link to="contact" className="hover:text-zinc-700">
            Contact
          </Link>
          <LiveLink navigate="login" className="hover:text-zinc-700">
            Login
          </LiveLink>
        </div>
      </div>
    </header>
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Outlet />
      </div>
    </main>
  </>
);

// Taken mostly from https://reactrouter.com/en/main/start/overview
const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          path=""
          element={
            <>
              <p>Landing page</p>
              <p>Cheers from React</p>
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <div>About</div>
            </>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="login"
          element={
            <>
              <div>Login</div>
            </>
          }
        />
      </Route>,
    ),
    {
      basename: "/app",
    },
  );

export { getRouter };

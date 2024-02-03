import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import ReactSvg from "./assets/react.svg";

// see: https://github.com/phoenixframework/phoenix_live_view/blob/d41ea3b55b2a6a74c3a5634737f0a998042b32f3/lib/phoenix_component.ex#L2667
const LiveLink = ({ navigate, href, replace, ...props }) => {
  const dataProps = {}

  if (navigate) {
    dataProps["data-phx-link"] = "redirect"
    dataProps["data-phx-link-state"] = replace ? "replace" : "push"
  }

  return <Link to={navigate || href || "#"} {...props} {...dataProps} />;
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
          <Link to="about" className="hover:text-zinc-700">About</Link>
          <Link to="contact" className="hover:text-zinc-700">Contact</Link>
          <LiveLink navigate="login" className="hover:text-zinc-700">Login</LiveLink>
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
const getRouter = () => createBrowserRouter(
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
      <Route
        path="contact"
        element={
          <>
            <div>Contact</div>
          </>
        }
      />
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AllBochaneks, Login, Error } from "./pages";

// LOADERS
import { loader as allBochaneksLoader } from "./pages/AllBochaneks";
// ACTIONS
import { action as loginAction } from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/all-bochaneks",
				element: <AllBochaneks />,
				loader: allBochaneksLoader,
			},
			{
				path: "/login",
				element: <Login />,
				action: loginAction,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;

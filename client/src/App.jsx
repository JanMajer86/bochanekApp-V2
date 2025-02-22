import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AllBochaneks } from "./pages";

// LOADERS
import { loader as allBochaneksLoader } from "./pages/AllBochaneks";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "/all-bochaneks",
				element: <AllBochaneks />,
				loader: allBochaneksLoader,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;

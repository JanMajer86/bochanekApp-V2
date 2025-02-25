import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AllBochaneks, Login, Error } from "./pages";
import { Modal } from "./components";

// LOADERS
import { loader as allBochaneksLoader } from "./pages/AllBochaneks";
import { loader as editLoader } from "./components/Modal";
// ACTIONS
import { action as loginAction } from "./pages/Login";
import { action as deleteAction } from "./pages/DeleteBochanek";

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
				children: [
					{
						path: "edit-bochanek/:id",
						element: <Modal />,
						loader: editLoader,
					},
				],
			},
			{
				path: "/delete-bochanek/:id",
				action: deleteAction,
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

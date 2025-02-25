import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, AllBochaneks, Login, Error } from "./pages";
import { EditModal } from "./components";

// LOADERS
import { loader as allBochaneksLoader } from "./pages/AllBochaneks";
import { loader as editLoader } from "./components/EditModal";
// ACTIONS
import { action as loginAction } from "./pages/Login";
import { action as deleteAction } from "./pages/DeleteBochanek";
import { action as editAction } from "./components/EditModal";

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
						element: <EditModal />,
						loader: editLoader,
						action: editAction,
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

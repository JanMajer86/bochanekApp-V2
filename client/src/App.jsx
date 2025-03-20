import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, DashboardLayout, Login, Error } from "./pages";
import { CreateModal, EditModal } from "./components";

// LOADERS
import { loader as allBochaneksLoader } from "./pages/DashboardLayout";
import { loader as editLoader } from "./components/EditModal";
// ACTIONS
import { action as loginAction } from "./pages/Login";
import { action as deleteAction } from "./pages/DeleteBochanek";
import { action as createAction } from "./components/CreateModal";
import { action as editAction } from "./components/EditModal";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Login />, action: loginAction },
			{
				path: "/all-bochaneks",
				element: <DashboardLayout />,
				loader: allBochaneksLoader,
				children: [
					{
						path: "edit-bochanek/:id",
						element: <EditModal />,
						loader: editLoader,
						action: editAction,
					},
					{
						path: "create-bochanek",
						element: <CreateModal />,
						action: createAction,
					},
				],
			},
			{
				path: "/delete-bochanek/:id",
				action: deleteAction,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;

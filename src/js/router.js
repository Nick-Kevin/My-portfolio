export default const router = async () => {
	const routes = [
		{
			path: "/",
			view: view: () => alert("home")
		},
		{
			path: "/work",
			view: () => alert("work")
		},
		{
			path: "/about",
			view: () => alert("about")	
		},
		{
			path: "/contact",
			view: () => alert("contact")	
		}
	];
}
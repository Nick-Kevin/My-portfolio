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

	const checkMatches = router.map(route => {
	    return {
	        route: route,
	        isMatch: location.pathname === route.path
	    }
	})

	console.log(checkMatches);
}
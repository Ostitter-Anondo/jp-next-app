import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Layout = async ({ children }) => {

	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();
	return (
		<>
			<header>
				<Navbar authStat={isUserAuthenticated} />
			</header>
			{children}
		</>
	);
};

export default Layout;

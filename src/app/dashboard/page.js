import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
const Page = async () => {
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();

	const { getUser } = getKindeServerSession();
	const user = await getUser();
	console.log(user);

	if (!isUserAuthenticated) {
		redirect("/");
	}

	return (
		<>
			<header>
				<Navbar authStat={isUserAuthenticated} />
			</header>
      <main className="w-11/12 mx-auto my-12">
        <div className="flex gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary">{user.given_name}</h2>
            <h2 className="text-3xl font-semibold text-secondary">{user.family_name}</h2>
            <h3 className="text-xl font-light">{user.email}</h3>
          </div>
        </div>
      </main>
		</>
	);
};

export default Page;

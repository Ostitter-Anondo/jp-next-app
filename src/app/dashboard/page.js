import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
const Page = async () => {
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();

	const { getUser } = getKindeServerSession();
	const user = await getUser();
	if (!isUserAuthenticated) {
		redirect("/");
	}

	return (
		<>
			<header>
				<Navbar authStat={isUserAuthenticated} />
			</header>
			<main className="w-11/12 mx-auto my-12">
				<div className="flex gap-12 items-center">
					<Image
						src={user.picture}
						width={200}
						height={200}
						alt="userImg"
						className="rounded-full"
					/>
					<div className="">
						<h2 className="text-3xl font-bold text-primary">{user.given_name}</h2>
						<h2 className="text-3xl font-semibold text-secondary">
							{user.family_name}
						</h2>
						<h3 className="text-xl font-light">{user.email}</h3>
					</div>
				</div>
				<h1 className="font-extrabold text-accent text-5xl text-center my-32">
					&apos;tis but a mere humble dash
				</h1>
			</main>
		</>
	);
};

export default Page;

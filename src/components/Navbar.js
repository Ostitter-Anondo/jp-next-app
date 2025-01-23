"use client";
import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = ({ authStat = false }) => {
	const links = (
		<>
			{authStat ? (
				<li>
					<Link href={"/dashboard"}>Dashboard</Link>
				</li>
			) : (
				<></>
			)}
		</>
	);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<Link href={"/"} className="btn btn-ghost text-xl">
					SimpleNext
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			<div className="navbar-end">
				{authStat ? (
					<LogoutLink className="btn btn-outline btn-error">Log out</LogoutLink>
				) : (
					<ul className="join menu menu-horizontal border border-base-300">
						<li>
							<LoginLink className="join-item">Login</LoginLink>
						</li>
						<li>
							<RegisterLink className="join-item">Signup</RegisterLink>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Navbar;

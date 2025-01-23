"use client";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [params.post]);
	console.log(post);
	return (
    <>
    <header>
      <Navbar />
    </header>
		<div className="w-11/12 mx-auto">
			<h1 className="font-extrabold text-3xl text-center">{post.title}</h1>
			<p>{post.body}</p>
		</div>
    </>
	);
};

export default Page;

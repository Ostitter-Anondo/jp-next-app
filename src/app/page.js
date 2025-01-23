import DataCard from "@/components/DataCard";
import Navbar from "@/components/Navbar";

export default async function Home() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const dataList = await res.json();

	return (
    <>
    <header>
      <Navbar />
    </header>
		<div className="grid grid-cols-3 gap-6 w-11/12 mx-auto place-items-center">
			{dataList.map((data) => (
				<DataCard data={data} key={data.id} />
			))}
		</div>
    </>
	);
}

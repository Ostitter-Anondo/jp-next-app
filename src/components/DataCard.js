import Link from "next/link";

const DataCard = ({data}) => {
	return (
		<div key={data.id} className="card bg-primary text-primary-content">
			<div className="card-body">
				<h2 className="card-title">{data.title}</h2>
				<p>{data.body}</p>
				<div className="card-actions justify-end">
					<Link href={`/post/${data.id}`} className="btn">
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DataCard;

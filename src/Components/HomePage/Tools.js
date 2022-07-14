import useTools from "../Hooks/useTools";
import Tool from "../HomePage/Tool";

const Tools = () => {
	const [tools] = useTools();
	// console.log(tools)

	return (
		<div>
			<div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-8">
				{tools.map((tool, index) => (
					<Tool key={tool._id} tool={tool}></Tool>
				))}
			</div>
		</div>
	);
};

export default Tools;

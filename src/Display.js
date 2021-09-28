import React from "react";
import Menu from "./Menu";

//Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	const { menu, screen } = props;
	const { wallpaper, screenIndex } = screen;
	return (
		<div
			className="display"
			style={{
				backgroundImage: "url(" + wallpaper[screenIndex] + ")",
				backgroundSize: "100% 100%",
			}}
		>
			<Menu menu={menu} />
		</div>
	);
};

export default Display;

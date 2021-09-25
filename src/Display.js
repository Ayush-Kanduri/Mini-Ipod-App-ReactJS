import React from "react";
import Menu from "./Menu";

const Display = (props) => {
	const { menu, screen } = props;
	const { wallpaper, index } = screen;
	return (
		<div
			className="display"
			style={{
				backgroundImage: "url(" + wallpaper[index] + ")",
				backgroundSize: "100% 100%",
			}}
		>
			<Menu menu={menu} />
		</div>
	);
};

export default Display;

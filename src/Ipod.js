import React from "react";
import Display from "./Display";
import Controller from "./Controller";

const Ipod = (props) => {
	const {
		menu,
		screen,
		rotate,
		tap,
		isMenuVisible,
		addClass,
		removeClass,
		mouse,
	} = props;
	return (
		<div className="ipod">
			<div
				className="top-container"
				onMouseUp={(e) => {
					e.stopPropagation();
					removeClass("inner-circle", "down");
					return;
				}}
			>
				<div className="display-container">
					<Display menu={menu} screen={screen} />
				</div>
			</div>
			<div className="bottom-container">
				<Controller
					menu={menu}
					rotate={rotate}
					tap={tap}
					isMenuVisible={isMenuVisible}
					addClass={addClass}
					removeClass={removeClass}
					mouse={mouse}
				/>
			</div>
		</div>
	);
};

export default Ipod;

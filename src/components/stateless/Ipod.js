import React from "react";
import Display from "./Display";
import Controller from "./Controller";

//Ipod Functional Component for the Ipod Structure with the incoming Props
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
		controllerRef,
		songsList,
		play,
		nextSong,
		prevSong,
		updateProgress,
		progressRef,
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
					<Display
						menu={menu}
						screen={screen}
						songsList={songsList}
						updateProgress={updateProgress}
						progressRef={progressRef}
					/>
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
					screen={screen}
					controllerRef={controllerRef}
					songsList={songsList}
					play={play}
					nextSong={nextSong}
					prevSong={prevSong}
				/>
			</div>
		</div>
	);
};

export default Ipod;

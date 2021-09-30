import React from "react";
import Display from "./Display";
import Controller from "./Controller";
import $ from "jquery";

// Ipod Functional Component for the Ipod Structure with the incoming Props
const Ipod = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
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
		theme,
		orientation,
	} = props;
	//------------------------------------------------------------------------------------------
	// Change Orientation
	if (orientation.orientationIndex === 1) {
		$(".ipod").css("height", "563px");
		$(".ipod").css("width", "333px");
	} else {
		$(".ipod").css("height", "580px");
		$(".ipod").css("width", "370px");
	}
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Theme Color
	const themeBottomContainer = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Theme Shadow
	const themeIpod = () => {
		if (theme.themeIndex === 0) {
			return { boxShadow: "1px 4px 15px 10px rgba(151, 151, 151, 0.72)" };
		} else {
			return { boxShadow: "0px 1px 15px 8px rgba(151, 151, 151, 0.72)" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="ipod" style={themeIpod()}>
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
			<div className="bottom-container" style={themeBottomContainer()}>
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
					theme={theme}
					play={play}
					nextSong={nextSong}
					prevSong={prevSong}
				/>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Ipod;

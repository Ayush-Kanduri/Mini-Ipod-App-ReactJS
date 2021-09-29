import React from "react";
import Menu from "./Menu";
import Allsongs from "./Allsongs";

//Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	const { menu, screen, songsList, updateProgress, progressRef } = props;
	const { wallpaper, screenIndex } = screen;
	return (
		<div className="display">
			{screenIndex === 7 && (
				<Allsongs
					songsList={songsList}
					updateProgress={updateProgress}
					progressRef={progressRef}
				/>
			)}
			{screenIndex !== 7 && (
				<img
					src={wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						height: "100%",
						width: "100%",
						borderTopLeftRadius: "10%",
						borderTopRightRadius: "10%",
						zIndex: 5,
					}}
				/>
			)}

			<Menu menu={menu} />
		</div>
	);
};

export default Display;

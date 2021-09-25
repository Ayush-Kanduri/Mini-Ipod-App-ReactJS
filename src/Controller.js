import React from "react";

const Controller = (props) => {
	const { menu, rotate, tap, isMenuVisible, addClass, removeClass, mouse } =
		props;
	return (
		<div
			className="controller-container"
			id="controller-container"
			onClick={(e) => {
				e.stopPropagation();
				return;
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				removeClass("inner-circle", "down");
				return;
			}}
			onMouseDown={(e) => {
				e.stopPropagation();
				return;
			}}
		>
			<div
				className="controller"
				draggable="false"
				style={styles.controller}
				onClick={(e) => {
					e.stopPropagation();
					return;
				}}
				onMouseDown={(e) => {
					e.stopPropagation();
					rotate(menu);
					return;
				}}
				onMouseUp={(e) => {
					e.stopPropagation();
					removeClass("inner-circle", "down");
					return;
				}}
				id="controller"
			>
				<div
					className={
						mouse.innerCircle === ""
							? "inner-circle"
							: "inner-circle down"
					}
					draggable="false"
					style={{ height: 80, width: 80 }}
					onClick={(e) => {
						e.stopPropagation();
						tap(menu);
						return;
					}}
					onMouseDown={(e) => {
						e.stopPropagation();
						addClass("inner-circle", "down");
						return;
					}}
					onMouseUp={(e) => {
						e.stopPropagation();
						removeClass("inner-circle", "down");
						return;
					}}
				></div>
				<div
					className="menu-btn"
					draggable="false"
					onClick={(e) => {
						e.stopPropagation();
						isMenuVisible(menu);
						return;
					}}
				>
					<h1 style={styles.menu} draggable="false">
						MENU
					</h1>
				</div>
				<div className="forward" draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
						alt="forward"
						style={styles.forward}
						draggable="false"
					/>
				</div>
				<div className="backward" draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/512/26/26309.png"
						alt="backward"
						style={styles.backward}
						draggable="false"
					/>
				</div>
				<div className="play-pause" draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/512/64/64595.png"
						alt="play-pause"
						style={styles.resume}
						draggable="false"
					/>
				</div>
			</div>
		</div>
	);
};

const styles = {
	controller: {
		height: 230,
		width: 230,
	},
	forward: {
		height: 40,
		width: 40,
		position: "absolute",
		top: "92px",
		right: "22px",
	},
	backward: {
		height: 40,
		width: 40,
		transform: "rotate(180deg)",
		position: "absolute",
		top: "92px",
		left: "20px",
	},
	menu: {
		fontWeight: "bolder",
		fontSize: 27,
		position: "absolute",
		top: "25px",
		left: "74px",
	},
	resume: {
		height: 28,
		width: 38,
		position: "absolute",
		bottom: "24px",
		left: "98px",
	},
};

export default Controller;

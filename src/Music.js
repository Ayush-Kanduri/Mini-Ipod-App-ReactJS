import React from "react";

const Music = (props) => {
	return (
		<div className="musicPage hide" style={{ backgroundColor: "lightcyan" }}>
			<div className="ipod-title" style={styles.title}>
				<p style={{ textShadow: "1px 2px 5px lightgray" }}>Mini Ipod App</p>
			</div>
			<div className="allsongs" style={styles.text}>
				<p style={{ marginLeft: "1rem" }}>All Songs</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={{
						height: 10,
						width: 10,
						marginRight: 15,
						display: "none",
					}}
					id="option-image"
				/>
			</div>
			<div className="artists" style={styles.text}>
				<p style={{ marginLeft: "1rem" }}>Artists</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={{
						height: 10,
						width: 10,
						marginRight: 15,
						display: "none",
					}}
					id="option-image2"
				/>
			</div>
			<div className="albums" style={styles.text}>
				<p style={{ marginLeft: "1rem" }}>Albums</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={{
						height: 10,
						width: 10,
						marginRight: 15,
						display: "none",
					}}
					id="option-image3"
				/>
			</div>
		</div>
	);
};

const styles = {
	title: {
		fontSize: "1.3rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: "bolder",
		display: "inline-flex",
		justifyContent: "space-between",
		alignItems: "center",
		cursor: "pointer",
		height: "3rem",
	},
};

export default Music;

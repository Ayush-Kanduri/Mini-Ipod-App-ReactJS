import React from "react";
import Ipod from "./Ipod";
import ZingTouch from "zingtouch";

// toggle=yes{
// 	mainmenuindex=0{
// 					musicindex=0{
// 						//render the page
// 					}
// 					musicindex=1{
// 						//render the page
// 					}
// 					musicindex=2{
// 						//render the page
// 					}
// 	}
// 	mainmenuindex=1{
// 		//render the page
// 	}
// 	mainmenuindex=2{
// 		//render the page
// 	}
// 	mainmenuindex=3{
// 					settingsmenu=0{
// 						//render the page
// 					}
// 					settingsmenu=1{
// 						//render the page
// 					}
// 					settingsmenu=2{
// 						//render the page
// 					}
// 	}
// }
// toggle=no{}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: {
				options: [
					{
						music: ["all-songs", "artists", "albums"],
					},
					{
						games: [],
					},
					{
						coverflow: [],
					},
					{
						settings: [
							"change-wallpaper",
							"change-orientation",
							"change-theme",
						],
					},
				],
				menuVisible: "no",
				musicVisible: "no",
				settingsVisible: "no",
				optionsIndex: 0,
				musicIndex: 0,
				settingsIndex: 0,
			},
			screen: {
				wallpaper: [
					"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
					"https://c4.wallpaperflare.com/wallpaper/817/454/537/synthwave-virtualreality-vaporwave-retrowave-wallpaper-preview.jpg",
					"https://c4.wallpaperflare.com/wallpaper/632/790/513/digital-digital-art-artwork-city-lights-hd-wallpaper-preview.jpg",
					"https://wallpaperaccess.com/full/1624051.jpg",
					"https://c4.wallpaperflare.com/wallpaper/472/165/95/music-marshmello-dj-marshmello-music-hd-wallpaper-preview.jpg",
					"https://www.wordpress-extra.gallery/wp-content/uploads/coverflow-screenshot.png",
					"https://gofirefox.com/static/75f8d3e62f0fbdeb90946d045d5253a9/dc4e0/games.jpg",
					"https://i.pinimg.com/originals/4e/2b/8a/4e2b8a66310103e7b98981354a6264cf.gif",
					"https://cdn2.unrealengine.com/egs-spotifymusicandpodcasts-spotifyab-g1a-00-1920x1080-7801f89338c1.jpg",
					"https://c.saavncdn.com/032/2019-Top-Albums-Bollywood-Hindi-2019-20200110104315-500x500.jpg",
				],
				index: 0,
				//0-->wallpaper
				//5-->coverflow
				//6-->games
				//7-->all songs
				//8-->artists
				//9-->albums
			},
			mouse: {
				innerCircle: "",
			},
		};
	}

	isMenuVisible = (menu) => {
		if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "no"
		) {
			menu.menuVisible = "no";
			console.log("Menu Hidden");
		} else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "yes" &&
			menu.settingsVisible === "no"
		) {
			menu.musicVisible = "no";
		} else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "yes"
		) {
			menu.settingsVisible = "no";
		} else {
			menu.menuVisible = "yes";
			console.log("Menu Visible");
		}
		this.setState({ menu });
		return;
	};

	addClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "down";
			this.setState({ mouse });
		}
	};

	removeClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "";
			this.setState({ mouse });
		}
	};

	componentDidMount() {
		this.containerElementOuter = document.getElementById("controller");
		this.activeRegionOuter = ZingTouch.Region(this.containerElementOuter);
	}

	tap = (menu) => {
		if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "no"
		) {
			if (menu.optionsIndex === 0) {
				menu.musicVisible = "yes";
				alert("MUSIC");
			} else if (menu.optionsIndex === 1) {
				alert("GAMES");
			} else if (menu.optionsIndex === 2) {
				alert("COVERFLOW");
			} else {
				menu.settingsVisible = "yes";
				alert("SETTINGS");
			}
		} else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "yes" &&
			menu.settingsVisible === "no"
		) {
			if (menu.musicIndex === 0) {
				alert("ALL SONGS");
			} else if (menu.musicIndex === 1) {
				alert("ARTISTS");
			} else {
				alert("ALBUMS");
			}
		} else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "yes"
		) {
			if (menu.settingsIndex === 0) {
				alert("CHANGE WALLPAPER");
			} else if (menu.settingsIndex === 1) {
				alert("CHANGE ORIENTATION");
			} else {
				alert("CHANGE THEME");
			}
		} else {
			console.log("DON'T CLICK");
		}
		this.setState({ menu });
		return;
	};

	rotate = (menu) => {
		this.activeRegionOuter.bind(
			this.containerElementOuter,
			"rotate",
			(event) => {
				event.stopPropagation();
				if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "no"
				) {
					console.log("ROTATE INSIDE - MAIN MENU");
					// const angle = event.detail.angle;
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 90) {
						menu.optionsIndex = 0;
					} else if (angle > 90 && angle <= 180) {
						menu.optionsIndex = 1;
					} else if (angle > 180 && angle <= 270) {
						menu.optionsIndex = 2;
					} else if (angle > 270 && angle <= 360) {
						menu.optionsIndex = 3;
					} else if (angle >= -90 && angle < 0) {
						menu.optionsIndex = 3;
					} else if (angle >= -180 && angle < -90) {
						menu.optionsIndex = 2;
					} else if (angle >= -270 && angle < -180) {
						menu.optionsIndex = 1;
					} else if (angle >= -360 && angle < -270) {
						menu.optionsIndex = 0;
					} else {
					}
					// this.setState(
					// 	{ menu }
					// 	// 	, () => {
					// 	// 	this.activeClassSelect();
					// 	// }
					// );
				} else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "yes" &&
					menu.settingsVisible === "no"
				) {
					// this.setState({ menu });
					console.log("ROTATE INSIDE - MUSIC MENU");
					const angle = event.detail.distanceFromOrigin;
					if (angle >= 0 && angle <= 90) {
						menu.musicIndex = 0;
					} else if (angle > 90 && angle <= 180) {
						menu.musicIndex = 1;
					} else if (angle > 180 && angle <= 270) {
						menu.musicIndex = 2;
					} else if (angle > 270 && angle <= 360) {
						menu.musicIndex = 3;
					} else if (angle >= -90 && angle < 0) {
						menu.musicIndex = 3;
					} else if (angle >= -180 && angle < -90) {
						menu.musicIndex = 2;
					} else if (angle >= -270 && angle < -180) {
						menu.musicIndex = 1;
					} else if (angle >= -360 && angle < -270) {
						menu.musicIndex = 0;
					} else {
					}
				} else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "yes"
				) {
					console.log("ROTATE INSIDE - SETTINGS MENU");
					const angle = event.detail.distanceFromOrigin;
					if (angle >= 0 && angle <= 90) {
						menu.settingsIndex = 0;
					} else if (angle > 90 && angle <= 180) {
						menu.settingsIndex = 1;
					} else if (angle > 180 && angle <= 270) {
						menu.settingsIndex = 2;
					} else if (angle > 270 && angle <= 360) {
						menu.settingsIndex = 3;
					} else if (angle >= -90 && angle < 0) {
						menu.settingsIndex = 3;
					} else if (angle >= -180 && angle < -90) {
						menu.settingsIndex = 2;
					} else if (angle >= -270 && angle < -180) {
						menu.settingsIndex = 1;
					} else if (angle >= -360 && angle < -270) {
						menu.settingsIndex = 0;
					} else {
					}
				} else {
					console.log("DON'T ROTATE");
				}
				this.setState({ menu });
			}
		);
	};

	render() {
		const { menu, screen, mouse } = this.state;
		return (
			<div className="App">
				<Ipod
					rotate={this.rotate}
					tap={this.tap}
					screen={screen}
					menu={menu}
					isMenuVisible={this.isMenuVisible}
					addClass={this.addClass}
					removeClass={this.removeClass}
					// innerclass={this.innerclass}
					mouse={mouse}
				/>
			</div>
		);
	}
}

export default App;

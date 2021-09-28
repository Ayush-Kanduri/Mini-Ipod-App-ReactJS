import React from "react";
import Ipod from "./Ipod";
import ZingTouch from "zingtouch";

//Stateful App Class Component to Render the App as a whole
class App extends React.Component {
	//-------------------------------------------------------------------------------------------
	//Constructor for initialization of State and Ref
	constructor() {
		super();
		//State
		this.state = {
			//State Managing the Menu
			menu: {
				//Menu Options along with their Sub-Menu Options
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
				//Making the Menu Visible
				menuVisible: "no",
				musicVisible: "no",
				settingsVisible: "no",
				//Menu Options Index for traversal in Options and Sub Options
				optionsIndex: 0,
				musicIndex: 0,
				settingsIndex: 0,
				//used for Main Page Rendering like songs,artists,albums
				pageRender: "no",
			},
			//State Managing the Screen Display
			screen: {
				//List of wallpapers, Pages Background to Render
				wallpaper: [
					// wallpapers
					"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
					"https://c4.wallpaperflare.com/wallpaper/817/454/537/synthwave-virtualreality-vaporwave-retrowave-wallpaper-preview.jpg",
					"https://c4.wallpaperflare.com/wallpaper/632/790/513/digital-digital-art-artwork-city-lights-hd-wallpaper-preview.jpg",
					"https://images.pexels.com/photos/4301252/pexels-photo-4301252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					"https://c4.wallpaperflare.com/wallpaper/472/165/95/music-marshmello-dj-marshmello-music-hd-wallpaper-preview.jpg",
					// coverflow
					"https://www.wordpress-extra.gallery/wp-content/uploads/coverflow-screenshot.png",
					// games
					"https://images.pexels.com/photos/3593986/pexels-photo-3593986.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
					// all songs
					"https://i.pinimg.com/originals/4e/2b/8a/4e2b8a66310103e7b98981354a6264cf.gif",
					// artists
					"https://cdn2.unrealengine.com/egs-spotifymusicandpodcasts-spotifyab-g1a-00-1920x1080-7801f89338c1.jpg",
					// albums
					"https://i.mdel.net/i/db/2019/12/1255378/1255378-800w.jpg",
				],
				//Wallpaper index for traversal in Wallpaper Array to access wallpaper
				wallpaperIndex: 0,
				//Wallpaper index for traversal in Wallpaper Array for every element
				screenIndex: 0,
			},
			//State Managing the Mouse Click CSS Effect
			mouse: {
				innerCircle: "",
			},
		};
		//Ref to access the Component
		this.controllerRef = React.createRef();
	}
	//-------------------------------------------------------------------------------------------
	//Functionality to choose the menu to display and handle the Menu Clicks
	isMenuVisible = (menu, screen) => {
		//To go back to the previous Menu from the current Homepage Display
		if (menu.pageRender === "yes") {
			menu.menuVisible = "yes";
			screen.screenIndex = screen.wallpaperIndex;
			menu.pageRender = "no";
		}
		//To open the Menu and visit different Menu Options
		else {
			if (
				menu.menuVisible === "yes" &&
				menu.musicVisible === "no" &&
				menu.settingsVisible === "no"
			) {
				menu.menuVisible = "no";
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
			}
		}
		this.setState({ menu, screen });
		return;
	};
	//-------------------------------------------------------------------------------------------
	//Functionality to handle the Down Press CSS effect on Middle Button
	addClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "down";
			this.setState({ mouse });
		}
	};
	//-------------------------------------------------------------------------------------------
	//Functionality to handle the Up Press CSS effect on Middle Button
	removeClass = (classname, event) => {
		if (classname === "inner-circle" && event === "down") {
			const { mouse } = this.state;
			mouse.innerCircle = "";
			this.setState({ mouse });
		}
	};
	//-------------------------------------------------------------------------------------------
	//Functionality to handle the Click Operations in the App for the Displays
	tap = (menu, screen) => {
		//To go to the Sub Menu of the Main Menu
		if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "no"
		) {
			if (menu.optionsIndex === 0) {
				menu.musicVisible = "yes";
			} else if (menu.optionsIndex === 1) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 6;
			} else if (menu.optionsIndex === 2) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 5;
			} else {
				menu.settingsVisible = "yes";
			}
		}
		//To Open the Pages of Music Menu
		else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "yes" &&
			menu.settingsVisible === "no"
		) {
			if (menu.musicIndex === 0) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 7;
			} else if (menu.musicIndex === 1) {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 8;
			} else {
				menu.pageRender = "yes";
				menu.menuVisible = "no";
				screen.screenIndex = 9;
			}
		}
		//To Open the Pages of Settings Menu
		else if (
			menu.menuVisible === "yes" &&
			menu.musicVisible === "no" &&
			menu.settingsVisible === "yes"
		) {
			if (menu.settingsIndex === 0) {
				if (screen.wallpaperIndex < 4) {
					screen.wallpaperIndex += 1;
				} else {
					screen.wallpaperIndex = 0;
				}
				screen.screenIndex = screen.wallpaperIndex;
			}
			//For Theme and Orientation
			else if (menu.settingsIndex === 1) {
				alert("Feature Will Be Added in the Next Version Release !! :)");
			} else {
				alert("Feature Will Be Added in the Next Version Release !! :)");
			}
		} else {
		}
		this.setState({ menu, screen });
		return;
	};
	//-------------------------------------------------------------------------------------------
	//Functionality to handle the Rotation Operations in the App for the Options
	rotate = (menu) => {
		//Binds the rotate event to the active region
		this.activeRegionOuter.bind(
			this.containerElementOuter,
			"rotate",
			(event) => {
				event.stopPropagation();
				//Rotation in Main Menu
				if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "no"
				) {
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
				}
				//Rotation in Music Menu
				else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "yes" &&
					menu.settingsVisible === "no"
				) {
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 120) {
						menu.musicIndex = 0;
					} else if (angle > 120 && angle <= 240) {
						menu.musicIndex = 1;
					} else if (angle > 240 && angle <= 360) {
						menu.musicIndex = 2;
					} else if (angle >= -120 && angle < 0) {
						menu.musicIndex = 2;
					} else if (angle >= -240 && angle < -120) {
						menu.musicIndex = 1;
					} else if (angle >= -360 && angle < -240) {
						menu.musicIndex = 0;
					} else {
					}
				}
				//Rotation in Settings Menu
				else if (
					menu.menuVisible === "yes" &&
					menu.musicVisible === "no" &&
					menu.settingsVisible === "yes"
				) {
					const angle = event.detail.angle;
					if (angle >= 0 && angle <= 120) {
						menu.settingsIndex = 0;
					} else if (angle > 120 && angle <= 240) {
						menu.settingsIndex = 1;
					} else if (angle > 240 && angle <= 360) {
						menu.settingsIndex = 2;
					} else if (angle >= -120 && angle < 0) {
						menu.settingsIndex = 2;
					} else if (angle >= -240 && angle < -120) {
						menu.settingsIndex = 1;
					} else if (angle >= -360 && angle < -240) {
						menu.settingsIndex = 0;
					} else {
					}
				} else {
				}
				this.setState({ menu });
			}
		);
	};
	//-------------------------------------------------------------------------------------------
	//Gets called before the First Re-Render and uses the Reference to the controller
	componentDidMount() {
		this.containerElementOuter = this.controllerRef.current;
		this.activeRegionOuter = new ZingTouch.Region(this.containerElementOuter);
	}
	//-------------------------------------------------------------------------------------------
	//Renders the App Component
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
					mouse={mouse}
					controllerRef={this.controllerRef}
				/>
			</div>
		);
	}
	//-------------------------------------------------------------------------------------------
}

export default App;

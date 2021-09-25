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
		],
		index: 0,
	},
	mouse: {
		innerCircle: "",
	},
};

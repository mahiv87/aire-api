const trails = [
	{
		trailName: 'Emerald Lake Trail',
		description:
			"Enjoy this 3.2-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 1 h 39 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31195,-105.64567',
		length: 3.2,
		elevationGain: 698,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://s27363.pcdn.co/wp-content/uploads/2020/09/Nymph-Dream-and-Emerald-Lake-Hike.jpg.optimal.jpg'
	},
	{
		trailName: 'Sky Pond via Glacier Gorge Trail',
		description:
			"Experience this 9.4-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 4 h 32 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31052,-105.6403',
		length: 9.4,
		elevationGain: 1758,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/03/00-Sky-Pond-in-Rocky-Mountain-National-Park-bratman-creative-commons.jpg'
	},
	{
		trailName: 'The Loch via Glacier Gorge Trail',
		description:
			"Check out this 5.4-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 39 min to complete. This is a very popular area for birding, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31052,-105.6403',
		length: 5.4,
		elevationGain: 1056,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/CEB6EA70-0883-683E-21A9C3F5034B93D9.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Dream Lake Trail',
		description:
			"Enjoy this 2.0-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 1 h 1 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are April through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31195,-105.64567',
		length: 2.0,
		elevationGain: 426,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/04/00-dream-lake-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Bear Lake Nature Trail',
		description:
			"Head out on this 0.7-mile loop trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 15 min to complete. This is a very popular area for hiking, snowshoeing, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31195,-105.64567',
		length: 0.7,
		elevationGain: 49,
		routeType: 'Loop',
		difficulty: 'Easy',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/6/6f/A460%2C_Rocky_Mountain_National_Park%2C_Colorado%2C_USA%2C_Bear_Lake%2C_2016.jpg'
	},
	{
		trailName: 'Lake Haiyaha',
		description:
			"Try this 4.0-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 2 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31196,-105.64581',
		length: 4.0,
		elevationGain: 846,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image: ''
	},
	{
		trailName: 'Nymph Lake Trail',
		description:
			"Get to know this 1.2-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 37 min to complete. This is a very popular area for cross-country skiing, hiking, and walking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31192,-105.646',
		length: 1.2,
		elevationGain: 262,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/04/nymph-lake-in-rocky-mountain-national-park.jpg'
	},
	{
		trailName: 'Lake Helene via Fern Lake Trail',
		description:
			"Get to know this 6.1-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 9 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31194,-105.64557',
		length: 6.1,
		elevationGain: 1341,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/02/00-lake-helene-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Flattop Mountain Trail',
		description:
			"Get to know this 8.2-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 5 h 23 min to complete. This is a very popular area for birding, cross-country skiing, and hiking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31198,-105.64543',
		length: 8.2,
		elevationGain: 2870,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/02/00-flattop-mountain-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Hallett Peak',
		description:
			"Discover this 10.3-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 6 h 25 min to complete. This is a very popular area for birding, hiking, and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are March through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31201,-105.64597',
		length: 10.3,
		elevationGain: 3293,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dream_Lake.jpg'
	},
	{
		trailName: 'Gem Lake Trail',
		description:
			"Experience this 3.1-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 1 h 57 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.39645,-105.51303',
		length: 3.1,
		elevationGain: 994,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/FE2B7DF2-0CE8-9BEE-81A77526567AC94B.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Alberta Falls Trail',
		description:
			"Get to know this 1.6-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 42 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31046,-105.64036',
		length: 1.6,
		elevationGain: 232,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2010/08/albertafalls.jpg'
	},
	{
		trailName: 'Chasm Lake',
		description:
			"Enjoy this 8.8-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 5 h 12 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.27198,-105.55655',
		length: 8.8,
		elevationGain: 2542,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/9DAF1CC3-0E59-BDCA-84DA1EEA6C381C8E.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Deer Mountain Trail',
		description:
			"Enjoy this 6.0-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 11 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.38685,-105.60991',
		length: 6.0,
		elevationGain: 1400,
		routeType: ' Out & Back',
		difficulty: 'Moderate',
		image:
			'https://s27363.pcdn.co/wp-content/uploads/2020/08/Deer-Mountain-for-Facebook.jpg.optimal.jpg'
	},
	{
		trailName: 'Ouzel Falls via Wild Basin Trail',
		description:
			"Explore this 5.3-mile out-and-back trail near Allenspark, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 33 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.20783,-105.56643',
		length: 5.3,
		elevationGain: 984,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/06/00-ouzel-falls-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Twin Sisters Peak Trail',
		description:
			"Get to know this 7.5-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 4 h 49 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.30648,-105.53711',
		length: 7.5,
		elevationGain: 2516,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://s27363.pcdn.co/wp-content/uploads/2020/09/Longs-Peak-from-Twin-Sisters.jpg.optimal.jpg'
	},
	{
		trailName: 'Sprague Lake Trail',
		description:
			"Try this 0.8-mile loop trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 16 min to complete. This is a very popular area for fishing, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.32049,-105.60794',
		length: 0.8,
		elevationGain: 36,
		routeType: 'Loop',
		difficulty: 'Easy',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/B650611A-A371-14A8-649C7F06C78F8A0E.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Mills Lake via Glacier Gorge Trail',
		description:
			"Try this 5.4-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 26 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31093,-105.6395',
		length: 5.4,
		elevationGain: 856,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/24F7ADD5-9346-EC04-6CD55A01D9598CDD.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Bierstadt Lake Loop Trail',
		description:
			"Try this 3.2-mile loop trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 1 h 34 min to complete. This is a very popular area for hiking, horseback riding, and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.32048,-105.62367',
		length: 3.2,
		elevationGain: 626,
		routeType: 'Loop',
		difficulty: 'Moderate',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/6F67DF34-A8F1-22F4-EFAD2904637A4EF1.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Bridal Veil Falls via Cow Creek Trail',
		description:
			"Try this 6.1-mile out-and-back trail near Glen Haven, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 46 min to complete. This is a very popular area for camping, hiking, and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are March through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.43087,-105.50054',
		length: 6.1,
		elevationGain: 964,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://i0.wp.com/www.denverpost.com/wp-content/uploads/2022/07/TGC-Z-BridalVeilsOne.webp?fit=620%2C9999px&ssl=1'
	},
	{
		trailName: 'Adams Falls Trail',
		description:
			"Try this 0.8-mile out-and-back trail near Grand Lake, Colorado. Generally considered an easy route, it takes an average of 20 min to complete. This is a very popular area for hiking and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are June through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.23944,-105.79992',
		length: 0.8,
		elevationGain: 104,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/3877B2F6-A76C-5B18-61D34B1BBE5BD727.jpg?width=1200&quality=90&mode=crop'
	}
];

module.exports = { trails };

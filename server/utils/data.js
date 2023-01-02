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
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/lake-haiyaha/lake-haiyaha.jpg'
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
	},
	{
		trailName: 'Mount Ida Trail',
		description:
			"Check out this 9.3-mile out-and-back trail near Grand Lake, Colorado. Generally considered a challenging route, it takes an average of 5 h 9 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The best times to visit this trail are May through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.42039,-105.81153',
		length: 9.3,
		elevationGain: 2358,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/mount-ida/never-summer-mountains.jpg'
	},
	{
		trailName: 'Cub Lake Trail Loop',
		description:
			"Discover this 6.0-mile loop trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 29 min to complete. This is a very popular area for birding, hiking, and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.35552,-105.61602',
		length: 6.0,
		elevationGain: 744,
		routeType: 'Loop',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/04/00cub-lake-in-rocky-mountain-nationl-park-from-above-creative-commons-by-geoff-livingston-.jpg'
	},
	{
		trailName: 'Fern Lake Trail',
		description:
			"Get to know this 7.5-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 42 min to complete. This is a very popular area for backpacking, camping, and fishing, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.35486,-105.63112',
		length: 7.5,
		elevationGain: 1476,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/1c/6a/58/fern-lake.jpg?w=1200&h=-1&s=1'
	},
	{
		trailName: 'Cascade Falls',
		description:
			"Check out this 7.4-mile out-and-back trail near Grand Lake, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 49 min to complete. This is a very popular area for fishing, hiking, and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are June through August. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.25664,-105.81443',
		length: 7.4,
		elevationGain: 675,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://gograndlake.com/wp-content/uploads/2014/08/IMG_1757-768x1024.jpg'
	},
	{
		trailName: 'Lily Lake',
		description:
			"Try this 0.8-mile loop trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 16 min to complete. This is a very popular area for birding, fishing, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.30657,-105.53779',
		length: 0.8,
		elevationGain: 29,
		routeType: 'Loop',
		difficulty: 'Easy',
		image:
			'https://www.nps.gov/romo/images/lg_lily_lake.jpg?maxwidth=1200&maxheight=1200&autorotate=false'
	},
	{
		trailName: 'Timberline Falls',
		description:
			'Check out this 7.8-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 57 min to complete. This is a popular trail for backpacking and hiking, but you can still enjoy some solitude during quieter times of day.',
		trailheadCoordinates: '40.31051,-105.64031',
		length: 7.8,
		elevationGain: 1637,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/01/00_timberline-falls-rocky-mountain_header.jpg'
	},
	{
		trailName: 'Glacier Gorge Trail',
		description:
			"Head out on this 10.0-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 4 h 55 min to complete. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31051,-105.64031',
		length: 10.0,
		elevationGain: 1952,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://wildlandtrekking.com/content/uploads/2020/03/glacier-gorge-overlook-e1556571139166-1-865x479.jpg'
	},
	{
		trailName: 'Ouzel Lake Trail',
		description:
			"Experience this 10.0-mile out-and-back trail near Allenspark, Colorado. Generally considered a moderately challenging route, it takes an average of 4 h 37 min to complete. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.20762,-105.56664',
		length: 10.0,
		elevationGain: 1683,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/02/00-ouzel-lake-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Ute Trail',
		description:
			"Explore this 5.7-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 40 min to complete. This is a very popular area for backpacking and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.39338,-105.69539',
		length: 5.7,
		elevationGain: 1922,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image: 'https://liveandlethike.files.wordpress.com/2013/08/p1000448.jpg'
	},
	{
		trailName: 'Sandbeach Lake Trail',
		description:
			"Check out this 9.0-mile out-and-back trail near Allenspark, Colorado. Generally considered a challenging route, it takes an average of 4 h 46 min to complete. This is a very popular area for backpacking, camping, and fishing, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.21967,-105.53451',
		length: 9.0,
		elevationGain: 2086,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2016/06/01-sandbeach-lake-rocky-mountain-national-park.jpg'
	},
	{
		trailName: 'Alpine Ridge Trail',
		description:
			"Check out this 0.7-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 21 min to complete. This is a very popular area for birding and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.44121,-105.7542',
		length: 0.7,
		elevationGain: 147,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/276B2361-0B9B-70B5-42CE266D73F66FDE.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Odessa Lake via Bear Lake Trailhead',
		description:
			"Experience this 8.3-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 4 h 29 min to complete. This is a very popular area for camping, hiking, and horseback riding, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.31176,-105.64456',
		length: 8.3,
		elevationGain: 2004,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.com/wp-content/uploads/2016/02/00-odessa-lake-rocky-mountain-national-park-header.jpg'
	},
	{
		trailName: 'Ypsilon Lake Trail',
		description:
			"Experience this 8.9-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 5 h 6 min to complete. This is a very popular area for hiking, horseback riding, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.40722,-105.62614',
		length: 8.9,
		elevationGain: 2424,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/D2834963-0053-1E4B-CEA592D524B6C160.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'West Creek Falls',
		description:
			"Discover this 4.3-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 2 h 42 min to complete. This is a popular trail for hiking, snowshoeing, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.43091,-105.50057',
		length: 4.3,
		elevationGain: 1394,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://rockymountaindayhikes.com/uploads/3/4/7/6/34766137/fullsizeoutput-9833_1_orig.jpeg'
	},
	{
		trailName: 'Bluebird Lake Trail',
		description:
			"Explore this 14.3-mile out-and-back trail near Allenspark, Colorado. Generally considered a challenging route, it takes an average of 7 h 2 min to complete. This is a popular trail for backpacking and hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are March through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.20796,-105.5663',
		length: 14.3,
		elevationGain: 2801,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/bluebird-lake/bluebird-lake.JPG'
	},
	{
		trailName: 'Lawn Lake Trail',
		description:
			"Experience this 13.0-mile out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 6 h 25 min to complete. This is a very popular area for camping, fishing, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.40714,-105.62629',
		length: 13.0,
		elevationGain: 2578,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/lawn-lake/lawn-lake.jpg'
	},
	{
		trailName: 'Timber Lake Trail',
		description:
			"Discover this 10.9-mile out-and-back trail near Grand Lake, Colorado. Generally considered a challenging route, it takes an average of 5 h 39 min to complete. This is a popular trail for birding, camping, and fishing, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are March through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.39972,-105.84759',
		length: 10.9,
		elevationGain: 2408,
		routeType: 'Out & Back',
		difficulty: 'Hard',
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/timber-lake/timber-lake.jpg'
	},
	{
		trailName: 'Trail Ridge Road',
		description:
			"Get to know this 39.0-mile point-to-point trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 15 h 53 min to complete. This is a very popular area for road biking and scenic driving, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.38707,-105.6108',
		length: 39.0,
		elevationGain: 3891,
		routeType: 'Point to Point',
		difficulty: 'Moderate',
		image:
			'https://www.nps.gov/romo/learn/news/images/NPS-Photo_Trail-Ridge-Road_May-2022_1.jpg'
	},
	{
		trailName: 'MacGregor Falls Trail',
		description:
			"Explore this 4.4-mile out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 1 h 53 min to complete. This is a popular trail for hiking, but you can still enjoy some solitude during quieter times of day. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.39642,-105.51305',
		length: 4.4,
		elevationGain: 606,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://dayhikesneardenver.b-cdn.net/wp-content/uploads/2017/09/04-macgregor-falls-rmnp-longs-peak.jpg'
	},
	{
		trailName: 'Coyote Valley Trail',
		description:
			"Get to know this 2.1-mile out-and-back trail near Grand Lake, Colorado. Generally considered an easy route, it takes an average of 39 min to complete. This is a popular trail for birding, fishing, and hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.34459,-105.85848',
		length: 2.1,
		elevationGain: 45,
		routeType: 'Out & Back',
		difficulty: 'Easy',
		image:
			'https://www.nps.gov/common/uploads/cropped_image/primary/98D3066A-A05B-058E-4D573B77FF4CFFFE.jpg?width=1200&quality=90&mode=crop'
	},
	{
		trailName: 'Continental Divide National Scenic Trail',
		description:
			"Experience this 29.4-mile loop trail near Grand Lake, Colorado. Generally considered a challenging route, it takes an average of 13 h 37 min to complete. This trail is great for backpacking, birding, and camping, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are July through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates:
			'https://www.google.com/maps/dir/Current+Location/40.30758,-105.84125',
		length: 29.4,
		elevationGain: 4977,
		routeType: 'Loop',
		difficulty: 'Hard',
		image:
			'https://cdn.allrockymountain.com/images/content/20052_ExRyb_Continental_Divide_Trail_lg.jpg'
	},
	{
		trailName: 'Lulu City Trail',
		description:
			"Explore this 7.8-mile out-and-back trail near Grand Lake, Colorado. Generally considered a moderately challenging route, it takes an average of 3 h 5 min to complete. This is a very popular area for birding, fishing, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates:
			'https://www.google.com/maps/dir/Current+Location/40.40174,-105.84865',
		length: 7.8,
		elevationGain: 826,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'https://www.americansouthwest.net/colorado/photographs1118/lulu-city-sign.jpg'
	},
	{
		trailName: 'Shadow Mountain Trail',
		description:
			"Discover this 9.5-mile out-and-back trail near Grand Lake, Colorado. Generally considered a moderately challenging route, it takes an average of 4 h 33 min to complete. This is a popular trail for hiking, horseback riding, and running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
		trailheadCoordinates: '40.24027,-105.82562',
		length: 9.5,
		elevationGain: 1748,
		routeType: 'Out & Back',
		difficulty: 'Moderate',
		image:
			'http://www.rockymountainhikingtrails.com/rocky-mountain-photos/shadow-mountain-lookout/shadow-mountain-lookout.jpg'
	}
];

module.exports = { trails };

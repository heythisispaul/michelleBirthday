const breweries = [
    {
        title: "Oro Brewing Company",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.214326872032!2d-111.8371443!3d33.4153288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7499b10440176f11!2sOro+Brewing+Company!5e0!3m2!1sen!2sus!4v1533367349767",
        details: "I know you've been here before I thought it could be a cool place to start! Right on the light rail and not too far of a drive so we can park here and get going! I really liked that beer you brought home and also it looks dope.",
        yelp: 'https://www.yelp.com/biz/oro-brewing-company-mesa',
        website: 'http://www.orobrewing.com/',
        instagram: 'https://www.instagram.com/orobrewingcompany/?hl=en'
    },
    {
        title: "Desert Eagle Brewing Company",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.218269100083!2d-111.8358645!3d33.4153031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1cd86930d2c1af9!2sDesert+Eagle+Brewing+Company!5e0!3m2!1sen!2sus!4v1533410342730",
        details: "So this one's not as well reviewed but it's right next to the other one so I thought it might be worth it to take a quick look. If we decide it's lame we don't have to go, but I thought it might be worth checking out. Who knows, maybe when this is all said and done we'll be Mesa people.",
        yelp: 'https://www.yelp.com/biz/desert-eagle-brewing-company-mesa',
        website: 'http://www.deserteaglebrewing.com/',
        instagram: 'https://www.instagram.com/deserteaglebrew/?hl=en'
    },
    {
        title: "Blasted Barley",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13319.47558913051!2d-111.9408275!3d33.4266622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d96ff8e599ee3e1!2sBlasted+Barley+Beer+Co.!5e0!3m2!1sen!2sus!4v1533410866417",        
        details: "So not a new entry in the series, but it's the closest brewery to a light rail stop in Tempe so I thought it would be good. Also, now that I think about it, I don't know if I've ever had any of their beers. If you wanna skip this one I totally get it! It's up to you, ya birthday goof!",
        yelp: 'https://www.yelp.com/biz/blasted-barley-beer-company-tempe',
        website: 'https://www.blastedbarley.com/',
        instagram: 'https://www.instagram.com/explore/locations/1025432421/blasted-barley-beer-company/?hl=en'
    },
    {
        title: "Sonoran Brewing Company",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13316.098602145501!2d-112.016724!3d33.4486643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b4c5460fc04a3ea!2sSonoran+Brewing+Company!5e0!3m2!1sen!2sus!4v1533411236558",        
        details: "Did you know that this brewery had more beers than just the Sonoran White Chocolate? Me neither! They're also sort of close to the light rail on the way into Phoenix from Tempe! Not super close though, so we may want to feel out or drunkeness-levels/heat on this one. Or take an Uber to it really quick. They apparently run their own tap room connected to the brewery so it may be worth it.",
        yelp: 'https://www.yelp.com/biz/the-phoenix-ale-brewery-phoenix?osq=sonoran+brewing',
        website: 'http://www.sonoranbrewing.com/',
        instagram: 'https://www.instagram.com/sonoranbrewco/'
    },
    {
        title: "Mother Bunch Brewing",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.73658277489!2d-112.06550200147673!3d33.45748120517832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1210b777764f%3A0x4c2d967203bb3d12!2sMother+Bunch+Brewing!5e0!3m2!1sen!2sus!4v1533411550191",        
        details: "This is the first one on here that I had straight up just never heard of before. It's pretty close to Angel's Trumpet/Lost Leaf area downtown and run by a husband-wife team so I figured we could go and get some pointers on how to become our best selves like they clearly did.",
        yelp: 'https://www.yelp.com/biz/mother-bunch-brewing-phoenix-3',
        website: 'http://motherbunchbrew.com/',
        instagram: 'https://www.instagram.com/motherbunchbrewing/'
    },
    {
        title: "Huss Brewing Co. Taproom",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13306.59679067762!2d-112.071786!3d33.510503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb15066ff5df1a76!2sHuss+Brewing+Co.Taproom+at+Uptown+Plaza!5e0!3m2!1sen!2sus!4v1533411872886",      
        details: "So maybe sort of cheating since this isn't exactly a brewery and more of a tap room, but I'm counting it. It's also a pretty quick jaunt from the central/Camelback stop and gets squarely back in central midtown and is also delicious.",
        yelp: 'https://www.yelp.com/biz/huss-brewing-co-uptown-taproom-phoenix?osq=huss+uptown',
        website: 'http://www.hussbrewing.com/taproom/',
        instagram: 'https://www.instagram.com/hussbrewing/'
    },
    {
        title: "SunUp Brewing Company",
        googleMapSource: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13306.751107000066!2d-112.0687616!3d33.5094995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x613cc94848d67803!2sSunUp+Brewing+Company!5e0!3m2!1sen!2sus!4v1533412181615",      
        details: "Just another short walk down the road! Also, not sure if you've heard, but the Trooper IPA comes very highly recommended. I haven't tried most of their beers here though and I feel like they've been gaining some traction and I think it'd be cool to see what else they have going on.",
        yelp: 'https://www.yelp.com/biz/sunup-brewing-phoenix-3',
        website: 'https://sunup.beer/',
        instagram: 'https://www.instagram.com/explore/locations/216101438/sunup-brewing-co/?hl=eng/'
    },
];

export default breweries;
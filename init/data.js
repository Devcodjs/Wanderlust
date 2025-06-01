const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.6681, 34.0259]
    }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8235, 39.1911]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231]
    }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619]
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968]
    }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522]
    }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2266, 46.1009]
    }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.8333, -2.3333]
    }
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.8952, 52.3702]
    }
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.0650, -17.7134]
    }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.7667, 51.8333]
    }
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601]
    }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784]
    }
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617]
    }
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804]
    }
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-4.9600, 57.4800]
    }
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048]
    }
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.8797]
    }
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3280, 37.4467]
    }
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.0069, 9.7489]
    }
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765]
    }
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895]
    }
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939]
    }
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028]
    }
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8235, 39.1911]
    }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.0069, 9.7489]
    }
  },
  {
    title: "Alpine A-Frame Cabin",
    description: "Charming A-frame cabin nestled in alpine forests with panoramic mountain views and cozy fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Whistler",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-122.9574, 50.1163]
    }
  },
  {
    title: "Mediterranean Cliffside Villa",
    description: "Luxurious villa perched on seaside cliffs with infinity pool overlooking the Mediterranean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932]
    }
  },
  {
    title: "Desert Adobe Retreat",
    description: "Authentic adobe home in the high desert with starlit patios and panoramic canyon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 980,
    location: "Sedona",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-111.7610, 34.8697]
    }
  },
  {
    title: "Floating Lake House",
    description: "Unique modern house floating on a tranquil lake with direct water access and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "British Columbia",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-125.8268, 54.5259]
    }
  },
  {
    title: "Historic Parisian Loft",
    description: "Elegant loft in a 19th-century building featuring Haussmannian architecture near the Seine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Rainforest Eco Lodge",
    description: "Sustainable lodge deep in the rainforest canopy with wildlife observation decks and waterfall access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1450,
    location: "Monteverde",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.7928, 10.3157]
    }
  },
  {
    title: "Venetian Canal Apartment",
    description: "Charming apartment overlooking a quiet canal with traditional Venetian decor and gondola access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Venice",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    }
  },
  {
    title: "Cliffside Moroccan Kasbah",
    description: "Authentic kasbah carved into desert cliffs featuring traditional courtyards and mosaic pools.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1850,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9810, 31.6295]
    }
  },
  {
    title: "Norwegian Fjord Cabin",
    description: "Secluded cabin on the edge of a dramatic fjord with panoramic water views and sauna.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Sognefjorden",
    country: "Norway",
    geometry: {
      type: "Point",
      coordinates: [6.8800, 61.0987]
    }
  },
  {
    title: "Kyoto Traditional Machiya",
    description: "Exquisitely restored wooden townhouse featuring Zen garden and traditional tatami rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612770638872-283a4b5d4c55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116]
    }
  },
  {
    title: "Napa Valley Vineyard Estate",
    description: "Luxury wine estate with private vineyards, tasting room, and panoramic valley views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Napa",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.2869, 38.2975]
    }
  },
  {
    title: "Patagonian Wilderness Lodge",
    description: "Remote lodge at the edge of glaciers and mountains offering guided wilderness expeditions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559123692-2f7d7c0d2c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2750,
    location: "Torres del Paine",
    country: "Chile",
    geometry: {
      type: "Point",
      coordinates: [-72.9286, -51.2594]
    }
  },
  {
    title: "Havana Colonial Residence",
    description: "Colorful colonial home in Old Havana with vintage decor and private rooftop terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Havana",
    country: "Cuba",
    geometry: {
      type: "Point",
      coordinates: [-82.3666, 23.1136]
    }
  },
  {
    title: "Swiss Mountain Chalet",
    description: "Traditional wood chalet with panoramic alpine views and direct access to hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    }
  },
  {
    title: "Safari Tented Camp",
    description: "Luxury tented camp in the African savannah with guided wildlife safaris included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Maasai Mara",
    country: "Kenya",
    geometry: {
      type: "Point",
      coordinates: [35.5951, -1.5815]
    }
  },
  {
    title: "Bali Rice Terrace Villa",
    description: "Private villa overlooking emerald rice terraces with infinity pool and open-air living spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580545991523-f0a6b48f0930?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Ubud",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.2600, -8.5069]
    }
  },
  {
    title: "Historic New Orleans Townhouse",
    description: "French Quarter townhouse with wrought-iron balconies and courtyard fountain.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513343987713-2e2e1e3b5a7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "New Orleans",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-90.0715, 29.9511]
    }
  },
  {
    title: "Icelandic Geothermal Cabin",
    description: "Modern cabin with natural hot spring access and views of the Northern Lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Reykjanes",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-22.5119, 63.9981]
    }
  },
  {
    title: "Andalusian Cortijo",
    description: "Traditional Spanish farmhouse with olive groves, courtyard pool, and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Granada",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [-3.5986, 37.1773]
    }
  },
  {
    title: "Canadian Lakefront Lodge",
    description: "Sprawling log lodge on a private lake with canoe access and wilderness views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2450,
    location: "Muskoka",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3823, 45.0301]
    }
  },
  {
    title: "Portuguese Seaside Villa",
    description: "Clifftop villa with panoramic Atlantic views and access to secluded beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Algarve",
    country: "Portugal",
    geometry: {
      type: "Point",
      coordinates: [-8.8225, 37.1028]
    }
  },
  {
    title: "Himalayan Mountain Retreat",
    description: "Traditional stone lodge with breathtaking Himalayan peaks views and meditation spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Pokhara",
    country: "Nepal",
    geometry: {
      type: "Point",
      coordinates: [83.9856, 28.2096]
    }
  },
  {
    title: "Sydney Harbour Penthouse",
    description: "Ultra-modern penthouse with uninterrupted views of Sydney Opera House and Harbour Bridge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Sydney",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688]
    }
  },
  {
    title: "Tuscan Farmhouse Estate",
    description: "Restored 18th-century farmhouse with vineyards, olive groves, and infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3250,
    location: "Siena",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.3314, 43.3186]
    }
  },
  {
    title: "Bora Bora Overwater Bungalow",
    description: "Iconic overwater bungalow with glass floor panels and direct lagoon access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: {
      type: "Point",
      coordinates: [-151.7420, -16.5004]
    }
  },
  {
    title: "Rocky Mountain Log Mansion",
    description: "Grand log mansion with theater room, indoor pool, and views of the Continental Divide.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Vail",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.3742, 39.6403]
    }
  },
  {
    title: "Cappadocia Cave Hotel",
    description: "Unique cave hotel carved into fairy chimneys with panoramic views of the lunar landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1450,
    location: "Göreme",
    country: "Turkey",
    geometry: {
      type: "Point",
      coordinates: [34.8312, 38.6425]
    }
  },
  {
    title: "Scottish Castle Tower",
    description: "Private medieval tower in a working castle estate with authentic period furnishings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598387993051-5d3a7122b3a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3850,
    location: "Inverness",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-4.2247, 57.4778]
    }
  },
  {
    title: "California Modern Cliff House",
    description: "Architectural masterpiece suspended over ocean cliffs with floor-to-ceiling glass walls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5800,
    location: "Big Sur",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-121.9000, 36.2704]
    }
  },
  {
    title: "Vietnamese Rice Field Villa",
    description: "Minimalist villa overlooking terraced rice fields with traditional bamboo architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Hoi An",
    country: "Vietnam",
    geometry: {
      type: "Point",
      coordinates: [108.3380, 15.8801]
    }
  }
];

module.exports = { data: sampleListings };
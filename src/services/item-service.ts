/**
 * Represents an item available for purchase.
 */
export interface Item {
  /**
   * The unique identifier for the item.
   */
  id: string;
  /**
   * The name of the item.
   */
  name: string;
  /**
   * The URL of the image representing the item.
   */
  imageUrl: string;
  /**
   * The cost of the item.
   */
  cost: number;
}

/**
 * Asynchronously retrieves a list of items available for purchase.
 *
 * @returns A promise that resolves to an array of Item objects.
 */
export async function getItems(): Promise<Item[]> {
  // TODO: Implement this by calling an API.

  return [
    // Existing items
    {
      "name": "Bubble gum pack",
      "imageUrl": "https://www.pngkey.com/png/full/59-591819_bubble-gum-pack-png.png",
      id: "",
      cost: 0
    },
    {
      "name": "Cup of coffee",
      "imageUrl": "https://www.freeiconspng.com/uploads/coffee-png-33.png",
      id: "",
      cost: 0
    },
    {
      "name": "Doughnut",
      "imageUrl": "https://pngimg.com/d/donut_PNG47.png",
      id: "",
      cost: 0
    },
    {
      "name": "Socks (pair)",
      "imageUrl": "https://www.vecteezy.com/png/21656146-sock-pair-icon-isolated-on-transparent-background",
      id: "",
      cost: 0
    },
    {
      "name": "Avocado toast",
      "imageUrl": "https://www.cleanpng.com/png-avocado-toast-breakfast-food-brunch-1646722/",
      id: "",
      cost: 0
    },
    {
      "name": "Uber ride (short trip)",
      "imageUrl": "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/uber-logo-square",
      id: "",
      cost: 0
    },
    {
      "name": "Bouquet of flowers",
      "imageUrl": "https://pngimg.com/d/bouquet_PNG55.png",
      id: "",
      cost: 0
    },
    {
      "name": "Yoga mat",
      "imageUrl": "https://www.kindpng.com/picc/m/14-149326_yoga-mat-png-transparent-png.png",
      id: "",
      cost: 0
    },
    {
      "name": "Blender",
      "imageUrl": "https://pngimg.com/d/blender_PNG48.png",
      id: "",
      cost: 0
    },
    {
      "name": "Board game",
      "imageUrl": "https://www.pngitem.com/pimgs/m/517-5171353_board-game-png-transparent-png.png",
      id: "",
      cost: 0
    },
    {
      "name": "iPhone 15 Pro",
      "imageUrl": "https://www.stickpng.com/img/electronics/iphones/iphone-15-pro-front-and-back-view",
      id: "",
      cost: 0
    },
    {
      "name": "1 Month Rent (studio apt)",
      "imageUrl": "https://www.flaticon.com/free-icon/house_609803",
      id: "",
      cost: 0
    },
    {
      "name": "High-end headphones",
      "imageUrl": "https://pngimg.com/d/headphones_PNG7645.png",
      id: "",
      cost: 0
    },
    {
      "name": "Spa day",
      "imageUrl": "https://www.vecteezy.com/png/9367402-spa-icon-with-png-transparent-background",
      id: "",
      cost: 0
    },
    {
      "name": "New suit",
      "imageUrl": "https://www.pngitem.com/pimgs/m/26-268856_business-suit-png-transparent-png.png",
      id: "",
      cost: 0
    },
    {
      "name": "Flight to NYC",
      "imageUrl": "https://www.freeiconspng.com/uploads/airplane-png-30.png",
      id: "",
      cost: 0
    },
    {
      "name": "DSLR Camera",
      "imageUrl": "https://www.pngmart.com/files/6/DSLR-Camera-PNG-Transparent-Image.png",
      id: "",
      cost: 0
    },
    {
      "name": "Michelin Star dinner",
      "imageUrl": "https://www.pngwing.com/en/free-png-zsvmi",
      id: "",
      cost: 0
    },
    {
      "name": "Rolex watch",
      "imageUrl": "https://www.pngmart.com/files/22/Rolex-Watch-PNG-HD.png",
      id: "",
      cost: 0
    },
    {
      "name": "Tesla Model 3",
      "imageUrl": "https://www.pngmart.com/files/22/Tesla-Model-3-PNG-Photos.png",
      id: "",
      cost: 0
    },
    {
      "name": "Diamond ring",
      "imageUrl": "https://pngimg.com/d/ring_PNG98.png",
      id: "",
      cost: 0
    },
    {
      "name": "Fully decked gaming PC",
      "imageUrl": "https://www.pngmart.com/files/7/Gaming-PC-PNG-HD.png",
      id: "",
      cost: 0
    },
    {
      "name": "Tiny house",
      "imageUrl": "https://www.pngmart.com/files/22/Tiny-House-PNG-Transparent.png",
      id: "",
      cost: 0
    },
    {
      "name": "Private chef (1 year)",
      "imageUrl": "https://www.pngwing.com/en/free-png-bwccp",
      id: "",
      cost: 0
    },
    {
      "name": "Yacht charter (1 week)",
      "imageUrl": "https://pngimg.com/d/yacht_PNG20.png",
      id: "",
      cost: 0
    },
    {
      "name": "Super Bowl ad (30s spot)",
      "imageUrl": "https://www.pngwing.com/en/free-png-nvvct",
      id: "",
      cost: 0
    },
    {
      "name": "Lamborghini Aventador",
      "imageUrl": "https://www.pngmart.com/files/22/Lamborghini-Aventador-PNG-Photos.png",
      id: "",
      cost: 0
    },
    {
      "name": "House in Malibu",
      "imageUrl": "https://www.pngwing.com/en/free-png-zidpd",
      id: "",
      cost: 0
    },
    {
      "name": "Private jet",
      "imageUrl": "https://pngimg.com/d/private_jet_PNG17.png",
      id: "",
      cost: 0
    },
    {
      "name": "Own a vineyard",
      "imageUrl": "https://www.pngwing.com/en/free-png-znhti",
      id: "",
      cost: 0
    },
    {
      "name": "Music festival headliner slot",
      "imageUrl": "https://www.pngwing.com/en/free-png-zrnjt",
      id: "",
      cost: 0
    },
    {
      "name": "Billboard in Times Square",
      "imageUrl": "https://www.pngwing.com/en/free-png-zlbcz",
      id: "",
      cost: 0
    },
    {
      "name": "Gold-plated toilet",
      "imageUrl": "https://www.pngwing.com/en/free-png-zmpiv",
      id: "",
      cost: 0
    },
    {
      "name": "Ice hotel (build your own)",
      "imageUrl": "https://www.pngwing.com/en/free-png-bbpyx",
      id: "",
      cost: 0
    },
    {
      "name": "Falcon 9 Rocket Launch (SpaceX)",
      "imageUrl": "https://www.pngmart.com/files/22/SpaceX-Falcon-9-Rocket-PNG-Transparent-Image.png",
      id: "",
      cost: 0
    },
    {
      "name": "Buy an NBA team (partial stake)",
      "imageUrl": "https://www.pngwing.com/en/free-png-zixts",
      id: "",
      cost: 0
    },
    {
      "name": "Build a private island resort",
      "imageUrl": "https://www.pngall.com/wp-content/uploads/2/Island-PNG-HD-Image.png",
      id: "",
      cost: 0
    },
    {
      "name": "Mars Rover mission",
      "imageUrl": "https://www.pngmart.com/files/22/Mars-Rover-PNG-Photo.png",
      id: "",
      cost: 0
    },
    {
      "name": "Twitter (or \"X\") rebrand campaign",
      "imageUrl": "https://www.pngwing.com/en/free-png-zljsz",
      id: "",
      cost: 0
    },
    {
      "name": "Space station module",
      "imageUrl": "https://www.pngwing.com/en/free-png-zfkvf",
      id: "",
      cost: 0
    },
    {
      "name": "U.S. presidential campaign funding",
      "imageUrl": "https://www.pngwing.com/en/free-png-zsuzt",
      id: "",
      cost: 0
    },
    {
      "name": "Save the rainforest (1% global land)",
      "imageUrl": "https://www.pngwing.com/en/free-png-zknif",
      id: "",
      cost: 0
    },
    {
      "name": "Rename a star after yourself",
      "imageUrl": "https://www.pngwing.com/en/free-png-zdrle",
      id: "",
      cost: 0
    },
    {
      "name": "Meme NFT",
      "imageUrl": "https://www.pngwing.com/en/free-png-zxkxo",
      id: "",
      cost: 0
    },
    {
      "name": "Buy Twitter Blue",
      "imageUrl": "https://www.pngwing.com/en/free-png-ptxia",
      id: "",
      cost: 0
    },
    {
      "name": "Hire a llama for a day",
      "imageUrl": "https://pngimg.com/d/llama_PNG38.png",
      id: "",
      cost: 0
    },
    {
      "name": "Immortalize yourself as a statue",
      "imageUrl": "https://www.pngwing.com/en/free-png-baqml",
      id: "",
      cost: 0
    },
    {
      "name": "Rent a blimp saying \"I'm rich!\"",
      "imageUrl": "https://www.pngwing.com/en/free-png-zapnr",
      id: "",
      cost: 0
    },
    {
      "name": "Coffee",
      "imageUrl": "https://www.freeiconspng.com/uploads/coffee-png-33.png",
      id: "",
      cost: 0
    },
    {
      "name": "Tesla",
      "imageUrl": "https://www.pngmart.com/files/22/Tesla-PNG-Transparent.png",
      id: "",
      cost: 0
    },
    {
      "name": "Gold Bar",
      "imageUrl": "https://pngimg.com/d/gold_bar_PNG13511.png",
      id: "",
      cost: 0
    },
    {
      "name": "Private Island",
      "imageUrl": "https://www.pngall.com/wp-content/uploads/2/Island-PNG-HD-Image.png",
      id: "",
      cost: 0
    },
    {
      "name": "Space Shuttle",
      "imageUrl": "https://www.kindpng.com/picc/m/160-1609476_space-shuttle-png-transparent-png.png",
      id: "",
      cost: 0
    }
  ];
}

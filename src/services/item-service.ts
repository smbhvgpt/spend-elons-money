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
      "imageUrl": "https://www.pngkey.com/png/full/59-591819_bubble-gum-pack-png.png"
    },
    {
      "name": "Cup of coffee",
      "imageUrl": "https://www.freeiconspng.com/uploads/coffee-png-33.png"
    },
    {
      "name": "Doughnut",
      "imageUrl": "https://pngimg.com/d/donut_PNG47.png"
    },
    {
      "name": "Socks (pair)",
      "imageUrl": "https://www.vecteezy.com/png/21656146-sock-pair-icon-isolated-on-transparent-background"
    },
    {
      "name": "Avocado toast",
      "imageUrl": "https://www.cleanpng.com/png-avocado-toast-breakfast-food-brunch-1646722/"
    },
    {
      "name": "Uber ride (short trip)",
      "imageUrl": "https://www.stickpng.com/img/icons-logos-emojis/tech-companies/uber-logo-square"
    },
    {
      "name": "Bouquet of flowers",
      "imageUrl": "https://pngimg.com/d/bouquet_PNG55.png"
    },
    {
      "name": "Yoga mat",
      "imageUrl": "https://www.kindpng.com/picc/m/14-149326_yoga-mat-png-transparent-png.png"
    },
    {
      "name": "Blender",
      "imageUrl": "https://pngimg.com/d/blender_PNG48.png"
    },
    {
      "name": "Board game",
      "imageUrl": "https://www.pngitem.com/pimgs/m/517-5171353_board-game-png-transparent-png.png"
    },
    {
      "name": "iPhone 15 Pro",
      "imageUrl": "https://www.stickpng.com/img/electronics/iphones/iphone-15-pro-front-and-back-view"
    },
    {
      "name": "1 Month Rent (studio apt)",
      "imageUrl": "https://www.flaticon.com/free-icon/house_609803"
    },
    {
      "name": "High-end headphones",
      "imageUrl": "https://pngimg.com/d/headphones_PNG7645.png"
    },
    {
      "name": "Spa day",
      "imageUrl": "https://www.vecteezy.com/png/9367402-spa-icon-with-png-transparent-background"
    },
    {
      "name": "New suit",
      "imageUrl": "https://www.pngitem.com/pimgs/m/26-268856_business-suit-png-transparent-png.png"
    },
    {
      "name": "Flight to NYC",
      "imageUrl": "https://www.freeiconspng.com/uploads/airplane-png-30.png"
    },
    {
      "name": "DSLR Camera",
      "imageUrl": "https://www.pngmart.com/files/6/DSLR-Camera-PNG-Transparent-Image.png"
    },
    {
      "name": "Michelin Star dinner",
      "imageUrl": "https://www.pngwing.com/en/free-png-zsvmi"
    },
    {
      "name": "Rolex watch",
      "imageUrl": "https://www.pngmart.com/files/22/Rolex-Watch-PNG-HD.png"
    },
    {
      "name": "Tesla Model 3",
      "imageUrl": "https://www.pngmart.com/files/22/Tesla-Model-3-PNG-Photos.png"
    },
    {
      "name": "Diamond ring",
      "imageUrl": "https://pngimg.com/d/ring_PNG98.png"
    },
    {
      "name": "Fully decked gaming PC",
      "imageUrl": "https://www.pngmart.com/files/7/Gaming-PC-PNG-HD.png"
    },
    {
      "name": "Tiny house",
      "imageUrl": "https://www.pngmart.com/files/22/Tiny-House-PNG-Transparent.png"
    },
    {
      "name": "Private chef (1 year)",
      "imageUrl": "https://www.pngwing.com/en/free-png-bwccp"
    },
    {
      "name": "Yacht charter (1 week)",
      "imageUrl": "https://pngimg.com/d/yacht_PNG20.png"
    },
    {
      "name": "Super Bowl ad (30s spot)",
      "imageUrl": "https://www.pngwing.com/en/free-png-nvvct"
    },
    {
      "name": "Lamborghini Aventador",
      "imageUrl": "https://www.pngmart.com/files/22/Lamborghini-Aventador-PNG-Photos.png"
    },
    {
      "name": "House in Malibu",
      "imageUrl": "https://www.pngwing.com/en/free-png-zidpd"
    },
    {
      "name": "Private jet",
      "imageUrl": "https://pngimg.com/d/private_jet_PNG17.png"
    },
    {
      "name": "Own a vineyard",
      "imageUrl": "https://www.pngwing.com/en/free-png-znhti"
    },
    {
      "name": "Music festival headliner slot",
      "imageUrl": "https://www.pngwing.com/en/free-png-zrnjt"
    },
    {
      "name": "Billboard in Times Square",
      "imageUrl": "https://www.pngwing.com/en/free-png-zlbcz"
    },
    {
      "name": "Gold-plated toilet",
      "imageUrl": "https://www.pngwing.com/en/free-png-zmpiv"
    },
    {
      "name": "Ice hotel (build your own)",
      "imageUrl": "https://www.pngwing.com/en/free-png-bbpyx"
    },
    {
      "name": "Falcon 9 Rocket Launch (SpaceX)",
      "imageUrl": "https://www.pngmart.com/files/22/SpaceX-Falcon-9-Rocket-PNG-Transparent-Image.png"
    },
    {
      "name": "Buy an NBA team (partial stake)",
      "imageUrl": "https://www.pngwing.com/en/free-png-zixts"
    },
    {
      "name": "Build a private island resort",
      "imageUrl": "https://www.pngall.com/wp-content/uploads/2/Island-PNG-HD-Image.png"
    },
    {
      "name": "Mars Rover mission",
      "imageUrl": "https://www.pngmart.com/files/22/Mars-Rover-PNG-Photo.png"
    },
    {
      "name": "Twitter (or \"X\") rebrand campaign",
      "imageUrl": "https://www.pngwing.com/en/free-png-zljsz"
    },
    {
      "name": "Space station module",
      "imageUrl": "https://www.pngwing.com/en/free-png-zfkvf"
    },
    {
      "name": "U.S. presidential campaign funding",
      "imageUrl": "https://www.pngwing.com/en/free-png-zsuzt"
    },
    {
      "name": "Save the rainforest (1% global land)",
      "imageUrl": "https://www.pngwing.com/en/free-png-zknif"
    },
    {
      "name": "Rename a star after yourself",
      "imageUrl": "https://www.pngwing.com/en/free-png-zdrle"
    },
    {
      "name": "Meme NFT",
      "imageUrl": "https://www.pngwing.com/en/free-png-zxkxo"
    },
    {
      "name": "Buy Twitter Blue",
      "imageUrl": "https://www.pngwing.com/en/free-png-ptxia"
    },
    {
      "name": "Hire a llama for a day",
      "imageUrl": "https://pngimg.com/d/llama_PNG38.png"
    },
    {
      "name": "Immortalize yourself as a statue",
      "imageUrl": "https://www.pngwing.com/en/free-png-baqml"
    },
    {
      "name": "Rent a blimp saying \"I'm rich!\"",
      "imageUrl": "https://www.pngwing.com/en/free-png-zapnr"
    },
    {
      "name": "Coffee",
      "imageUrl": "https://www.freeiconspng.com/uploads/coffee-png-33.png"
    },
    {
      "name": "Tesla",
      "imageUrl": "https://www.pngmart.com/files/22/Tesla-PNG-Transparent.png"
    },
    {
      "name": "Gold Bar",
      "imageUrl": "https://pngimg.com/d/gold_bar_PNG13511.png"
    },
    {
      "name": "Private Island",
      "imageUrl": "https://www.pngall.com/wp-content/uploads/2/Island-PNG-HD-Image.png"
    },
    {
      "name": "Space Shuttle",
      "imageUrl": "https://www.kindpng.com/picc/m/160-1609476_space-shuttle-png-transparent-png.png"
    }
  ];
}

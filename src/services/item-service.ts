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
    {id: '1', name: 'Bubble gum pack', imageUrl: 'https://picsum.photos/id/300/200/300', cost: 1},
    {id: '2', name: 'Cup of coffee', imageUrl: 'https://picsum.photos/id/301/200/300', cost: 3},
    {id: '3', name: 'Doughnut', imageUrl: 'https://picsum.photos/id/302/200/300', cost: 2},
    {id: '4', name: 'Socks (pair)', imageUrl: 'https://picsum.photos/id/303/200/300', cost: 5},
    {id: '5', name: 'Avocado toast', imageUrl: 'https://picsum.photos/id/304/200/300', cost: 12},
    {id: '6', name: 'Uber ride (short trip)', imageUrl: 'https://picsum.photos/id/305/200/300', cost: 15},
    {id: '7', name: 'Bouquet of flowers', imageUrl: 'https://picsum.photos/id/306/200/300', cost: 25},
    {id: '8', name: 'Yoga mat', imageUrl: 'https://picsum.photos/id/307/200/300', cost: 35},
    {id: '9', name: 'Blender', imageUrl: 'https://picsum.photos/id/308/200/300', cost: 60},
    {id: '10', name: 'Board game', imageUrl: 'https://picsum.photos/id/309/200/300', cost: 40},
    {id: '11', name: 'iPhone 15 Pro', imageUrl: 'https://picsum.photos/id/310/200/300', cost: 1000},
    {id: '12', name: '1 Month Rent (studio apt)', imageUrl: 'https://picsum.photos/id/311/200/300', cost: 2000},
    {id: '13', name: 'High-end headphones', imageUrl: 'https://picsum.photos/id/312/200/300', cost: 300},
    {id: '14', name: 'Spa day', imageUrl: 'https://picsum.photos/id/313/200/300', cost: 500},
    {id: '15', name: 'New suit', imageUrl: 'https://picsum.photos/id/314/200/300', cost: 800},
    {id: '16', name: 'Flight to NYC', imageUrl: 'https://picsum.photos/id/315/200/300', cost: 400},
    {id: '17', name: 'DSLR Camera', imageUrl: 'https://picsum.photos/id/316/200/300', cost: 1500},
    {id: '18', name: 'Michelin Star dinner', imageUrl: 'https://picsum.photos/id/317/200/300', cost: 1000},
    {id: '19', name: 'Rolex watch', imageUrl: 'https://picsum.photos/id/318/200/300', cost: 20000},
    {id: '20', name: 'Tesla Model 3', imageUrl: 'https://picsum.photos/id/319/200/300', cost: 40000},
    {id: '21', name: 'Diamond ring', imageUrl: 'https://picsum.photos/id/320/200/300', cost: 15000},
    {id: '22', name: 'Fully decked gaming PC', imageUrl: 'https://picsum.photos/id/321/200/300', cost: 8000},
    {id: '23', name: 'Tiny house', imageUrl: 'https://picsum.photos/id/322/200/300', cost: 75000},
    {id: '24', name: 'Private chef (1 year)', imageUrl: 'https://picsum.photos/id/323/200/300', cost: 120000},
    {id: '25', name: 'Yacht charter (1 week)', imageUrl: 'https://picsum.photos/id/324/200/300', cost: 200000},
    {id: '26', name: 'Super Bowl ad (30s spot)', imageUrl: 'https://picsum.photos/id/325/200/300', cost: 250000},
    {id: '27', name: 'Lamborghini Aventador', imageUrl: 'https://picsum.photos/id/326/200/300', cost: 500000},
    {id: '28', name: 'House in Malibu', imageUrl: 'https://picsum.photos/id/327/200/300', cost: 5000000},
    {id: '29', name: 'Private jet', imageUrl: 'https://picsum.photos/id/328/200/300', cost: 9000000},
    {id: '30', name: 'Own a vineyard', imageUrl: 'https://picsum.photos/id/329/200/300', cost: 2500000},
    {id: '31', name: 'Music festival headliner slot', imageUrl: 'https://picsum.photos/id/330/200/300', cost: 750000},
    {id: '32', name: 'Billboard in Times Square', imageUrl: 'https://picsum.photos/id/331/200/300', cost: 1000000},
    {id: '33', name: 'Gold-plated toilet', imageUrl: 'https://picsum.photos/id/332/200/300', cost: 1200000},
    {id: '34', name: 'Ice hotel (build your own)', imageUrl: 'https://picsum.photos/id/333/200/300', cost: 8000000},
    {id: '35', name: 'Falcon 9 Rocket Launch (SpaceX)', imageUrl: 'https://picsum.photos/id/334/200/300', cost: 67000000},
    {id: '36', name: 'Buy an NBA team (partial stake)', imageUrl: 'https://picsum.photos/id/335/200/300', cost: 250000000},
    {id: '37', name: 'Build a private island resort', imageUrl: 'https://picsum.photos/id/336/200/300', cost: 400000000},
    {id: '38', name: 'Mars Rover mission', imageUrl: 'https://picsum.photos/id/337/200/300', cost: 2000000000},
    {id: '39', name: 'Twitter (or “X”) rebrand campaign', imageUrl: 'https://picsum.photos/id/338/200/300', cost: 44000000000},
    {id: '40', name: 'Space station module', imageUrl: 'https://picsum.photos/id/339/200/300', cost: 1000000000},
    {id: '41', name: 'U.S. presidential campaign funding', imageUrl: 'https://picsum.photos/id/340/200/300', cost: 500000000},
    {id: '42', name: 'Save the rainforest (1% global land)', imageUrl: 'https://picsum.photos/id/341/200/300', cost: 1300000000},
    {id: '43', name: 'Rename a star after yourself', imageUrl: 'https://picsum.photos/id/342/200/300', cost: 25},
    {id: '44', name: 'Meme NFT', imageUrl: 'https://picsum.photos/id/343/200/300', cost: 1000},
    {id: '45', name: 'Buy Twitter Blue', imageUrl: 'https://picsum.photos/id/344/200/300', cost: 8},
    {id: '46', name: 'Hire a llama for a day', imageUrl: 'https://picsum.photos/id/345/200/300', cost: 500},
    {id: '47', name: 'Immortalize yourself as a statue', imageUrl: 'https://picsum.photos/id/346/200/300', cost: 300000},
    {id: '48', name: 'Rent a blimp saying “I’m rich!”', imageUrl: 'https://picsum.photos/id/347/200/300', cost: 150000},
    {id: '49', name: 'Coffee', imageUrl: 'https://picsum.photos/id/237/200/300', cost: 3000},
    {id: '50', name: 'Tesla', imageUrl: 'https://picsum.photos/id/238/200/300', cost: 10000000},
    {id: '51', name: 'Gold Bar', imageUrl: 'https://picsum.photos/id/239/200/300', cost: 50000000},
    {id: '52', name: 'Private Island', imageUrl: 'https://picsum.photos/id/240/200/300', cost: 200000000},
    {id: '53', name: 'Space Shuttle', imageUrl: 'https://picsum.photos/id/241/200/300', cost: 400000000},
  ];
}


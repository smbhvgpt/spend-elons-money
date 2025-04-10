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
    {
      id: '1',
      name: 'Coffee',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      cost: 3000,
    },
    {
      id: '2',
      name: 'Tesla',
      imageUrl: 'https://picsum.photos/id/238/200/300',
      cost: 10000000,
    },
    {
      id: '3',
      name: 'Gold Bar',
      imageUrl: 'https://picsum.photos/id/239/200/300',
      cost: 50000000,
    },
    {
      id: '4',
      name: 'Private Island',
      imageUrl: 'https://picsum.photos/id/240/200/300',
      cost: 200000000,
    },
    {
      id: '5',
      name: 'Space Shuttle',
      imageUrl: 'https://picsum.photos/id/241/200/300',
      cost: 400000000,
    },
  ];
}

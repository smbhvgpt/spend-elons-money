'use client';

import {useEffect, useState} from 'react';
import {Item, getItems} from '@/services/item-service';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {useToast} from '@/hooks/use-toast';
import {Icons} from '@/components/icons';

const INITIAL_BALANCE = 300000000000; // $300 Billion

interface PurchasedItem {
  itemId: string;
  quantity: number;
}

export default function Home() {
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [items, setItems] = useState<Item[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<PurchasedItem[]>([]);
  const {toast} = useToast();

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems);

      // Assign unique IDs and costs to items
      const itemsWithIdsAndCosts = fetchedItems.map((item, index) => ({
        ...item,
        id: `item-${index}`, // Assign a unique ID
        cost: getItemCost(item.name), // Assign a cost based on item name
      }));
      setItems(itemsWithIdsAndCosts);
    };

    fetchItems();
  }, []);

  const purchaseItem = (item: Item) => {
    if (balance >= item.cost) {
      setBalance(balance - item.cost);
      const existingItemIndex = purchasedItems.findIndex((purchasedItem) => purchasedItem.itemId === item.id);

      if (existingItemIndex > -1) {
        const newPurchasedItems = [...purchasedItems];
        newPurchasedItems[existingItemIndex].quantity += 1;
        setPurchasedItems(newPurchasedItems);
      } else {
        setPurchasedItems([...purchasedItems, {itemId: item.id, quantity: 1}]);
      }

      toast({
        title: 'Purchase Successful',
        description: `You have purchased ${item.name} for $${item.cost.toLocaleString()}.`,
      });
    } else {
      toast({
        title: 'Insufficient Balance',
        description: 'You do not have enough funds to purchase this item.',
        variant: 'destructive',
      });
    }
  };

  const removeItem = (item: Item) => {
    const existingItemIndex = purchasedItems.findIndex((purchasedItem) => purchasedItem.itemId === item.id);

    if (existingItemIndex > -1) {
      const newPurchasedItems = [...purchasedItems];
      if (newPurchasedItems[existingItemIndex].quantity > 1) {
        newPurchasedItems[existingItemIndex].quantity -= 1;
        setPurchasedItems(newPurchasedItems);
        setBalance(balance + item.cost);
      } else {
        setPurchasedItems(purchasedItems.filter((purchasedItem) => purchasedItem.itemId !== item.id));
        setBalance(balance + item.cost);
      }
      toast({
        title: 'Item Removed',
        description: `You have removed ${item.name} for $${item.cost.toLocaleString()}.`,
      });
    } else {
      toast({
        title: 'No Item Found',
        description: 'You have not purchased this item yet.',
        variant: 'destructive',
      });
    }
  };

  const getItemQuantity = (itemId: string): number => {
    const purchasedItem = purchasedItems.find((item) => item.itemId === itemId);
    return purchasedItem ? purchasedItem.quantity : 0;
  };

  const totalSpent = purchasedItems.reduce((acc, purchasedItem) => {
    const item = items.find((item) => item.id === purchasedItem.itemId);
    if (item) {
      return acc + item.cost * purchasedItem.quantity;
    }
    return acc;
  }, 0);

  const getItemCost = (itemName: string): number => {
    const itemCosts: { [key: string]: number } = {
      "Bubble gum pack": 1,
      "Cup of coffee": 3,
      "Doughnut": 2,
      "Socks (pair)": 5,
      "Avocado toast": 12,
      "Uber ride (short trip)": 15,
      "Bouquet of flowers": 25,
      "Yoga mat": 35,
      "Blender": 60,
      "Board game": 40,
      "iPhone 15 Pro": 1000,
      "1 Month Rent (studio apt)": 2000,
      "High-end headphones": 300,
      "Spa day": 500,
      "New suit": 800,
      "Flight to NYC": 400,
      "DSLR Camera": 1500,
      "Michelin Star dinner": 1000,
      "Rolex watch": 20000,
      "Tesla Model 3": 40000,
      "Diamond ring": 15000,
      "Fully decked gaming PC": 8000,
      "Tiny house": 75000,
      "Private chef (1 year)": 120000,
      "Yacht charter (1 week)": 200000,
      "Super Bowl ad (30s spot)": 250000,
      "Lamborghini Aventador": 500000,
      "House in Malibu": 5000000,
      "Private jet": 9000000,
      "Own a vineyard": 2500000,
      "Music festival headliner slot": 750000,
      "Billboard in Times Square": 1000000,
      "Gold-plated toilet": 1200000,
      "Ice hotel (build your own)": 8000000,
      "Falcon 9 Rocket Launch (SpaceX)": 67000000,
      "Buy an NBA team (partial stake)": 250000000,
      "Build a private island resort": 400000000,
      "Mars Rover mission": 2000000000,
      "Twitter (or “X”) rebrand campaign": 44000000000,
      "Space station module": 1000000000,
      "U.S. presidential campaign funding": 500000000,
      "Save the rainforest (1% global land)": 1300000000,
      "Rename a star after yourself": 25,
      "Meme NFT": 1000,
      "Buy Twitter Blue": 8,
      "Hire a llama for a day": 500,
      "Immortalize yourself as a statue": 300000,
      "Rent a blimp saying “I’m rich!”": 150000,
      "Coffee": 5,
      "Tesla": 40000,
      "Gold Bar": 20000,
      "Private Island": 400000000,
      "Space Shuttle": 67000000
    };
    return itemCosts[itemName] || 0;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
      {/* Item Catalog and Purchase Section */}
      <div className="w-full md:w-2/3">
        <Card>
          <CardHeader>
            <CardTitle>Item Catalog</CardTitle>
            <CardDescription>Purchase items to spend Elon's fortune!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-2"/>
                  <p className="text-sm text-muted-foreground">
                    {typeof item.cost === 'number' ? `$${item.cost.toLocaleString()}` : 'Cost not available'}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Button onClick={() => removeItem(item)} variant="secondary">
                      <Icons.minus className="h-4 w-4"/>
                    </Button>
                    <span>{getItemQuantity(item.id)}</span>
                    <Button onClick={() => purchaseItem(item)} className="bg-accent text-foreground hover:bg-accent-foreground hover:text-background transition-colors duration-300">
                      <Icons.plus className="h-4 w-4"/>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Spending Overview and AI Suggestions Section */}
      <div className="w-full md:w-1/3" style={{ position: 'sticky', top: '1rem', height: '100vh' }}>
        <Card className="shadow-md mb-4">
          <CardHeader>
            <CardTitle>Balance</CardTitle>
            <CardDescription>Your remaining fortune</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">${balance.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Spending Overview</CardTitle>
            <CardDescription>Items you've purchased</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[400px] overflow-y-auto">
            {purchasedItems.length > 0 ? (
              <ul className="list-none p-0">
                {purchasedItems.map((purchasedItem) => {
                  const item = items.find((item) => item.id === purchasedItem.itemId);
                  return (
                    item && (
                      <li key={purchasedItem.itemId} className="py-2">
                        {item.name} x {purchasedItem.quantity}
                      </li>
                    )
                  );
                })}
              </ul>
            ) : (
              <p className="text-muted-foreground">No items purchased yet.</p>
            )}
            <Separator className="my-2"/>
            <p className="font-semibold">Total Spent: ${totalSpent.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

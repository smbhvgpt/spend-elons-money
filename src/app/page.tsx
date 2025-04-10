'use client';

import {useEffect, useState} from 'react';
import {Item, getItems} from '@/services/item-service';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {suggestPurchases, SuggestPurchasesOutput} from '@/ai/flows/suggest-purchases';
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
  const [aiSuggestions, setAiSuggestions] = useState<SuggestPurchasesOutput | null>(null);
  const {toast} = useToast();

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      updateSuggestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance, items, purchasedItems]);

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
      updateSuggestions();
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
      updateSuggestions();
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

  const updateSuggestions = async () => {
    if (items.length === 0) {
      return;
    }
    const suggestions = await suggestPurchases({
      balance: balance,
      purchasedItems: purchasedItems,
      availableItems: items,
    });
    setAiSuggestions(suggestions);
  };

  const totalSpent = purchasedItems.reduce((acc, purchasedItem) => {
    const item = items.find((item) => item.id === purchasedItem.itemId);
    if (item) {
      return acc + item.cost * purchasedItem.quantity;
    }
    return acc;
  }, 0);

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
                  <p className="text-sm text-muted-foreground">${item.cost.toLocaleString()}</p>
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
      <div className="w-full md:w-1/3 flex flex-col gap-4 sticky top-4">
        <Card className="shadow-md">
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
          <CardContent>
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

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>AI Purchase Suggestions</CardTitle>
            <CardDescription>Let AI guide your spending!</CardDescription>
          </CardHeader>
          <CardContent>
            {aiSuggestions?.suggestions.length ? (
              <ul className="list-none p-0">
                {aiSuggestions.suggestions.map((suggestion) => {
                  const item = items.find((item) => item.id === suggestion.itemId);
                  return (
                    item && (
                      <li key={suggestion.itemId} className="py-2">
                        {item.name}: {suggestion.reason}
                      </li>
                    )
                  );
                })}
              </ul>
            ) : (
              <p className="text-muted-foreground">AI is thinking...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

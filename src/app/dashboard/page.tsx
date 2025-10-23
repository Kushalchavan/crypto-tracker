"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCoins } from "@/lib/api";

interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
}

export default function DashboardPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCoins() {
      try {
        setLoading(true);
        const data = await getCoins();
        setCoins(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, []);

  if (loading) return <p className="p-6">Loading coins...</p>;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top 100 Cryptocurrencies</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={coin.image}
              alt={coin.name}
              width={40}
              height={40}
              className="mb-2"
            />
            <h2 className="font-semibold">{coin.name}</h2>
            <p>${coin.current_price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">
              Market Cap: ${coin.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

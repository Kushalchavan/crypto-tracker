"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCoins } from "@/lib/api";
import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Coin {
  id: string;
  market_cap_rank: number;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
  ath_change_percentage: number;
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
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

  return (
    <div className="py-4 px-6 md:px-6 lg:px-16 xl:px-22">
      <h2 className="mt-5 text-2xl font-bold mb-3">
        Cryptocurrency Prices by Market Cap
      </h2>
      <p className="font-semibold text-sm text-muted-foreground">
        The global cryptocurrency market cap today is $3.83 Trillion, a 2.8%
        change in the last 24 hours.
      </p>

      <div className="mt-10 ">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead className="w-[300px]">Coin</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Price percentage</TableHead>
              <TableHead className="text-right">Total Volume</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">
                ATH Change percentage
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins.map((coin) => (
              <TableRow key={coin.id}>
                <TableCell>{coin.market_cap_rank}</TableCell>
                <TableCell className="cursor-pointer">
                  {
                    <p className="flex gap-2 items-center">
                      <Image
                        src={coin.image}
                        alt={coin.symbol}
                        width={25}
                        height={25}
                      />{" "}
                      {coin.name}{" "}
                      <span className="text-xs text-muted-foreground font-semibold uppercase">
                        {coin.symbol}
                      </span>
                    </p>
                  }{" "}
                </TableCell>
                <TableCell className="text-right">
                  ${coin.current_price.toLocaleString()}
                </TableCell>
                <TableCell className={`text-right ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right">
                  ${coin.total_volume.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">${coin.market_cap.toLocaleString()}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {Math.floor(coin.ath_change_percentage)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

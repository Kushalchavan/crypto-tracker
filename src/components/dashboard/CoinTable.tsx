"use client";

import Image from "next/image";
import { useSearch } from "@/context/SearchContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useMemo, useState } from "react";
import { getCoins } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "../ui/spinner";

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

const CoinTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchQuery } = useSearch();

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = 25;
  console.log(window.location.pathname);

  useEffect(() => {
    async function fetchCoins() {
      setLoading(true);
      const data = await getCoins(page, perPage);
      setCoins(data);
      setLoading(false);
    }
    fetchCoins();
  }, [page]);

  const filteredCoins = useMemo(() => {
    if (!searchQuery) return coins;
    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [coins, searchQuery]);

  const handlePageChange = (newPage: number) => {
    router.push(`/dashboard?page=${newPage}`);
  };

  return (
    <div className="py-4 px-6 md:px-6 lg:px-16 xl:px-22 mb-20">
      <h2 className="mt-5 text-2xl font-bold mb-3">
        Cryptocurrency Prices by Market Cap
      </h2>

      <p className="font-semibold text-sm text-muted-foreground">
        The global cryptocurrency market cap today is $3.83 Trillion, a 2.8%
        change in the last 24 hours.
      </p>

      <div className="mt-10">
        <Table>
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
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <div className="inline-flex items-center gap-2">
                    <Spinner /> {"Loading..."}
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>{coin.market_cap_rank}</TableCell>
                  <TableCell className="cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={coin.image}
                        alt={coin.symbol}
                        width={25}
                        height={25}
                      />
                      {coin.name}{" "}
                      <span className="text-xs text-muted-foreground font-semibold uppercase">
                        {coin.symbol}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${coin.current_price.toLocaleString()}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h != null
                      ? `${coin.price_change_percentage_24h.toFixed(2)}%`
                      : "0.0"}
                  </TableCell>
                  <TableCell className="text-right">
                    ${coin.total_volume.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${coin.market_cap.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {Math.floor(coin.ath_change_percentage)}%
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          {!searchQuery && (
            <TableCaption className="mt-10">
              <Pagination>
                {/* previous */}
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => page > 1 && handlePageChange(page - 1)}
                      className={`${
                        page === 1 ? "pointer-events-none opacity-50" : ""
                      } cursor-pointer`}
                    />
                  </PaginationItem>

                  {/* page numbers */}
                  {[1, 2, 3, 4].map((p) => (
                    <PaginationItem key={p}>
                      <PaginationLink
                        onClick={() => handlePageChange(p)}
                        isActive={page === p}
                        className={`cursor-pointer ${
                          page === p ? "bg-primary" : "hover:bg-accent"
                        }`}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  {/* next */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(page + 1)}
                      className="cursor-pointer"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCaption>
          )}
        </Table>
      </div>
    </div>
  );
};
export default CoinTable;

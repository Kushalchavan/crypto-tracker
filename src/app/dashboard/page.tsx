import Image from "next/image";
import { getCoins } from "@/lib/api";
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

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const perPage = 25;

  const coins: Coin[] = await getCoins(page, perPage);

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
            ))}
          </TableBody>

          <TableCaption className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`/dashboard?page=${page - 1}`}
                    className={
                      page === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {[1, 2, 3, 4].map((p) => (
                  <Pagination key={p}>
                    <PaginationLink
                      className={
                        page === p ? "bg-primary-foreground" : "cursor-pointer"
                      }
                      href={`/dashboard?page=${p}`}
                      isActive={page === p}
                    >
                      {p}
                    </PaginationLink>
                  </Pagination>
                ))}

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    href={`/dashboard?page=${page + 1}`}
                    className={
                      page === 5 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
}

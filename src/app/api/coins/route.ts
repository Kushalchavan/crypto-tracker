import { NextResponse } from "next/server";

export async function GET() {
  try {
    const perPage = 50; // coins per request
    const totalPages = 2; // to get top 100 coins
    let allCoins: any[] = [];

    for (let page = 1; page <= totalPages; page++) {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`,
        {
          headers: {
            "x-cg-demo-api-key": process.env.COINGECKO_API_KEY as string,
          },
          cache: "no-store",
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("CoinGecko API error:", errText);
        return NextResponse.json({ error: "Failed to fetch coins" }, { status: res.status });
      }

      const data = await res.json();
      allCoins = allCoins.concat(data);
    }

    return NextResponse.json(allCoins);
  } catch (error: any) {
    console.error("Unexpected error in /api/coins:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

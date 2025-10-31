export async function getCoins(page = 1, perPage = 25) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const res = await fetch(
    `${baseUrl}/api/coins?page=${page}&perPage=${perPage}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch coins:", text);
    throw new Error("Failed to fetch coins");
  }

  return res.json();
}

// for coins details page (single coin page)
export async function getCoinsById(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const res = await fetch(`${baseUrl}/api/coins/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Failed to fetch coin ${id}:`, text);
    throw new Error("Failed to fetch coin details");
  }

  return res.json();
}

// for coin chart
export async function getCoinMarketChart(coinId: string, days = 7) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch market chart data");
  }

  const data = await res.json();
  return data;
}

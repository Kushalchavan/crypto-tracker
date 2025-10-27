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

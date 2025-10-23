export async function getCoins() {
  const res = await fetch("/api/coins", { next: { revalidate: 60 } });

  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch coins:", text);
    throw new Error("Failed to fetch coins");
  }

  return res.json();
}

import { Coin } from "@/types/coins";

// export async function getCoins(): Promise<Coin[]> {
//    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/coins`, {
//     next: { revalidate: 60 }, // cache for 60s
//   });


//   if (!response.ok) {
//     throw new Error("Failed to fetch coins");
//   }

//   return response.json();
// }


export async function getCoins() {
  const res = await fetch("/api/coins", { next: { revalidate: 60 } });

  if (!res.ok) {
    const text = await res.text();
    console.error("Failed to fetch coins:", text);
    throw new Error("Failed to fetch coins");
  }

  return res.json();
}

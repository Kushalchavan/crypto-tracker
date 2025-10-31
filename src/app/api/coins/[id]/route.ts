import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Coin not found" }, { status: 404 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Unexpected error in /api/coins:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

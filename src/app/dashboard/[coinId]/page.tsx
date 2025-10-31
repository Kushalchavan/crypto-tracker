import CoinChart from "@/components/dashboard/CoinChart";
import { getCoinMarketChart, getCoinsById } from "@/lib/api";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: { coinId: string };
}) => {
  const { coinId } = params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/coins/${coinId}`,
      {
        cache: "no-store",
      }
    );
    const coin = await res.json();

    return {
      title: `${coin.name} Price, Chart & Market Data | CryptoPulse`,
      description: `View the latest ${
        coin.name
      } (${coin.symbol.toUpperCase()}) price, market cap, and performance on CryptoPulse. Stay updated with live charts and market insights.`,
      openGraph: {
        title: `${coin.name} Price | CryptoPulse`,
        description: `Track ${
          coin.name
        } (${coin.symbol.toUpperCase()}) with live price charts and market data.`,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${coinId}`,
        images: [
          {
            url: coin.image?.large || "/default-coin.png",
            width: 600,
            height: 600,
            alt: `${coin.name} logo`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${coin.name} Price | CryptoPulse`,
        description: `Get real-time updates on ${
          coin.name
        } (${coin.symbol.toUpperCase()}) prices, charts, and more.`,
        images: [coin.image?.large || "/default-coin.png"],
      },
    };
  } catch (error) {
    return {
      title: "CryptoPulse | Cryptocurrency Tracker",
      description: "Track cryptocurrency prices and charts in real time.",
    };
  }
};

interface CoinsDetailsProps {
  params: { coinId: string };
}

const CoinsDetailsPage = async ({ params }: CoinsDetailsProps) => {
  const { coinId } = await params;
  const coin = await getCoinsById(coinId);
  const chartData = await getCoinMarketChart(coinId, 7);

  // Transform API data -> recharts format
  const formattedData = chartData.prices.map((price: [number, number]) => ({
    date: new Date(price[0]).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    price: price[1],
  }));

  return (
    <div className="py-4 px-6 md:px-6 lg:px-16 xl:px-22 mb-25">
      <div className="flex items-center gap-4 mb-6">
        <Image src={coin.image.large} alt={coin.name} width={50} height={50} />
        <h1 className="text-3xl font-bold">{coin.name}</h1>
        <span className="uppercase text-muted-foreground">{coin.symbol}</span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Rank: #{coin.market_cap_rank}
      </p>

      {/* Stats + Chart Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8">
        {/* Left: Coin Stats */}
        <div className="flex-1 grid gap-6">
          <div>
            <p className="text-lg font-semibold">Current Price:</p>
            <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-lg font-semibold">Market Cap:</p>
            <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-lg font-semibold">24h Change:</p>
            <p
              className={`${
                coin.market_data.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="flex-2">
          <h2 className="text-xl font-semibold mb-2">
            {coin.name} Price (Last 7 Days)
          </h2>
          <CoinChart data={formattedData} coinName={coin.name} />
        </div>
      </div>

      {/* About section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About {coin.name}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: coin.description.en.split(".")[0] + ".",
          }}
          className="text-muted-foreground"
        />
      </div>
    </div>
  );
};
export default CoinsDetailsPage;

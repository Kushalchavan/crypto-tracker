const Features = () => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-center mx-auto">
        Powerful Features
      </h1>
      <p className="text-sm text-muted-foreground text-center mt-2 max-w-md mx-auto">
        Track real-time crypto prices, analyze market trends, and manage your
        portfolio — all in one place.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
        {/* --- Feature 1: Real-Time Price Tracking --- */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-700 gap-6 max-w-sm shadow-md">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 14h4l3 6 4-12 3 6h6"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="14" r="12" stroke="#2563EB" strokeWidth="2" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-green-600">
              Real-Time Price Tracking
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with live cryptocurrency prices, charts, and market
              movements 24/7.
            </p>
          </div>
        </div>

        {/* --- Feature 2: Portfolio Management --- */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-700 shadow-md gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3v22M7 10l7-7 7 7M4 25h20"
                stroke="#059669"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-green-600">
              Portfolio Management
            </h3>
            <p className="text-sm text-muted-foreground">
              Add your holdings, monitor profit & loss, and get insights into
              your overall portfolio health.
            </p>
          </div>
        </div>

        {/* --- Feature 3: Market Insights & Alerts --- */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-800 gap-6 max-w-sm shadow-md">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2.333a11.667 11.667 0 1 1 0 23.334A11.667 11.667 0 0 1 14 2.333z"
                stroke="#7C3AED"
                strokeWidth="2"
              />
              <path
                d="M14 8.166v5.834l3.5 2.333"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-green-600">
              Market Insights & Alerts
            </h3>
            <p className="text-sm text-muted-foreground">
              Receive instant alerts on price spikes, dips, and breaking crypto
              news tailored to your watchlist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;

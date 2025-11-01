# 💰 CryptoPulse – Cryptocurrency Tracker & Portfolio App

A **fullstack cryptocurrency web application** built with **Next.js + TypeScript**, featuring **real-time crypto data**, **interactive charts**, and **user authentication** using **NextAuth**.  
Users can **track live prices, view detailed market trends**, and **manage their crypto watchlist** – all powered by the **CoinGecko API**, **Recharts**, and **MongoDB**.

---

## 🚀 Tech Stack

### **Frontend**
- ⚡ [Next.js ](https://nextjs.org/) – React Framework for SSR and static generation  
- 💎 [TypeScript](https://www.typescriptlang.org/) – Type-safe development  
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- 📊 [Recharts](https://recharts.org/en-US/) – Data visualization library  

### **Backend**
- 🌐 [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) – Fullstack serverless backend  
- 🔐 [NextAuth.js](https://next-auth.js.org/) – Secure authentication (Google, GitHub, or Credentials)  
- 🪙 [CoinGecko API](https://www.coingecko.com/en/api) – Fetch live cryptocurrency data  
- 🍃 [MongoDB](https://www.mongodb.com/) – Database for user data & watchlists  
- ⚙️ [Mongoose](https://mongoosejs.com/) – Elegant MongoDB object modeling  

---

## 🌟 Features

✅ **User Authentication** – Sign in with Google, GitHub, or credentials using NextAuth  
✅ **Live Cryptocurrency Prices** – Powered by CoinGecko API  
✅ **Interactive Charts** – Price history visualized with Recharts  
✅ **Search & Filter** – Quickly find coins by name or symbol  
✅ **Responsive UI** – Clean, modern design optimized for all devices  
✅ **Server-side Rendering (SSR)** – Improved performance and SEO  

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cryptopulse.git
cd cryptopulse


npm install
# or
yarn install


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

MONGODB_URI=your_mongodb_connection_string
COINGECKO_API_BASE=https://api.coingecko.com/api/v3


npm run dev
# or
yarn dev

```


## 📈 API Integration – CoinGecko

**This app uses CoinGecko’s free API to fetch:**

**✅ Live prices for all major cryptocurrencies**

**✅ Historical data for Recharts visualization**

**✅ Market statistics and trends**



**⭐ If you like this project, give it a star on GitHub!**
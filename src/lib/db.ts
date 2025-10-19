import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
  throw new Error("Please define MONGODB_URL environment variable");
}

// the global type to support mongoose caching
declare global {
  var mongooseCache: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Initiallize the cache
if (!global.mongooseCache) {
  global.mongooseCache = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (global.mongooseCache.conn) {
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose.connect(MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });
  }

  try {
    global.mongooseCache.conn = await global.mongooseCache.promise;
    console.log("MongoDB Connected Successfully");
    return global.mongooseCache.conn;
  } catch (error) {
    console.error("MongoDB connection error:", (error as Error).message);
    global.mongooseCache.promise = null;
    throw error;
  }
}

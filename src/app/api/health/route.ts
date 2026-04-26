import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectToDatabase();
    const ok = mongoose.connection.readyState === 1;
    return NextResponse.json({
      status: ok ? "ok" : "degraded",
      db: ok ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "error",
        db: "disconnected",
        message: err instanceof Error ? err.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

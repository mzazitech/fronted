import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded: any = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { pickup, dropoff } = await req.json();

  const ride = await prisma.ride.create({
    data: {
      pickup,
      dropoff,
      customerId: decoded.id,
    },
  });

  return NextResponse.json({ success: true, ride });
}

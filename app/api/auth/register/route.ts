import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { role, name, surname, phone, password } = await req.json();

    const existing = await prisma.user.findUnique({
      where: { phone },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Phone already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        role,
        name,
        surname,
        phone,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

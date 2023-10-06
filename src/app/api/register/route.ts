import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const isAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isAlreadyExist) {
      return NextResponse.json(
        { error: "User already register with this email" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user, message: "Register Successful!" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

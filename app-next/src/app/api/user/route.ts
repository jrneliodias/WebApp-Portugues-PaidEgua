import { prisma } from "@/lib/prisma";

import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      username,
      password,
      birthdate,
      profession,
      schooling,
      situation,
      timeInBrazil,
      timeInBelem,
    } = body;

    //Check if email already exists
    const existingUserByEmail =
      await prisma.profileUser.findUnique({
        where: { email: email },
      });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message:
            "User with this email already exists.",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(
      password,
      10
    );

    const newUser =
      await prisma.profileUser.create({
        data: {
          username,
          email,
          password: hashedPassword,
          birthdate,
          profession,
          schooling,
          situation,
          timeInBrazil,
          timeInBelem,
        },
      });

    const {
      password: newPasswordUser,
      ...newUserWithoutPassword
    } = newUser;

    return NextResponse.json(
      {
        user: newUserWithoutPassword,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
}

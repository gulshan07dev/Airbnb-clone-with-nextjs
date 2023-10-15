import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const body = await request.json();

    for (const key in body) {
      if (!body[key]) {
        return NextResponse.json(
          { error: "All fields are required" },
          { status: 400 }
        );
      }
    }

    const { listingId, startDate, endDate, totalPrice } = body;

     const listingAndReservation = await prisma.listing.update({
       where: {
         id: listingId,
       },
       data: {
         reservations: {
           create: {
             userId: currentUser.id,
             startDate,
             endDate,
             totalPrice,
           },
         },
       },
     });

    return NextResponse.json({ listingAndReservation }, { status: 200 });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

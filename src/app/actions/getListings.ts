import prisma from "@/app/libs/prismadb";

export interface ListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings() {
  try {
     
    const listings = await prisma.listing.findMany();

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt?.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}

import { NextResponse } from "next/server";
import data from "../../../../mockData/data.json";
import { Lender } from "../../../../types/lenderType";

export async function GET(
  _req: Response,
  { params }: { params: { lenderId: string } },
) {
  const { lenders }: { lenders: Lender[] } = data;
  const { lenderId } = params;

  const lender = lenders.find((lender) => lenderId === lender.id.toString());

  if (!lenders) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(lender);
}

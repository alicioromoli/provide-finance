import { NextResponse } from "next/server";
import data from "../../../mockData/data.json";
import { Lender } from "../../../types/lenderType";
export async function GET(_req: Response) {
  const { lenders }: { lenders: Lender[] } = data;

  if (!lenders) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(lenders);
}

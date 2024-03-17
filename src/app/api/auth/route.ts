import { NextResponse } from "next/server";
import data from "../../../mockData/data.json";
import { cookies } from "next/headers";
import { CONSTANTS } from "@/app/constants";
import { User } from "../../../types/userType";

export async function POST(req: Response) {
  const { users }: { users: User[] } = data;
  const cookieStore = cookies();
  const body = await req.json();
  const { email, password } = body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  if (password !== user.password) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  cookieStore.set(CONSTANTS.USER_LOGGED_IN, "true", { maxAge: 60 * 60 * 24 });

  return NextResponse.json(
    { message: "Login successful", userId: user.id },
    { status: 200 },
  );
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CONSTANTS } from "./app/constants";

export function middleware(request: Request) {
  const cookieStore = cookies();
  const user = cookieStore.get(CONSTANTS.USER_LOGGED_IN)?.value == "true";

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/lenders/", "/lenders/:path*"],
};

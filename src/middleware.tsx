import { NextResponse, type NextRequest } from "next/server";
import {getUsername} from '@/app/lib/authentication'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("username")?.value;
  
  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
  
  if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }

}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/",
    "/auto",
    "/manual",
    "/config",
  ],
};

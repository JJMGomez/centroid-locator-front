import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  console.log(currentUser)

  if (!currentUser) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  else {
    return NextResponse.redirect(new URL('/', request.url))
  }

  //   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //     return NextResponse.redirect(new URL('/dashboard', request.url))
  //   }

  //   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //     return NextResponse.redirect(new URL('/login', request.url))
  //   }
}

export const config = {
  matcher: [
    // '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/',
    '/manual',
    '/upload',
    '/config',
  ],
}

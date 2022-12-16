import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const exceptionPath = ['/pngs', '/svgs', '/webps', '/favicon.ico', '/thumbnail.png'];

  const isExceptionPath = (v: string) => exceptionPath.some((ele) => v.startsWith(ele));

  if (
    !request.nextUrl.pathname.startsWith('/login') ||
    !request.nextUrl.pathname.startsWith('/signup') ||
    !isExceptionPath
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.search = '';
    return NextResponse.redirect(url, 307);
  }
}

export const config = {
  matcher: '/',
};

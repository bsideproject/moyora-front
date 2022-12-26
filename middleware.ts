export function middleware() {
  /*
   * const exceptionPath = ['/pngs', '/svgs', '/webps', '/favicon.ico', '/thumbnail.png'];
   * const isExceptionPath = (v: string) => exceptionPath.some((ele) => v.startsWith(ele));
   *
   * if (
   *   !request.nextUrl.pathname.startsWith('/login') ||
   *   !request.nextUrl.pathname.startsWith('/signup') ||
   *   !isExceptionPath
   * ) {
   *   const url = request.nextUrl.clone();
   *   url.pathname = '/login';
   *   url.search = '';
   *   return NextResponse.redirect(url, 307);
   * }
   */
}

export const config = {
  matcher: '/',
};

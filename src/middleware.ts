import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  if (request.nextUrl.pathname === '/app') {
    if (/android/i.test(userAgent)) {
      // Redirect to external Android link
      return NextResponse.redirect('https://android.com');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      // Redirect to external iOS link
      return NextResponse.redirect('https://ios.com');
    } else {
      // Redirect to a different link for other devices
      return NextResponse.redirect('https://wikipedia.com');
    }
  }

  if (request.nextUrl.pathname === '/feedback') {
    // Redirect to a different link for /feedback
    return NextResponse.redirect('https://google.com');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*', '/feedback/:path*'],
};

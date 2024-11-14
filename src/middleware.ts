import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  if (request.nextUrl.pathname === '/app') {
    if (/android/i.test(userAgent)) {
      // Redirect to external Android link
      return NextResponse.redirect('https://devfestlagos.com/404');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      // Redirect to external iOS link
      return NextResponse.redirect('https://apps.apple.com/us/app/devfest-lagos-2024/id6737826901');
    } else {
      // Redirect to a different link for other devices
      return NextResponse.redirect('https://devfestlagos.com');
    }
  }

  if (request.nextUrl.pathname === '/feedback') {
    return NextResponse.redirect('https://google.com');
  }

  if (request.nextUrl.pathname === '/speaker-feedback') {
    return NextResponse.redirect('https://bit.ly/speaker-24-feedback');
  }

  if (request.nextUrl.pathname === '/wakanda') {
    return NextResponse.redirect('https://wakanda.devfestlagos.com');
  }

  if (request.nextUrl.pathname === '/bus') {
    return NextResponse.redirect(
      'https://docs.google.com/document/d/1ilDBsUlxZwG86HtvYIuuZ3-v0Z_YMWnajaCaVQREqog/edit?usp=sharing',
    );
  }

  if (request.nextUrl.pathname === '/hiring') {
    return NextResponse.redirect('http://olympus.devfestlagos.com');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*', '/feedback/:path*', '/speaker-feedback/:path*', '/wakanda/:path*', '/bus/:path*', '/hiring/:path*'],
};
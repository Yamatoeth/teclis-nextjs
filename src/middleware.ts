// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Redirige uniquement la racine /
  if (url.pathname === '/') {
    url.pathname = '/en'; // defaultLocale défini dans getRequestConfig()
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Applique le middleware uniquement à la racine
export const config = {
  matcher: ['/'],
};
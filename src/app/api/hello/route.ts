// src/app/api/hello/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, this is a test endpoint for code review!' });
}

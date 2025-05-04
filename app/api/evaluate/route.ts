import { NextResponse } from 'next/server';

export async function POST() {
  console.log('you are in the backend');
  return NextResponse.json({ message: 'hello world' });
}

import { NextResponse } from 'next/server';
import  prisma  from '../../../lib/prisma';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, companyName, message } = body;

    if (!email || !message || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find existing user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'User not found with this email' }, { status: 404 });
    }

    // Create a new contact message
    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        companyName,
        message,
        user: {
          connect: { id: user.id },
        },
      },
    });

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

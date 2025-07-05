import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { comparePassword, generateToken } from '../../../../utils/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = generateToken(user.id) // Token expires in 1 hour
    const expiresAt = new Date(Date.now() + 3600000) // 1 hour from now
    // Update user's last login time

    // Don't return the password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        user: userWithoutPassword,
        token,
        expiresAt: expiresAt.toISOString()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
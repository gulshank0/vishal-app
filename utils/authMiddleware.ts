import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from './auth'
import prisma from '../lib/prisma'

interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: string;
    [key: string]: any;
  }
}

export function authMiddleware(handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      // Get the token from the Authorization header
      const authHeader = req.headers.authorization
      if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const token = authHeader.split(' ')[1]
      const decoded = verifyToken(token)

      if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' })
      }

      // Find the user
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      })

      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      }

      // Attach the user to the request
      req.user = user

      // Call the handler
      return handler(req, res)
    } catch (error) {
      console.error('Auth middleware error:', error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}
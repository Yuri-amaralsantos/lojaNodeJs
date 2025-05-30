import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'my_secret_key';

// Defina uma interface para adicionar o campo `user` ao Request
interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(403).json({ message: 'Token não fornecido' });
    return;
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Token inválido' });
      return;
    }

    req.user = user;
    next();
  });
};

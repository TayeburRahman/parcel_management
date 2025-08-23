import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: any,
  expireTime: string,
): string => {
  return jwt.sign(payload, secret, {});
};
const createResetToken = (
  payload: any,
  secret: any,
  expireTime: string,
): string => {
  return jwt.sign(payload, secret, {});
};

const verifyToken = (token: string, secret: any): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
  createResetToken,
};

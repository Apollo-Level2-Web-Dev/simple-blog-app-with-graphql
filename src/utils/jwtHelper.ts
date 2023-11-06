import jwt from 'jsonwebtoken'
require('dotenv').config()

export const jwtHelper = async (payload: { userId: number }) => {
    const token = jwt.sign(payload, process.env.JWT_SIGN, { expiresIn: '1d' });
    return token;
}
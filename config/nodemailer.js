import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pioneershahid@gmail.com',
    pass: EMAIL_PASSWORD,
  },
});

export const accountEmail = 'pioneershahid@gmail.com';
export default transporter;

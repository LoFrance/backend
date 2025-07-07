import * as nodemailer from 'nodemailer';
import { appConfig } from '../config';
import { Operation } from '../config/types/operation';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: appConfig.etherealUser,
    pass: appConfig.etherealPassword,
  },
});

export const sendSignUpEmail = async (destinationEmail: string, token: string) => {
  const operation: Operation = 'register';
  await transporter.sendMail({
    from: appConfig.email,
    to: destinationEmail,
    subject: 'Complete account signup',
    /*eslint max-len: ["error", { "code": 180 }]*/
    html: `
      <h1>You are almost there</h1>
      <span>Click the link below to confirm your email</span>
      <a href="${appConfig.basePath}/callback?token=${token}&operation=${operation}">Create your account</a>
    `,
  });
};

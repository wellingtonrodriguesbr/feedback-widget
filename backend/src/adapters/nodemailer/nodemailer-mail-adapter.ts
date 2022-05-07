import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f2957f81dacd08",
    pass: "59d2f0fd7b7c6f",
  },
});

export class NodemailterMailAdapter implements MailAdapter {
  async sendEmail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Wellington Rodrigues <wrrodrigues713@gmail.com>",
      subject,
      html: body,
    });
  }
}

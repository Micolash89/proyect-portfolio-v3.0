import { envEmailConfig } from "@/lib/config/emailConfig";
import nodemailer from "nodemailer";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: envEmailConfig.host,
      port: Number(envEmailConfig.port),
      secure: Number(envEmailConfig.port) === 465,
      auth: {
        user: envEmailConfig.email_user,
        pass: envEmailConfig.api_pass,
      },
    });
  }

  async sendEmailConstact(name: string, email: string, message: string) {
    try {
      await this.transporter.sendMail({
        from: '"Portfolio 3.0 mensaje" <noreply@proyect-cv.com>',
        to: envEmailConfig.email_send,
        subject: "Nuevo mensaje de contacto",
        html: `mensaje de: <b>${name}</b> <br/> <b>email:</b> ${email} <br/> <p>${message}</p>`,
      });
    } catch (error) {
      console.error("Error enviando email", error);
    }
  }
}
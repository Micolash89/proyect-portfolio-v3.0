import { envEmailConfig } from "@/lib/config/emailConfig";
import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

  async sendEmailContact(name: string, email: string, message: string) {
    await this.transporter.sendMail({
      from: '"Portfolio 3.0 mensaje" <noreply@proyect-cv.com>',
      to: envEmailConfig.email_send,
      subject: "Nuevo mensaje de contacto",
      html: `mensaje de: <b>${escapeHtml(name)}</b> <br/> <b>email:</b> ${escapeHtml(email)} <br/> <p>${escapeHtml(message)}</p>`,
    });
  }
}

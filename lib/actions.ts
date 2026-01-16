"use server";
import { z } from "zod";
import { EmailService } from "./service/emailService";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "El nombre es obligatorio" })
    .max(40, { message: "El nombre es muy largo" }),
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  message: z
    .string()
    .min(10, { message: "El mensaje es muy corto" })
    .max(500, { message: "El mensaje es muy largo" }),
});

// Tipos para la respuesta
type FieldErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};

type ActionResponse =
  | {
      status: true;
      message: string;
    }
  | {
      status: false;
      errors: FieldErrors;
    };

export default async function createEmail(
  formData: FormData
): Promise<ActionResponse> {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      status: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;
  const emailService = new EmailService();

  try {
    await emailService.sendEmailConstact(name, email, message);

    return { status: true, message: "Mensaje enviado correctamente" };
  } catch (error) {
    return {
      status: false,
      errors: { message: ["Error al enviar el mensaje. Intenta de nuevo."] },
    };
  }
}
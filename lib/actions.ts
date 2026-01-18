"use server";
import { z } from "zod";
import { EmailService } from "./service/emailService";

const schema = z.object({
  name: z
    .string({ message: "Ingrese un nombre" })
    .trim() // Elimina espacios al inicio y final
    .min(2, { message: "El nombre debe contener al menos 2 caracteres" })
    .max(50, { message: "El nombre puede contener hasta 50 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(?:[\s.'][a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/, {
      message: "El nombre solo puede contener letras, espacios, puntos y apóstrofes",
    })
    .refine((val) => !/\s{2,}/.test(val), {
      message: "No se permiten espacios consecutivos",
    })
    .refine((val) => !/^[.\s']|[.\s']$/.test(val), {
      message: "El nombre no puede comenzar o terminar con punto, espacio o apóstrofe",
    }),
  email: z
    .string({ message: "Ingrese un email" })
    .email("Debe ser un email válido")
    .min(6, "El email debe contener al menos 6 caracteres")
    .max(50, "El email puede contener hasta 50 caracteres"),
  message: z
    .string({ message: "Ingrese un mensaje" })
    .min(10, { message: "El mensaje debe contener al menos 10 caracteres" })
    .max(500, { message: "el mensaje debe contener menos de 500 caracteres" }),
});

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

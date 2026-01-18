"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {  MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import createEmail from "@/lib/actions";
import { toast } from "sonner";
import ButtonForm from "./buttonForm";

type FieldErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setErrors({});

    const response = await createEmail(formData);

    if (response.status) {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("¡Mensaje enviado! ", {
        description: "Gracias por contactarme. Te responderé pronto.",
      });
    } else {
      setErrors(response.errors);

      // Mostrar el primer error encontrado
      const firstError =
        response.errors.name?.[0] ||
        response.errors.email?.[0] ||
        response.errors.message?.[0];

      toast.error("Error en el formulario", {
        description: firstError,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="contacto"
      className="relative py-28 md:py-48 bg-linear-to-t from-zinc-900 to-background from-10%"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl text-luma-green uppercase tracking-widest mb-4 block font-medium select-none"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-8 text-balance"
            >
              Hablemos de tu
              <br />
              <span className="text-muted-foreground">próximo proyecto</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              ¿Tienes una idea en mente? Me encantaría escucharla. Estoy
              disponible para proyectos freelance, colaboraciones y
              oportunidades de trabajo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 text-muted-foreground mb-8"
            >
              <MapPin size={18} className="text-luma-green" />
              <span>Buenos Aires, Argentina</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form action={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className={`bg-card border-border/50 focus:border-luma-green rounded-xl transition-colors ${
                    errors.name?.length ? "border-red-500" : ""
                  }`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: [] });
                  }}
                />
                {errors.name &&
                  errors.name.map((e, index) => (
                    <p
                      key={"errorName" + index}
                      className="text-sm text-red-500"
                    >
                      {e}
                    </p>
                  ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className={`bg-card border-border/50 focus:border-luma-green rounded-xl transition-colors ${
                    errors.email?.length ? "border-red-500" : ""
                  }`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: [] });
                  }}
                />
                {errors.email &&
                  errors.email.map((e, index) => (
                    <p
                      key={"errorEmail" + index}
                      className="text-sm text-red-500"
                    >
                      {e}
                    </p>
                  ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={6}
                  className={`bg-card border-border/50 focus:border-luma-green rounded-xl transition-colors resize-none ${
                    errors.message?.length ? "border-red-500" : ""
                  }`}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setErrors({ ...errors, message: [] });
                  }}
                />
                {errors.message &&
                  errors.message.map((e, index) => (
                    <p
                      key={"errorMessage" + index}
                      className="text-sm text-red-500"
                    >
                      {e}
                    </p>
                  ))}
              </div>

              {/* <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all duration-30 hover:cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                    />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Enviar Mensaje
                  </span>
                )}
              </Button> */}

                <ButtonForm/>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

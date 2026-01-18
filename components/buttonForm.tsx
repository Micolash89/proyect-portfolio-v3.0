"use client";

import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonForm() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className={`w-full bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all duration-30 ${
    pending ? " cursor-not-allowed" : "hover:cursor-pointer"
  }`}
    >
      {pending ? (
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
    </Button>
  );
}
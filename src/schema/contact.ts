import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Entrez un nom complet valide")
    .max(100, "Le nombre de caractères doit être inférieur ou égal à 100")
    .trim(),
  email: z.email("Email invalid").min(5, "Au minimum 5 caractères").trim(),
  message: z
    .string()
    .min(25, "Le message est trop court")
    .max(1000, "Votre message est long")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

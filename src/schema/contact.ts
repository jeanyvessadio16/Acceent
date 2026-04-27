import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty("Ne doit pas être vide")
    .min(2, "Entrez un nom complet valide")
    .max(100, "Le nombre de caractères doit être inférieur ou égal à 100")
    .trim(),
  email: z
    .email("Email invalid")
    .nonempty("Ne doit pas être vide")
    .min(12, "Au minimum 5 caractères")
    .max(60, "Votre email est trop long")
    .trim(),
  message: z
    .string()
    .nonempty("Ne doit pas être vide")
    .min(20, "Le message est trop court")
    .max(800, "Votre message est long")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

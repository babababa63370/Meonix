import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.items.list.path, async (req, res) => {
    const result = await storage.getItems();
    res.json(result);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid request" });
      }

      const message = parsed.data;
      
      // Persist message
      await storage.createMessage(message);

      // Send email to admin using Resend
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY || "re_xxxxxxxxx");
      
      try {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "meonix100@gmail.com",
          subject: `Nouveau message de ${message.name}`,
          html: `
            <h2>Nouveau message reçu</h2>
            <p><strong>De:</strong> ${message.name}</p>
            <p><strong>Email:</strong> ${message.email}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message.message.replace(/\n/g, "<br>")}</p>
          `,
        });
        res.status(200).json({ success: true, message: "Message envoyé avec succès via Resend" });
      } catch (emailError) {
        console.error("Resend error:", emailError);
        res.status(200).json({ success: true, message: "Message enregistré mais erreur d'envoi e-mail" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Erreur lors de l'envoi du message" });
    }
  });

  return httpServer;
}

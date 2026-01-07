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

      // Send email to admin
      const nodemailer = await import("nodemailer");
      
      const gmailUser = process.env.GMAIL_USER;
      const gmailPass = process.env.GMAIL_PASS;
      
      if (!gmailUser || !gmailPass) {
        console.warn("Gmail credentials not configured. Message received and saved but not sent via email.");
        return res.status(200).json({ success: true, message: "Message reçu et enregistré dans la base de données" });
      }

      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: gmailUser,
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

      res.status(200).json({ success: true, message: "Message envoyé avec succès" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Erreur lors de l'envoi du message" });
    }
  });

  return httpServer;
}

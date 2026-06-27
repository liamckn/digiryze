import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { prenom, nom, email, telephone, service, projet } = req.body;

  if (!prenom || !nom || !email || !service || !projet) {
    res.status(400).json({ error: "Champs manquants" });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    res.status(500).json({ error: "Configuration email manquante" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const serviceLabels: Record<string, string> = {
    web: "Site web",
    web_seo: "Site web + SEO",
    web_ia_seo: "Site web + IA + SEO",
    seo: "SEO uniquement",
    other: "Autre",
  };

  try {
    await transporter.sendMail({
      from: `"Digiryze Site" <${gmailUser}>`,
      to: "contact.digiryze@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de devis — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #00ff88; margin-bottom: 4px;">Nouvelle demande de devis</h2>
          <p style="color: #666; margin-top: 0; margin-bottom: 24px;">Reçue via le site Digiryze</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Prénom</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${prenom}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Nom</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${nom}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Téléphone</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${telephone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceLabels[service] ?? service}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold; vertical-align: top;">Projet</td><td style="padding: 10px;">${projet.replace(/\n/g, "<br>")}</td></tr>
          </table>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Échec d'envoi de l'email" });
  }
});

export default router;

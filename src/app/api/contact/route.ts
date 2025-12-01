import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    // Validation simple
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }

    // Transporteur SMTP (notes pour setup ultérieur)
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // setup à finaliser
      port: 587,
      secure: false,
      auth: {
        user: 'contact@teclis-scientific.com', // à configurer
        pass: 'MOT_DE_PASSE_APPLICATIF', // à configurer
      },
    });

    const mailOptions = {
      from: `"Site TECLIS" <contact@teclis-scientific.com>`,
      to: 'contact@teclis-scientific.com', // ajouter plusieurs destinataires si besoin
      subject: `[TECLIS Contact] ${subject || 'Nouveau message'}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
        Envoyé le: ${new Date().toISOString()}
      `,
    };

    // Envoi du mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
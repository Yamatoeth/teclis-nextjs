'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card-premium max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Nom
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Votre message..."
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button type="submit" className="btn-hero flex-1" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </Button>
      </div>
      {status === 'success' && (
        <p className="text-xs text-green-600 text-center">
          Merci pour votre message !
        </p>
      )}
      {status === 'error' && (
        <p className="text-xs text-red-600 text-center">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      {/* 
        Étapes restantes pour configurer le formulaire en production avec SMTP Microsoft 365 et DNS OVH :

        1. Configurer un serveur backend (API) pour gérer l'envoi des emails via SMTP Microsoft 365.
           - Utiliser une bibliothèque comme nodemailer dans l'API pour envoyer les emails.
           - Authentifier avec les identifiants SMTP Microsoft 365 (serveur, port, utilisateur, mot de passe).

        2. Configurer les enregistrements DNS chez OVH pour permettre l'envoi d'emails :
           - Ajouter/modifier les enregistrements SPF pour autoriser Microsoft 365 à envoyer des emails depuis votre domaine.
           - Ajouter un enregistrement DKIM pour signer les emails sortants.
           - Ajouter un enregistrement DMARC pour définir la politique de gestion des emails non conformes.

        3. Sécuriser les informations sensibles (comme les identifiants SMTP) via des variables d'environnement sur le serveur.

        4. Tester l'envoi des emails en production pour s'assurer que les emails ne sont pas marqués comme spam.

        5. Optionnel : Ajouter une validation côté serveur et éventuellement un CAPTCHA pour éviter les spams.

        Ces étapes sont nécessaires pour garantir que les emails envoyés via ce formulaire arrivent bien dans la boîte de réception des destinataires et respectent les bonnes pratiques d'envoi.
      */}
    </form>
  );
};

export default ContactForm;

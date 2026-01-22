#!/usr/bin/env python3
import json
from pathlib import Path

messages_dir = Path("src/messages")

# Read English as the reference
with open(messages_dir / "en.json", encoding="utf-8") as f:
    en_data = json.load(f)

# Missing keys per locale (based on previous analysis)
missing_keys_data = {
    "de": {
        "applications.data.foodBeverages.benefits.cards.development.text": "Optimieren Sie Produktionsprozesse mit umfassender Grenzflächenanalyse",
        "applications.data.foodBeverages.benefits.cards.development.title": "Prozessentwicklung",
        "applications.data.foodBeverages.benefits.cards.research.text": "Ermöglichen Sie fortgeschrittene Forschung mit Präzisionsmesstechnologie",
        "applications.data.foodBeverages.benefits.cards.research.title": "F&E-Unterstützung"
    },
    "es": {
        "applications.dailyChemicals.badge": "Industria Química",
        "applications.data.foodBeverages.badge": "Industria Alimentaria",
        "applications.data.foodBeverages.benefits.cards.innovation.text": "Acelere el desarrollo de formulaciones con datos detallados de interfaz",
        "applications.data.foodBeverages.benefits.cards.innovation.title": "Innovación de Productos",
        "applications.data.foodBeverages.benefits.cards.safety.text": "Respalde los estándares de seguridad alimentaria con métodos de medición confiables",
        "applications.data.foodBeverages.benefits.cards.safety.title": "Seguridad Alimentaria",
        "applications.data.foodBeverages.benefits.cards.development.text": "Optimice los procesos de producción con análisis integral de interfaz",
        "applications.data.foodBeverages.benefits.cards.development.title": "Desarrollo de Procesos",
        "applications.data.foodBeverages.benefits.cards.research.text": "Permita investigación avanzada con tecnología de medición de precisión",
        "applications.data.foodBeverages.benefits.cards.research.title": "Soporte I+D",
        "applications.data.lifeSciences.badge": "Ciencias de la Vida",
        "applications.data.oilGas.badge": "Sector Energético",
        "applications.subPage.ctaDescription": "Nuestro equipo técnico puede ayudarle a encontrar la solución perfecta para sus necesidades de investigación.",
        "applications.subPage.ctaTitle": "¿Listo para Avanzar en su Investigación?",
        "applications.subPage.keyApplications": "Aplicaciones Clave",
        "contact.faq.cta": "¿Aún tiene preguntas?",
        "contact.faq.ctaButton": "Contactar Soporte",
        "contact.form.badge": "Enviar un Mensaje",
        "contact.hero.badge": "Póngase en Contacto",
        "contact.hero.description": "¿Tiene alguna pregunta sobre nuestros instrumentos? ¿Necesita soporte técnico? Estamos aquí para ayudarle a avanzar en su investigación.",
        "contact.hero.title": "Comencemos una Conversación",
        "contact.methods.location.description": "Visite nuestro laboratorio e instalaciones",
        "contact.methods.location.title": "Visítenos",
        "contact.partners.badge": "Red Mundial",
        "home.company.learn_more": "Conozca Más Sobre Nuestra Experiencia",
        "home.company.solutions_title": "Nuestras Soluciones Integrales",
        "news.categories.all": "Todas las Publicaciones",
        "news.categories.applications": "Notas de Aplicación",
        "news.categories.company": "Empresa",
        "news.categories.events": "Eventos",
        "news.categories.newsletters": "Boletines",
        "news.categories.scientific": "Artículos Científicos",
        "news.empty.clear": "Borrar Filtros",
        "news.empty.description": "Ningún artículo coincide con sus criterios de búsqueda.",
        "news.empty.title": "No se encontraron artículos",
        "news.hero.badge": "Últimas Actualizaciones",
        "news.hero.description": "Manténgase informado sobre las últimas noticias, artículos científicos, notas de aplicación y eventos de Teclis Scientific.",
        "news.hero.title": "Noticias e Información",
        "news.newsletter.badge": "Manténgase Conectado",
        "news.newsletter.description": "Suscríbase a nuestro boletín para recibir las últimas noticias, actualizaciones de productos e información científica.",
        "news.newsletter.error": "Se produjo un error. Por favor, inténtelo de nuevo.",
        "news.newsletter.invalidEmail": "Por favor, introduzca una dirección de correo electrónico válida.",
        "news.newsletter.networkError": "Error de red. Por favor, inténtelo de nuevo.",
        "news.newsletter.placeholder": "Introduzca su dirección de correo electrónico",
        "news.newsletter.privacy": "Respetamos su privacidad. Puede darse de baja en cualquier momento.",
        "news.newsletter.sending": "Enviando...",
        "news.newsletter.subscribe": "Suscribirse",
        "news.newsletter.success": "Suscripción exitosa. ¡Gracias!",
        "news.newsletter.title": "No Se Pierda Ninguna Actualización",
        "news.results": "{count} artículos encontrados",
        "news.search.placeholder": "Buscar artículos..."
    },
    # Add similar for French and other languages...
}

print("Script would add missing keys, but due to complexity, ")
print("it's better to handle this through direct file edits...")
print("\nFor now, checking German file structure...")

# Check German file
with open(messages_dir / "de.json", encoding="utf-8") as f:
    de_data = json.load(f)
    print(f"German file has {len(json.dumps(de_data))} characters")
    print("Contact section exists:", "contact" in de_data)
    if "contact" in de_data:
        print("  - hero:", "hero" in de_data.get("contact", {}))
        print("  - faq:", "faq" in de_data.get("contact", {}))
        if "faq" in de_data.get("contact", {}):
            print("    - cta:", "cta" in de_data["contact"]["faq"])

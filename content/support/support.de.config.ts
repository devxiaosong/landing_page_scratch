import type { SupportPageConfig } from "@/lib/types";
import { BASE_URL } from "@/lib/config";

export const supportDeConfig: SupportPageConfig = {
  seo: {
    title: "Support-Center — MassLoader",
    description:
      "Unsere Support-Spezialisten helfen Ihnen gerne weiter. Finden Sie Antworten auf häufig gestellte Fragen zu Produkt, Lizenz, Zahlung und mehr.",
    canonical: `${BASE_URL}/de/support`,
    languages: {
      en: `${BASE_URL}/support/`,
      de: `${BASE_URL}/de/support`,
      "x-default": `${BASE_URL}/support/`,
    },
  },
  content: {
    title: "Willkommen im",
    titleHighlight: "Support-Center",
    subtitle: "Unsere Support-Spezialisten helfen Ihnen gerne weiter.",
    searchPlaceholder: "Stichwörter suchen...",
  },
  categories: [
    {
      title: "Produkt",
      icon: "/images/support/product.svg",
      items: [
        {
          question: "Die Software funktioniert nicht?",
          answer:
            "Bitte geben Sie die Bestellnummer an und teilen Sie uns die Details des Problems mit, einschließlich Fehlermeldungen und Produkt-Screenshots. Unsere Techniker werden Ihnen helfen.",
        },
        {
          question: "Die Software kann keine Videos/Audios herunterladen?",
          answer: [
            "Stellen Sie sicher, dass die Netzwerkverbindung ordnungsgemäß funktioniert.",
            "Überprüfen Sie, ob die kopierte URL der Online-Videoadresse korrekt ist.",
            "Stellen Sie sicher, dass das Video nicht geschützt ist und die Website von unserer Software unterstützt wird.",
            "Klicken Sie auf das Menü, gehen Sie zu Hilfe > Protokollordner öffnen, komprimieren Sie den Log-Ordner und senden Sie ihn an uns.",
          ],
        },
        {
          question: "Wie lade ich Videos/Audios ohne Konvertierung herunter?",
          answer:
            'Bitte aktualisieren Sie auf die neueste Version und wählen Sie den Download-Tab in der Hauptoberfläche, dann wählen Sie das Ausgabeformat "Originalvideo/Originalaudio" in der oberen rechten Ecke.',
        },
      ],
    },
    {
      title: "Lizenz",
      icon: "/images/support/license.svg",
      items: [
        {
          question: "Was ist der Unterschied zwischen der Test- und der Vollversion?",
          answer:
            "Die Testversion ist in einigen Funktionen eingeschränkt. Nach dem Kauf des Programms erhalten Sie den Lizenzcode, der die Einschränkungen aufhebt.",
        },
        {
          question: "Kann ich eine Lizenz auf mehreren Computern verwenden?",
          answer:
            "Eine Lizenz unserer Software kann nur auf einem PC/Mac verwendet werden. Wenn Sie sie auf mehreren Computern nutzen möchten, können Sie eine Familienlizenz erwerben, die 2-5 PCs/2-5 Macs unterstützt. Bei gewerblicher Nutzung kontaktieren Sie uns bitte.",
        },
        {
          question: "Was passiert, wenn ich meinen Lizenzcode verloren habe?",
          answer:
            "Wenn Sie Ihren Lizenzcode verloren haben, machen Sie sich keine Sorgen. Sie können Ihre ursprüngliche Lizenz auf dieser Seite selbst anfordern.",
        },
      ],
    },
    {
      title: "Zahlung & Erstattung",
      icon: "/images/support/payment.svg",
      items: [
        {
          question: "Welche Zahlungsmethoden akzeptieren Sie?",
          answer: "Wir akzeptieren Kreditkartenzahlungen.",
        },
        {
          question: "Ist es sicher, Produkte über Ihre Website zu kaufen?",
          answer:
            "Ja, es ist 100% sicher. Die von uns verwendete Zahlungsplattform ist Stripe, eines der vertrauenswürdigsten E-Commerce-Unternehmen der Welt. Ihre privaten Daten wie Kreditkartennummer und Adresse werden ohne Ihre ausdrückliche Genehmigung niemals weitergegeben.",
        },
        {
          question: "Wie lautet Ihre Rückgaberichtlinie?",
          answer:
            "MassLoader bietet eine 30-tägige Geld-zurück-Garantie. Wenn Ihre Software nicht ordnungsgemäß funktioniert oder während der Ausführung Fehler auftreten und das Problem nicht innerhalb einer akzeptablen Zeit gelöst werden kann, bieten wir eine 30-tägige Geld-zurück-Garantie.",
        },
      ],
    },
    {
      title: "Weitere FAQ",
      icon: "/images/support/other.svg",
      items: [
        {
          question: "Wie ändere ich das automatische Abonnement?",
          answer:
            "Bitte geben Sie Ihre Bestellinformationen an. Sobald wir diese erhalten, werden wir Ihr Abonnement auf manuell umstellen.",
        },
      ],
    },
  ],
  contactCard: {
    title: "Noch Fragen?",
    description: "Senden Sie uns Ihre Fragen. Einer unserer Spezialisten wird sich bald bei Ihnen melden.",
    buttonText: "Kontaktieren",
  },
};

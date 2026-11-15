import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_5XujE62FqaaAF1zDqqKMVBa1h1DWChA",
  authDomain: "linknovasolutions.firebaseapp.com",
  projectId: "linknovasolutions",
  storageBucket: "linknovasolutions.firebasestorage.app",
  messagingSenderId: "1072709568838",
  appId: "1:1072709568838:web:b9f70dad5a3016c09bfd47",
  measurementId: "G-T2MHXNEC95"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Firestore khali ho to website ye default values dikhati hai
export const DEFAULT_SETTINGS = {
  siteName: "LinkNova Solutions",
  logoImage: "https://i.ibb.co/SDKwDfzM/IMG-20260907-WA7732.jpg",
  heroBadge: "DIGITAL MARKETING SERVICES",
  heroTitle: "LinkNova Solutions",
  heroSubtitle: "Digital Marketing • LinkedIn Marketing • Account Buy & Sell Services",
  heroText: "LinkedIn-focused services for professionals and businesses. We help clients with account-related requirements, LinkedIn marketing support, lead-generation services and other digital solutions.",
  heroImage: "https://i.ibb.co/NnLypX5f/801667923-122096902743476362-6834188805972860888-n.jpg",
  heroCardTitle: "Linkedin Accounts Store",
  heroCardSub: "By Arslan Zafar",
  servicesTitle: "What We Offer",
  servicesText: "Professional services presented clearly so clients can quickly find the solution they need.",
  aboutTitle: "Meet Link Nova Solutions",
  aboutText: "A professional digital-services brand focused on LinkedIn marketing, lead generation and account-related assistance.",
  founderName: "Arslan Zafar Iqbal",
  founderRole: "Founder and CEO at Link Nova Solutions • LinkedIn Specialist • Digital Marketing",
  founderImage: "https://i.ibb.co/twyzrmhG/FB-IMG-1784466013222.jpg",
  approachTitle: "Our Approach",
  approach1: "Link Nova Solutions is built around professional communication, transparent service information and client-focused digital solutions.",
  approach2: "Our services include LinkedIn marketing, lead generation, research, data services and account-related assistance. Requirements can vary by account, location, age and availability, so every listing should be checked before purchase.",
  approach3: "For recovery and verification matters, we provide assistance with legitimate platform procedures and do not guarantee approval by LinkedIn or any other platform.",
  purchaseTitle: "Available Accounts",
  purchaseText: "Choose an account and contact us on WhatsApp for purchase details.",
  whatsapp: "923287654172",
  email: "arslanzafariqbal025@gmail.com",
  location: "Pakistan • Worldwide",
  contactTitle: "Let's Talk",
  contactText: "Send your name and requirements. We can connect with you about available services and listings.",
  contactTagline: "Digital Marketing • LinkedIn Marketing • Linkedin All Plans • Account Services",
  linkedin: "https://www.linkedin.com/in/arslan-zafar-iqbal-24a544435",
  facebook: "https://www.facebook.com/share/18BuaDq9xN/",
  instagram: "https://www.instagram.com/arslanzafariqbal025",
  waChannel: "https://whatsapp.com/channel/0029Vb7jfbA1CYoV5w9kWi2b",
  telegram: "https://t.me/arslanzafar009",
  footerText: "© 2026 Link Nova Solutions • Powered by Arslan Zafar"
};

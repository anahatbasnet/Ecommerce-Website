import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Electronics from 'pages/Electronics'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          learn: 'ABOUT',
          category: 'CATEGORY',
          mensclothing: "MEN'S CLOTHING",
          jwelry: 'JWELRY',
          Electronics: 'ELECTRONICS',
          des1: 'Shine bright like diamonds by shopping in Bazaar',
          des2: 'Get the best tech Products Here in Bazaar',
          des3: 'Make a style statement with Bazaar!!!',
          btn: 'Shop Now',
          menu: 'MENU',
          home: 'Home',
          wishlist: 'Wishlist',
          cart: 'Cart',
          login: 'Log in',
          company: 'COMPANY',
          strategicpartner: 'Strategic Partner',
          privacypolicy: 'Privacy Policy',
          tandc: 'Terms and Conditions',
          contacts: 'CONTACT',
          contactsales: 'Contact Sales',
          phone: '+95 555 223 4545',
          ts: 'TECH SUPPORT',
          ts1: 'Tech Support',
          help: 'help',
          bazar: 'Bazaar',
          logout: 'Logout',
        },
      },
      np: {
        translation: {
          learn: 'अबाउट',
          category: 'कैटेगोरी',
          mensclothing: 'पुरुषको पहिरान',
          jwelry: 'गर गहना',
          Electronics: 'इलेक्ट्रोनिक्स',
          des1: 'चमक होस त हिरा जास्तो !',
          des2: 'यहाँ बजारमा उत्कृष्ट प्राविधिक उत्पादनहरू पाउनुहोस्',
          des3: 'बजार संग स्टाइलिश हुनुहोस् !!!',
          btn: 'किन्मेल गर्नुहोस्',
          menu: 'मेनु',
          home: 'होम',
          wishlist: 'इच्छा-सूची',
          cart: 'कार्ट',
          login: 'लग - इन',
          company: 'कम्पनी',
          strategicpartner: 'रणनीतिक साझेदारहरू',
          privacypolicy: 'गोपनीयता नीति',
          tandc: 'नियम र सर्तहरू',
          contacts: 'सम्पर्क ',
          contactsales: 'सम्पर्क बिक्री',
          phone: '+९५ ५५५ २२३ ४५४५',
          ts: 'प्राविधिक समर्थन',
          ts1: 'प्राविधिक समर्थन',
          help: 'मद्दत',
          bazar: 'बजार',
          logout: 'लगआउट',
        },
      },
    },
  })

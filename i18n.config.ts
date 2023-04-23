import en  from './locales/en.json';
import fr  from './locales/fr.json';
import ar  from './locales/ar.json';

export default defineI18nConfig(nuxt => ({
    legacy: false,
    locale: 'en',
    messages: { en, fr, ar }
}))
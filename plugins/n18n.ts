import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';


export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'fr',
        messages: {
            en,
            fr,
            ar
        },
    });

    vueApp.use(i18n);
});
/** Vuetify Plugin */
import type { UserVuetifyPreset } from 'vuetify';
import type { VuetifyParsedTheme } from 'vuetify/types/services/theme';
import Vuetify from 'vuetify/lib/framework';
import Vue from 'vue';

/*
// Locale
import i18n from './i18n';
import { en, ja } from 'vuetify/lib/locale';
*/

import '@mdi/font/css/materialdesignicons.css';
import { loadFonts } from './webfontloader';

loadFonts();

export default createVuetify({
  icons: {
    iconfont: 'mdi',
  },

  theme: {
    themes: {
      dark: {
          // primary: '#FFDD93',
          primary: '#FFC045',
          background: '#222831',
          error: '#d63031',
          info: '#0984e3',
          secondary: '#fdcb6e',
          success: '#00cec9',
          surface: '#6c5ce7',
          warning: '#FFDD93',
          text: '#FFD369',
      },
      light: {
        // primary: '#FFDD93',
        primary: '#FFC045',
        background: '#222831',
        error: '#d63031',
        info: '#0984e3',
        secondary: '#fdcb6e',
        success: '#00cec9',
        surface: '#6c5ce7',
        warning: '#FFDD93',
        text: '#FFD369',
    },
    },
    dark: true,
    // options: {
    //   themeCache: {
    //     // https://vuetifyjs.com/features/theme/#section-30ad30e330c330b730e5
    //     get: (key: VuetifyParsedTheme) => {
    //       return localStorage.getItem(JSON.stringify(key));
    //     },
    //     set: (key: VuetifyParsedTheme, value: string) => {
    //       localStorage.setItem(JSON.stringify(key), value);
    //     },
    //   },
    //   customProperties: true,
    // },
  },
  
});

/** Create Vuetify */
export function createVuetify(options: UserVuetifyPreset): Vuetify {
  Vue.use(Vuetify);
  return new Vuetify(options);
}

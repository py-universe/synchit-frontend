<template>
  <v-app>
    <v-app-bar app color="dominant--text">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer />
      <v-btn icon color="dominant" @click="themeDark = !themeDark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-progress-linear
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="dominant"
      />
    </v-app-bar>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>

    <v-bottom-navigation app :value="value" shift grow>
      <v-btn color="dominant--text">
        <span>Home</span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>

      <v-btn color="dominant--text">
        <span>New Room</span>
        <v-icon>mdi-forum-plus</v-icon>
      </v-btn>

      <v-btn color="dominant--text">
        <span>Account</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <!-- <v-btn color="primary--text">
        <span>Notifications</span>
        <v-icon>mdi-bell-badge</v-icon>
      </v-btn> -->
    </v-bottom-navigation>

    <v-overlay v-show="loading" z-index="999">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-snackbar
      v-model="snackbar"
      app
      timeout="5000"
      transition="scroll-y-transition"
    >
      {{ snackbarText }}
      <template #action="{ attrs }">
        <v-btn color="dominant" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <teleport to="head">
      <meta
        name="theme-color"
        :content="vuetify.theme.currentTheme.primary?.toString()"
      />
      <link
        rel="icon"
        :href="require('@/assets/vuetify.svg')"
        type="image/svg+xml"
      />
    </teleport>
  </v-app>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type SetupContext,
} from 'vue';
import { useRoute, useRouter } from 'vue-router/composables';
import { useStore } from '@logue/vue2-helpers/vuex';
import { useVuetify } from '@logue/vue2-helpers/vuetify';

/** App */
export default defineComponent({
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup: (_props, _context: SetupContext) => {
    /** Vuex */
    const store = useStore();
    /** Router */
    const router = useRouter();
    /** Router */
    const route = useRoute();
    /** Vuetify */
    const vuetify = useVuetify();

    /** Title */
    const title: Ref<string> = ref(
      import.meta.env.VITE_APP_TITLE || 'Vite APP'
    );
    /** Drawer menu visibility */
    const drawer: Ref<boolean> = ref(false);
    /** Snackbar visibility */
    const snackbar: Ref<boolean> = ref(false);
    /** current page name */
    const name: Ref<string | null | undefined> = ref(route?.name);
    const value: Ref<Number> = ref(1);
    /** Snackbar text */
    const snackbarText: Ref<string> = computed({
      get: () => store.getters.message,
      set: v => store.dispatch('setMessage', v),
    });

    /** progress percentage */
    const progress: Ref<number> = computed({
      get: () => store.getters.progress,
      set: v => store.dispatch('setProgress', v),
    });

    /** loading overlay visibility */
    const loading: Ref<boolean> = computed({
      get: () => store.getters.loading,
      set: v => store.dispatch('setLoading', v),
    });

    /** Toggle Theme Dark/Light mode */
    const themeDark: Ref<boolean> = computed({
      get: () => store.getters['ConfigModule/themeDark'],
      set: v => store.dispatch('ConfigModule/setThemeDark', v),
    });

    /** Error Message */
    const error: ComputedRef<boolean> = computed(() => store.getters.error);

    /** Modify snackbar text */
    watch(snackbarText, () => (snackbar.value = true));

    /** When route change, hide snackbar */
    watch(name, () => (snackbar.value = false));

    /** When loading */
    watch(
      loading,
      isloading => (document.body.style.cursor = isloading ? 'wait' : 'auto')
    );

    /** When error has occurred */
    watch(error, () => router.push({ name: 'Error' }));

    /** Toggle Dark Mode */
    watch(themeDark, current => (vuetify.theme.dark = current));

    /** Reset SnackbarText when snackbar closed. */
    watch(snackbar, visibility => {
      if (!visibility) {
        snackbarText.value = '';
      }
    });

    /** Run once. */
    onMounted(() => {
      document.title = title.value;
      loading.value = false;
    });

    return {
      vuetify,
      title,
      drawer,
      snackbar,
      snackbarText,
      progress,
      loading,
      error,
      themeDark,
      value,
    };
  },
});
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

a {
  text-decoration: none !important;
}
</style>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h2 class="font-weight-bold">Login or Signup</h2>
    </v-card-title>

    <v-tabs
      v-model="state.tab"
      background-color="transparent"
      class="primary--text my-10"
      grow
    >
      <v-tab>Login</v-tab>
      <v-tab>Signup</v-tab>
    </v-tabs>

    <v-tabs-items v-model="state.tab">
      <v-tab-item class="text-center justify-center py-6">
        <LoginForm />
      </v-tab-item>
      <v-tab-item class="text-center justify-center py-6">
        <SignupForm />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import LoginForm from '@/components/Auth/LoginForm.vue';
import SignupForm from '@/components/Auth/SignupForm.vue';

export default defineComponent({
  components: {
    LoginForm,
    SignupForm,
  },

  props: {},

  setup(props) {
    const state = reactive({
      tab: null,
    });

    return {
      state,
    };
  },
});
</script>

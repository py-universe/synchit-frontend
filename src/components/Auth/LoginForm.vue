<template>
  <v-form
    ref="form"
    v-model="state.valid"
    lazy-validation
    class="text-center justify-center px-10"
  >
    <v-text-field
      v-model="state.email"
      :rules="state.emailRules"
      label="E-mail"
      required
      outlined
      clearable
      color="primary"
      dense
    ></v-text-field>

    <v-text-field
      v-model="state.passowrd"
      :append-icon="state.show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="state.show ? 'text' : 'password'"
      :rules="state.passwordRules"
      label="Password"
      required
      outlined
      clearable
      color="primary"
      dense
      @click:append="state.show = !state.show"
    ></v-text-field>

    <v-btn :disabled="!state.valid" class="primary btn-block" @click="login">
      submit
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '@logue/vue2-helpers/vuex';
import { apiService } from '@/utils/apiService';

export default defineComponent({
  components: {},
  props: {},

  setup(props) {
    /** Vuex */
    const store = useStore();

    const state = reactive({
      show: false,
      valid: false,
      passowrd: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Min 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    });

    const login = () => {
      const userLoginUrl = `api/v1/auth/login`;
      const method = 'POST';

      const payload = {
        email: state.email,
        password: state.email,
      };

      apiService(userLoginUrl, method, payload)
        .then(data => {
          console.log('User Logged In: ', data);

          // Update authentication state
          store.dispatch('user/loginAction', data);
        })
        .catch(error => {
          console.log(`User not logged in due to: ${error}`);
        });
    };

    return {
      state,
      login,
    };
  },
});
</script>

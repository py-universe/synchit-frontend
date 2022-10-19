<template>
  <v-form
    ref="form"
    v-model="state.valid"
    lazy-validation
    class="text-center justify-center px-10"
  >
    <!-- // eslint-disable-next-line vue/html-self-closing -->
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

    <!-- // eslint-disable-next-line vue/html-self-closing -->
    <v-text-field
      v-model="state.password"
      :append-icon="state.show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="state.show ? 'text' : 'password'"
      :rules="state.passwordRules"
      label="Password-1"
      required
      outlined
      clearable
      color="primary"
      dense
      @click:append="state.show = !state.show"
    ></v-text-field>

    <!-- // eslint-disable-next-line vue/html-self-closing -->
    <v-text-field
      v-model="state.username"
      :rules="state.usernameRules"
      label="Username"
      required
      outlined
      clearable
      color="primary"
      dense
    ></v-text-field>

    <v-btn
      block
      :disabled="!state.valid"
      class="primary btn-block"
      @click="createUser"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { apiService } from '@/utils/apiService';
import { useStore } from '@logue/vue2-helpers/vuex';

export default defineComponent({
  components: {},

  props: {},

  setup(props) {
    const store = useStore();

    const state = reactive({
      show: false,
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Min 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      username: '',
      usernameRules: [v => !!v || 'Username is required'],
    });

    const createUser = () => {
      const createUserUrl = `api/v1/auth/signup`;
      const method = 'POST';

      const payload = {
        email: state.email,
        password: state.email,
        display_name: state.username,
      };

      apiService(createUserUrl, method, payload)
        .then(data => {
          console.log('User Successfully created: ', data);

          // Update authentication state
          store.dispatch('user/loginAction', data);
        })
        .catch(error => {
          console.log(`User not created due to: ${error}`);
        });
    };

    return {
      state,
      createUser,
    };
  },
});
</script>

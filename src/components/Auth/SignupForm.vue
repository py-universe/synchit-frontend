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
      :counter="6"
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

    <v-text-field
      v-model="state.passowrd"
      :counter="6"
      :append-icon="state.show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="state.show ? 'text' : 'password'"
      :rules="state.passwordRules"
      label="Password-2"
      required
      outlined
      clearable
      color="primary"
      dense
      @click:append="state.show = !state.show"
    ></v-text-field>

    <v-btn
      :disabled="!state.valid"
      class="primary btn-block"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';


  export default defineComponent({
    components: {

    },

    props: {

    },

    setup(props) {

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

      return {
        state
      };
    }

  });
</script>

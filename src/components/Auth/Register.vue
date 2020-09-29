<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="pink lighten-4"
            dark
            flat
          >
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                color="cyan"
                required
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>

              <v-text-field
                v-model.lazy="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                color="cyan"
                :counter="6"
                required
                :error-messages="passwordErrors"
                @change="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
              <v-text-field
                v-model.lazy="confirmPassword"
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-repeat"
                type="password"
                color="cyan"
                :counter="6"
                required
                :error-messages="confirmPasswordErrors"
                @change="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="pink lighten-4" dark @click="submit" :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],

  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email,
    },
  },

  data: () => ({
    password: '',
    confirmPassword: '',
    email: '',
    valid: false,
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.minLength) errors.push('Password must be equal or more than 6 characters long');
      if (!this.$v.password.required) errors.push('Password is required');
      return errors;
    },
    confirmPasswordErrors() {
      console.log('this.$v.confirmPassword.$model', this.$v.confirmPassword.$model);
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      if (!this.$v.confirmPassword.minLength) errors.push('Password must be equal or more than 6 characters long');
      if (!this.$v.confirmPassword.required) errors.push('Password is required');
      if (this.$v.confirmPassword.$model !== this.$v.password.$model) errors.push('Passwords do not match');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) errors.push('Must be valid e-mail');
      if (!this.$v.email.required) errors.push('E-mail is required');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
  },
};
</script>

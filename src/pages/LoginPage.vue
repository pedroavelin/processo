<template>
  <v-container fluid class="d-flex justify-center align-center bg-indigo" style="height: 100vh;">
    <v-sheet rounded>
      <v-card elevation="10" class="mx-auto px-6 py-8" width="350">
        <h2 class="text-h6 mb-4">Entrar</h2>

      <div class="text-body-2 mb-3 text-center">Seja bem vindo. Preencha os campos abaixo para ter acesso aos seus processos</div>
        <v-form @submit.prevent="login()">

          <v-text-field
            v-model="user.email"
            class="mb-2"
            label="Seu Email"
            clearable
            placeholder="Digite o seu email"
            density="compact"
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            label="Palavra passe"
            placeholder="Digite a sua palavra passe"
            density="compact"
            clearable
          ></v-text-field>
          <br/>
          <v-btn
            color="primary"
            size="large"
            type="submit"
            variant="flat"
            block>
            Entrar
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import https from '@/services/https.js';
import { reactive } from "vue";
import { useAuth } from '@/stores/auth.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = useAuth();
const user = reactive({
  email: 'filipe@gmail.com',
  password: '0043sdjasd'
})

  async function login(){
    try {
      const { data } = await https.post('/auth/login', user);
      console.log(data);
      auth.setToken(data.access_token);
      auth.setUser(data.user)

      router.push({ name: 'processos' });
    } catch (error) {
      console.log(error?.response?.data);
    }
  }
</script>

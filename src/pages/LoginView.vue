<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-sheet rounded>
      <v-card class="mx-auto px-6 py-8" width="350">
        <v-form v-model="form" @submit.prevent="onSubmit">
          
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Seu Email"
            clearable
            placeholder="Digite o seu email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="Palavra passe"
            placeholder="Digite a sua palavra passe"
            clearable
          ></v-text-field>
<br>
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="flat"
            block
            @click="login()"
          >
            Entrar
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = ref(false);
const email = ref(null);
const password = ref(null);
const loading = ref(false);

const onSubmit = () => {
  if (!form.value) return;

  loading.value = true;
  setTimeout(() =>{
    loading.value= false;
    router.push("/home")
  }, 2000);
};

const required = (v) => !!v || "Campo obrigatório";
</script>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppBar from '@/components/AppBar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import { onMounted } from 'vue';
import { useSeccaoStore } from '@/stores/seccao';
import { useAuth } from '@/stores/auth.js'

const seccaoStore = useSeccaoStore();

const auth = useAuth();
// Buscar os dados do utilizador ao carregar o componente
onMounted(() => {
  seccaoStore.listarSeccao();
});

</script>

<template>
  <AppBar />
  <NavigationDrawer />
  <br>
  <br>
  <br>
  <div v-if="auth.isAuthenticated" class="mt-5 mx-4">
    <h1 v-if="seccaoStore.carregando">Carregando...</h1>
    <h1 v-else-if="seccaoStore.erro">{{ seccaoStore.erro }}</h1>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Secção
          </th>
          <th class="text-left">
            Número
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in seccaoStore.seccao" :key="index">
          <td>{{ item.nome }}</td>
          <td>{{ item.numero }}</td>
        </tr>
      </tbody>
    </v-table>

    <!-- <p v-else>Usuário não autenticado</p> -->
  </div>
  <AppFooter />
</template>

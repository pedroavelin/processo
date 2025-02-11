<template>
  <v-footer v-if="route.name !== '/'" height="40" app color="">
    <v-badge dot color="success">
      <v-icon icon="mdi-account" class="mx-1"></v-icon>
    </v-badge>
    
    <a class="text-decoration-none text-caption mx-3" href="#!" rel="noopener noreferrer" color="">
      <span class="">
        Utilizador: Pedro Epalanga - CD
      </span>
      </a>
    <div
      class="text-caption text-disabled" style="position: absolute; right: 16px;">
      <span>&copy; 2024-{{ (new Date()).getFullYear() }}</span> <span class="d-none d-sm-inline-block">15ª - Cacuaco</span>
      —
      <a
        class="text-decoration-none on-surfaces"
        href="#!"
        rel="noopener noreferrer"
        target="_blank"
      >
        Documentação
      </a>
    </div>
  </v-footer>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

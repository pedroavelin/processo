<template>
  <v-footer v-if="route.name !== '/'" height="40" app color="blue-darken-4">
    <v-badge dot color="success">
      <v-icon icon="mdi-account" class="mx-1"></v-icon>
    </v-badge>
    
    <a class="text-decoration-none text-caption mx-3" href="#!" rel="noopener noreferrer" color="white">
      <span class="text-white">
        Utilizador: Pedro Epalanga - CD
      </span>
      </a>
    <div
      class="text-caption text-disabled text-white" style="position: absolute; right: 16px;">
      <span class="text-white">&copy; 2024-{{ (new Date()).getFullYear() }}</span> <span class="d-none d-sm-inline-block text-white">15ª - Cacuaco</span>
      —
      <a
        class="text-decoration-none on-surfaces text-white"
        href="#!"
        rel="noopener noreferrer"
        target="_blank"
      >
        Planeta
      </a>
    </div>
  </v-footer>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

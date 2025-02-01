<template>
  <v-footer v-if="route.name !== '/'" height="40" app color="primary">
    <v-badge dot color="success">
      <v-icon icon="mdi-account" class="mx-1"></v-icon>
    </v-badge>
    
    <a class="text-decoration-none on-surface text-caption mx-3" href="#!" rel="noopener noreferrer">
       Utilizador: Pedro Epalanga - CD
      </a>
    <div
      class="text-caption text-disabled" style="position: absolute; right: 16px;">
      &copy; 2024-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">15ª - Cacuaco</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="#!"
        rel="noopener noreferrer"
        target="_blank"
      >
        Pedro A. Epalanga
      </a>
    </div>
  </v-footer>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

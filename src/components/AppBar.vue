<script setup lang="ts">
import PesquisarProcesso from '@/components/pesquisarProcesso.vue';
import { useDrawerStore } from '@/stores/useDrawerStore';

const drawerStore  = useDrawerStore();
</script>

<template>
 <v-app-bar color="" density="compact" elevation="10">
    <v-app-bar-nav-icon @click="drawerStore.toggleDrawer()"></v-app-bar-nav-icon>
    <v-app-bar-title>PLANETA</v-app-bar-title>

    <PesquisarProcesso/>
    <v-spacer></v-spacer>

    <v-sheet class="" max-height="210">
      <div class="row">
        <div class="text-center">
          <div class="bg-success btn-add-processo" @click="addProceso()">
            <v-btn elevation="0" density="compact" class="text-caption" rounded="0">Novo Processo</v-btn>
          </div>
          <div>
            <v-btn density="compact" class="text-caption border-0" color="red" rounded="0" variant="flat">Preso
              (100)</v-btn>
            <v-btn density="compact" class="text-caption border-0" color="yellow-darken-4" variant="flat"
              rounded="0">Solto (999)</v-btn>
          </div>
        </div>
      </div>
    </v-sheet>
  </v-app-bar>
</template>
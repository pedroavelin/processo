<template>
  <v-app-bar color="" density="compact" elevation="10">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>PLANETA</v-app-bar-title>

    <v-combobox prepend-inner-icon="mdi-magnify" v-model="value" :items="['101', '312', '413', '114', '65', '216']" density="compact" label="Pesquisar processo ..." class="mt-5 text-caption"></v-combobox>

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
    <!-- Avatar com menu -->
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-img src="https://picsum.photos/1920/1080?random"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" height="80" cover class="pt-2">
      <v-list>
        <v-list-item
          prepend-avatar="https://media.licdn.com/dms/image/C4D03AQF7jP4O_1Dh1Q/profile-displayphoto-shrink_400_400/0/1630611358440?e=1718236800&v=beta&t=aQkK_GYU9_nrDrrO3Adzq2_E1YI0Tz7rngwdHLJG900"
          subtitle="Web development" title="Pedro Epalanga">
        </v-list-item>
      </v-list>
    </v-img>

    <v-divider></v-divider>

    <v-list :lines="false" density="compact" nav>
      <Routerlink v-for="(item, i) in items" :key="i">
        <v-list-item :value="item" color="primary" :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title :textContent="item.text">Liquidação de pena</v-list-item-title>
        </v-list-item>
      </Routerlink>
    </v-list>
  </v-navigation-drawer>
  <v-main class="style-1">
    <v-img class="img-background" cover gradient="to top right, rgba(0,100,201,.1),  rgba(125,132,972,.1)"
      src="@/assets/bagImg.jpg"></v-img>
    <div class="content-container-process">
      <ListProcess />
    </div>
  </v-main>

  <!-- Modal para Adicionar Processo -->
  <v-dialog transition="dialog-top-transition" v-model="modalAddProcesso" max-width="756px" persistent>
    <v-card  color="border-0" subtitle="Preencha os campos abaixo para adicionar um novo processo"
      prepend-icon="mdi-folder-open">
      <v-card-text>
        <!-- Lista dinâmica -->
        <v-row class="mb-0" no-gutters>
          <v-col cols="4">
            <v-card elevation="0">
              <v-text-field class="text-caption" label="Número do processo" density="compact" />
              <v-text-field class="text-caption" label="Ano" density="compact" />
              <v-textarea clear-icon="mdi-close-circle" label="Crime" rows="6" clearable></v-textarea>
            </v-card>
          </v-col>

          <v-col cols="8">
            <v-list>
              <div class="d-flex justify-space-between">
                <div class=""><span class="text-caption mx-4">Arguido(s)</span></div>
                <div class=""><span class="text-caption"> Adicionar arguido </span></div>
              </div>
              <v-card class="overflow-y-auto text-caption" elevation="0" max-height="275">
                <div v-if="mostrarListaDeArguidos">
                  <v-list-item class="p-0 mb-0" v-for="i in 2" :key="i">
                    <v-list-item-title class="border">
                      <v-row no-gutters class="mt-1">
                        <v-col cols="11">
                          <v-text-field class="text-caption mx-1" label="Nome" density="compact" />
                        </v-col>
                        <v-col cols="1">
                          <div class="mt-1">
                            <v-btn density="compact" variant="elevated" class="text-caption mx-1" color="red"
                              icon="mdi-delete"></v-btn>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row no-gutters class="mx-1">
                        <v-col cols="4">
                          <v-text-field class="text-caption mx-1" label="Julgamento" density="compact" />
                        </v-col>
                        <v-col cols="4">
                          <v-text-field class="text-caption mx-1" label="Estado" density="compact" />
                        </v-col>
                        <v-col cols="4">
                          <v-text-field class="text-caption" label="Pena" density="compact" />
                        </v-col>
                        <v-textarea clear-icon="mdi-close-circle" label="Descrição" rows="1" clearable></v-textarea>
                      </v-row>
                    </v-list-item-title>
                  </v-list-item>
                </div>
                <div v-else>
                  <v-card color="" height="300">
                    <div class="text-center">
                      <div class="mt-5">
                        <span class="text-h6">Nenhum arguido adicionado ao <br> processo</span>
                      </div>
                    </div>
                  </v-card>
                </div>
              </v-card>
            </v-list>
          </v-col>
        </v-row>
        <!-- Lista dinâmica -->
      </v-card-text>
      <v-divider></v-divider>
      <div class="d-flex justify-end">
        <div class="">
          <v-btn class="text-caption" text="Fechar" variant="flat" color="red" density="compact" rounded="0"
            @click="modalAddProcesso = false"></v-btn>
        </div>
        <div class="">
          <v-btn class="text-caption" text="Salvar" variant="flat" color="success" density="compact" rounded="0"
            @click="modalAddProcesso = false"></v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
  <!-- Modal para Adicionar Processo -->
  <SpeedDial />
  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import SpeedDial from "@/components/SpeedDial.vue";
import AppFooter from "@/components/AppFooter.vue";
import ListProcess from "@/components/ListProcess.vue";

const mostrarListaDeArguidos = ref(true);

const drawer = ref(null)
const modalAddProcesso = ref(false);

const addProceso = () => {
  modalAddProcesso.value = true;
}

const items = [
  { text: "Processo", icon: "mdi-folder", to: "/home" },
  { text: "Documentos", icon: "mdi-folder", to: "/documento" },
  { text: "Auditoria", icon: "mdi-account-multiple", to: "/auditoria"},
  { text: "Utilizadores", icon: "mdi-account-multiple", to: "/utilizador"},
  { text: "Permissões", icon: "mdi-account-multiple", to: "/permissoes" },
  { text: "Sobre", icon: "mdi-account-multiple", to: "/sobre"},
];
</script>

<style>
.btn-add-processo {
  cursor: pointer;
}

.img-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-container-process {
  position: relative;
  z-index: 1;
  color: white;
}
</style>

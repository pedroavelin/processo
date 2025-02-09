<template>
  <v-app-bar color="blue-darken-4" density="compact" elevation="10">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>PLANETA</v-app-bar-title>

    <v-combobox prepend-inner-icon="mdi-magnify" v-model="value" :items="['101', '312', '413', '114', '65', '216']"
      density="compact" label="Pesquisar processo ..." class="mt-5 text-caption"></v-combobox>

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
    <!-- <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar image="@/assets/user.png"></v-avatar>
        </v-btn>
      </template>

<v-card min-width="300">
  <v-list>
    <v-list-item prepend-avatar="@/assets/user.png" subtitle="Escrivã de direito" title="Pedro Epalanga">
    </v-list-item>
  </v-list>
  <v-divider></v-divider>

  <v-list>
    <v-list-item>
      <router-link class="" to="/">Ver meu Perfil</router-link>
    </v-list-item>
  </v-list>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn color="primary" variant="text" to="/">Terminar sessão</v-btn>
  </v-card-actions>
</v-card>
</v-menu> -->
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
    <!-- <v-img class="img-background" cover gradient="to top right, rgba(100,115,201,.3), rgba(25,32,172,.20)"
      src="@/assets/bagImg.jpg"></v-img> -->

    <div class="content-container-process">
      <ListProcess />
    </div>
  </v-main>

  <!-- Modal para Adicionar Processo -->
  <v-dialog transition="dialog-top-transition" v-model="modalAddProcesso" max-width="800px" persistent>
    <v-card title="Novo Processo" color="border-0" subtitle="Preencha os campos abaixo para adicionar um novo processo"
      prepend-icon="mdi-folder-open">
      <v-card-text>

        <v-for>
          <!-- Lista dinâmica -->
          <v-row class="mb-0" no-gutters>
            <v-col cols="4">
              <v-card subtitle="Informações do processo" elevation="0">
                <v-text-field class="text-caption" label="Número do processo" density="compact" />
                <v-text-field class="text-caption" label="Ano" density="compact" />
                <v-text-field class="text-caption" label="Crime" density="compact" />
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-list>
                <div class="d-flex justify-space-between">
                  <div class=""><span class="text-caption">Arguido(s)</span></div>
                  <div class=""><span class="text-caption"> <v-icon icon="mdi-plus"></v-icon> </span></div>
                </div>
                <v-card class="overflow-y-auto text-caption" elevation="0" max-height="270">
                  <v-list-item class="p-0 mt-0 border" v-for="i in 1" :key="i">

                    <v-list-item-title>
                      <v-row no-gutters>
                        <v-col cols="8">
                          <v-text-field class="text-caption mx-1" label="Nome" density="compact" />
                        </v-col>
                        <v-col cols="4">
                          <v-text-field class="text-caption" label="Apelido" density="compact" />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="4">
                          <v-text-field class="text-caption mx-1" label="Julgamento" density="compact" />
                        </v-col>
                        <v-col cols="4">
                          <v-text-field class="text-caption mx-1" label="Estado" density="compact" />
                        </v-col>
                        <v-col cols="4">
                          <v-text-field class="text-caption" label="Pena" density="compact" />
                        </v-col>
                        <v-textarea clear-icon="mdi-close-circle" label="Descrição" model-value="Breve descrição do processso" rows="1" clearable></v-textarea>
                      </v-row>
                    </v-list-item-title>

                    <template v-slot:append>
                      <!-- START - MENU -->
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn @click="updateProcess = true" density="compact" class="text-caption" color="red"
                            icon="mdi-delete" variant="tonal" v-bind="props">
                          </v-btn>
                        </template>
                      </v-menu>
                    </template>
                  </v-list-item>
                </v-card>
              </v-list>
            </v-col>
          </v-row>
          <!-- Lista dinâmica -->
        </v-for>

      </v-card-text>

      <template v-slot:actions>
        <v-btn class="ms-auto text-caption" text="Ocultar" variant="flat" color="red" density="compact" rounded="10"
          @click="modalAddProcesso = false"></v-btn>
      </template>

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

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
const drawer = ref(null)
const modalAddProcesso = ref(false);

const addProceso = () => {
  modalAddProcesso.value = true;
}

const items = [
  { text: "Liquidação de Pena", icon: "mdi-folder", to: "/home" },
  { text: "Mandado de Notificação", icon: "mdi-account-multiple", to: "/about" },
  { text: "Sobre", icon: "mdi-account-multiple", to: "/" },
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

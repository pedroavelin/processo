<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>CC</v-app-bar-title>

    <v-combobox prepend-inner-icon="mdi-magnify" v-model="value" :items="['101', '312', '413', '114', '65', '216']"
      density="compact" label="Pesquisar processo ..." class="mt-5 text-caption"></v-combobox>

    <v-spacer></v-spacer>

    <v-sheet class="" max-height="210">
      <div class="row">
        <div class="text-center">
          <div class="header"><span class="pa-1 text-caption">Adicionar processo</span></div>
          <div>
            <v-btn elevation="1" density="compact" class="text-caption pa-1 border" color="red" rounded="0"
              variant="flat">Preso (100)
            </v-btn>
            <v-btn elevation="1" density="compact" class="text-caption pa-1 border" color="green" variant="flat"
              rounded="0">Solto (999)
            </v-btn>
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
    <v-img class="img-background" cover gradient="to top right, rgba(100,115,201,.3), rgba(25,232,72,.0)"
      src="@/assets/bagImg.jpg"></v-img>

    <div class="content-container-process">
      <ListProcess />
    </div>
  </v-main>
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

const items = [
  { text: "Liquidação de Pena", icon: "mdi-folder", to: "/home" },
  { text: "Mandado de Notificação", icon: "mdi-account-multiple", to: "/about" },
  { text: "Sobre", icon: "mdi-account-multiple", to: "/" },
];
</script>

<style>
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

<template>
  <div class="list-process text-caption">
    <v-container fluid>
      <v-row>
        <v-col class="text-truncate" v-for="n in 18" :key="n" cols="2">
          <v-card  variant="variant-1" color="black" subtitle="11/2012" elevation="6" @click="modalInfoProcess" prepend-icon="mdi-folder-open" link height="150">
            <v-card-subtitle class="text-truncate"><span>Roubo Qualificado</span></v-card-subtitle>
            <v-card-text class="text-truncate bg-surface-light pt-4 text-caption">
              Julgamento: 12/10/2025 <br>
              Arguído(s): 3 <br>
              Solto(s): 2
            </v-card-text>
            <template v-slot:append>
              <v-icon color="success" icon="mdi-check"></v-icon>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- Modal ver informações do Processo -->
  <v-dialog transition="dialog-top-transition" v-model="isAddModalOpen" max-width="800px">
    <v-card title="Proc. Nº: 21/2021" color="cyan-darken-4 border-0" subtitle="Arguido(s)" prepend-icon="mdi-folder-open">
        <v-list lines="three" select-strategy="classic">
          <v-card color="teal-darken-4 border-0" elevation="16" class="overflow-y-auto" max-height="250" >
            <v-list-item class="p-0 mt-0 border" v-for="i in 10" :key="i" link>

              <v-list-item-title> Pedro Avelino Epalanga <br> 
                Julgamento: <v-icon color="success" icon="mdi mdi-calendar" size="15" /> 12/12/2024 <br>
                Preso: <v-icon color="warning" icon="mdi mdi-calendar" size="15" /> 11/12/2004 <br>
                Pena: 8 anos
              </v-list-item-title>

              <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non illum, eaque alias culpa, vero error esse provident ipsum totam qui odio tempore eveniet dolores ex aliquid eos? Commodi, enim.</v-list-item-subtitle>
            
              <template v-slot:append>
            <!-- START - MENU -->
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                @click="updateProcess = true"
                  color="info"
                  icon="mdi-pencil-outline"
                  variant="text"
                  v-bind="props"
                >
                </v-btn>
              </template>
            </v-menu>
          </template>
            </v-list-item>
          </v-card>
        </v-list>
        <template v-slot:actions>
          <v-btn
            class="ms-auto text-caption"
            text="Ocultar"
            variant="flat"
            color="red"
            density="compact"
            rounded="10"
            @click="isAddModalOpen = false"
          ></v-btn>
        </template>
    </v-card>
  </v-dialog>
  <!-- Modal ver informações do Processo -->

   <!-- Modal update Process -->
   <v-dialog
      v-model="updateProcess"
      max-width="400px"
    >
      <v-card  title="Pedro Avelino Epalanga" subtitle="Preso">
          <v-textarea
      :model-value="value"
      label="Descrição"
      rows="3"
      no-resize
    ></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="text-caption"
            color="success"
            density="compact"
            text="Actualizar"
            variant="flat"
            @click="updateProcess = false"
          ></v-btn>
          <v-btn
            class="text-caption"
            color="red"
            density="compact"
            text="Cancelar"
            variant="flat"
            @click="updateProcess = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   <!-- Modal update Process -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isAddModalOpen = ref(false);
    const updateProcess = ref(false);

    const modalInfoProcess = () => {
      isAddModalOpen.value = true;
    }
    
    return {
      isAddModalOpen,
      updateProcess,
      modalInfoProcess
    }
  },
}
</script>
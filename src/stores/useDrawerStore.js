import { defineStore } from "pinia";

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        drawer: false,
    }),
    actions:{
        toggleDrawer(){
            this.drawer = !this.drawer;
        }
    }
})
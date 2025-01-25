import { defineStore } from "pinia";
import { menuItems } from "~/data/sidebar/menu";

export const useMySidebarStore = defineStore("mySidebarStore", {
  state: () => ({
    appName: "eData Garing",
    menu: menuItems,
    parentActive: "/dashboard",
    linkActive: "/dashboard",
    sidebarActive: true,
  }),
  actions: {
    async changeParent(payload: any) {
      this.parentActive = payload;
    },

    async changeLink(payload: any) {
      this.linkActive = payload;
    },

    actionSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },
  },
});

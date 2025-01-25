import { useMyAuthStore } from "~/store/auth";
import { useMySidebarStore } from "~/store/sidebar";

export default defineNuxtRouteMiddleware((to, from) => {
  // const store = useMyAuthStore();
  const sidebarStore = useMySidebarStore();

  sidebarStore.changeLink(to.path);

  // const token = store.token;
  // if (!token && to.path !== "/masuk") {
  //   return navigateTo("/masuk");
  // }
});

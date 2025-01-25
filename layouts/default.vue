<template>
  <div class="relative w-full bg-[#F5F7F8] h-full">
    <div class="fixed z-10 bg-primary top-0 left-0 h-28 w-full"></div>

    <div class="flex flex-row absolute top-0 z-20 left-0 w-full h-auto">
      <div
        class="flex transition-all duration-500 ease-in-out"
        :class="sidebarStore.sidebarActive ? 'w-[25rem]' : 'w-[7rem]'"
      >
        <Sidebar />
      </div>
      <div class="flex w-full relative p-5 pl-0">
        <Header />

        <slot />

        <Copyright />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/dashboard/layouts/Sidebar.vue";
import { useMySidebarStore } from "~/store/sidebar";
import { useMyAuthStore } from "~/store/auth";
import Header from "~/components/dashboard/layouts/Header.vue";
import Copyright from "~/components/dashboard/layouts/Copyright.vue";
const sidebarStore = useMySidebarStore();
const authStore = useMyAuthStore();
const router = useRouter();
onBeforeMount(async () => {});
</script>

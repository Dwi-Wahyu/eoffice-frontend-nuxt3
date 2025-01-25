<template>
  <div class="p-5 min-h-screen">
    <div
      class="flex rounded-lg shadow-lg bg-white border w-full flex-col gap-4 h-full max-h-full overflow-y-scroll scrollbar-none p-4"
    >
      <div class="flex flex-col items-center gap-2" v-if="!store.sidebarActive">
        <img
          src="@/public/logo/logo-sidebar-inactive.svg"
          class="bg-white p-0 rounded-lg w-[2rem]"
          alt=""
        />

        <div class="flex mb-2" v-for="(item, index) in store.menu">
          <img
            :src="
              store.parentActive == item.route
                ? `/icons/${item.icon}.svg`
                : `/icons/${item.icon2}.svg`
            "
            class="w-6 cursor-pointer"
            alt=""
            @click="store.actionSidebar"
          />
        </div>
      </div>
      <div class="flex flex-row gap-3 items-center" v-if="store.sidebarActive">
        <img
          src="@/public/logo/logo-sidebar-active.svg"
          class="bg-white p-0 rounded-lg w-64"
          alt=""
        />

        <div
          class="flex cursor-pointer items-center"
          @click="store.actionSidebar"
        >
          <img src="/icons/hamburger.svg" alt="" />
        </div>
      </div>

      <div class="flex flex-col gap-0" v-if="store.sidebarActive">
        <div
          class="flex flex-col"
          v-for="(item, index) in store.menu"
          @click="store.changeParent(item.route)"
        >
          <h1
            v-if="item.type == 'menuName'"
            class="text-sm font-semibold text-[#6C757D] pt-3 pb-1"
          >
            {{ item.title }}
          </h1>
          <nuxt-link
            :to="item.route"
            class="flex flex-row gap-3 p-2 rounded-lg items-center cursor-pointer hover:bg-second"
            v-if="item.child.length == 0 && item.type == 'parent'"
            :class="store.parentActive == item.route ? 'bg-second' : ''"
          >
            <img
              :src="
                store.parentActive.includes(item.route)
                  ? `/icons/${item.icon}.svg`
                  : `/icons/${item.icon2}.svg`
              "
              class="w-6"
              alt=""
            />

            <h1
              class="text-[#6C757D] text-lg"
              :class="
                store.parentActive == item.route ? 'font-bold' : 'font-base'
              "
            >
              {{ item.title }}
            </h1>
          </nuxt-link>
          <div
            class="flex flex-row gap-3 p-2 rounded-t-lg items-center cursor-pointer hover:bg-second"
            v-if="item.child.length > 0"
            :class="store.parentActive.includes(item.route) ? 'bg-second' : ''"
          >
            <img
              :src="
                store.parentActive == item.route
                  ? `/icons/${item.icon}.svg`
                  : `/icons/${item.icon2}.svg`
              "
              class="w-6"
              alt=""
            />

            <h1
              class="text-[#6C757D] text-lg"
              :class="
                store.parentActive.includes(item.route)
                  ? 'font-bold'
                  : 'font-base'
              "
            >
              {{ item.title }}
            </h1>
          </div>
          <transition name="fade">
            <div
              class="flex flex-col gap-2 pl-11 p-2 pt-0 bg-second rounded-b-lg"
              v-if="
                item.child.length > 0 && store.parentActive.includes(item.route)
              "
            >
              <div
                class="flex flex-row"
                v-for="(itemChild, indexChild) in item.child"
              >
                <nuxt-link :to="itemChild.route" class="text-[#6C757D]">
                  <h1
                    :class="
                      route.path == itemChild.route ? 'font-bold' : 'font-base'
                    "
                  >
                    {{ itemChild.title }}
                  </h1>
                </nuxt-link>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMySidebarStore } from "~/store/sidebar";

const store = useMySidebarStore();
const route = useRoute();

onMounted(async () => {
  store.changeParent(route.path);
});
</script>

<style scoped>
/* Tambahkan efek fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

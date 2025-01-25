<template>
  <div
    class="absolute hidden sm:flex justify-between w-full pt-2 pl-5 top-5 right-5 z-50"
  >
    <div>
      <div class="flex gap-1" v-if="parentRoute">
        <div v-for="(temp, tempIdx) in breadcrumb" :key="tempIdx">
          <h1 v-if="tempIdx != breadcrumb.length - 1" class="text-white/70">
            {{ temp }} \
          </h1>
          <h1 v-else class="text-white">{{ temp }}</h1>
        </div>
      </div>
      <h1 class="font-semibold text-lg text-white">
        {{ pageTitle }}
      </h1>
    </div>

    <div class="flex gap-6 items-center">
      <div class="flex gap-1 items-center">
        <IconsUser />
        <h1 class="font-semibold text-white">User</h1>
      </div>
      <IconsCog />
      <IconsBell />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMySidebarStore } from "~/store/sidebar";

const sidebarStore = useMySidebarStore();

const breadcrumb = ref<string[]>([]);
const pageTitle = ref("");
const parentRoute = ref(false);

function capitalizeFirstLetter(word: string) {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);

  return newWord;
}

const updatePathInfo = () => {
  parentRoute.value = false;

  const splitPath = sidebarStore.linkActive.split("/");
  splitPath.shift();

  const capitalizedSplit = [];

  if (splitPath.length > 1) {
    parentRoute.value = true;
  }

  for (const eachWord of splitPath) {
    if (eachWord.includes("-")) {
      const newEach = [];
      const splitEachWord = eachWord.split("-");
      for (const temp of splitEachWord) {
        newEach.push(capitalizeFirstLetter(temp));
      }
      capitalizedSplit.push(newEach.join(" "));
    } else {
      capitalizedSplit.push(capitalizeFirstLetter(eachWord));
    }
  }

  breadcrumb.value = capitalizedSplit;
  pageTitle.value = capitalizedSplit[capitalizedSplit.length - 1];
};

watch(
  () => sidebarStore.linkActive,
  () => {
    updatePathInfo();
  },
  { immediate: true }
);
</script>

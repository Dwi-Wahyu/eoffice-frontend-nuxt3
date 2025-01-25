<template>
  <div
    v-if="withHeader && !withPagination"
    class="px-4 py-2 rounded-t-lg border-b shadow"
    :class="[headerColor]"
  >
    <h1 class="font-semibold text-lg">{{ title }}</h1>
  </div>
  <div
    v-if="!withPagination"
    class="flex shadow w-full bg-white p-4"
    :class="[
      {
        'rounded-lg': !withHeader && !withFooter,
        'rounded-b-lg': !withFooter,
        'rounded-t-lg': !withHeader,
      },
      addClass,
    ]"
  >
    <slot />
  </div>
  <div
    v-if="withFooter && !withPagination"
    class="p-4 rounded-b-lg shadow bg-white border-t"
  ></div>

  <div v-if="withPagination" class="mt-8">
    <div class="flex relative">
      <div
        v-for="(page, pageIdx) in pages"
        :key="pageIdx"
        class="px-4 pt-2 pb-1 flex bottom-0 cursor-pointer rounded-tr-full absolute transition-all"
        :class="[
          pageSelected === pageIdx
            ? 'bg-white font-semibold'
            : 'bg-gray-100 text-gray-500',
          {
            'pl-12': pageIdx != 0,
            'rounded-tl-lg': pageIdx == 0,
          },
        ]"
        :style="{
          zIndex: pages.length - pageIdx,
          width: '12.5rem',
          boxShadow: '5px 0 5px rgba(0, 0, 0, 0.1)',
          left: `${pageIdx * 10.625}rem`,
        }"
        @click="selectPage(pageIdx)"
      >
        {{ page }}
      </div>
    </div>
    <div
      :class="[addClass]"
      class="bg-white relative z-20 p-4 rounded-b-lg w-full shadow"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  withHeader: {
    type: Boolean,
    default: false,
  },
  headerColor: {
    type: String,
    default: "bg-white",
  },
  withFooter: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  addClass: {
    type: String,
    default: "",
  },
  withPagination: {
    type: Boolean,
    default: false,
  },
  pages: {
    type: Array,
    default: () => null,
  },
  pageSelected: {
    default: 0,
  },
});

const emit = defineEmits(["update:pageSelected"]);

const selectPage = (pageIdx) => {
  emit("update:pageSelected", pageIdx);
};
</script>

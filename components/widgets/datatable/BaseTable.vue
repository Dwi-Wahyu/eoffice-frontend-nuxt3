<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white text-sm overflow-hidden">
      <thead>
        <tr>
          <th
            v-if="showRowNumbers"
            class="px-4 bg-[#EAEFF3] py-2 text-left font-medium text-slate-600 rounded-l-[8px]"
          >
            No
          </th>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="bg-[#EAEFF3] px-4 py-2 text-left font-medium text-slate-600 last:rounded-r-[8px]"
            :class="[{ 'first:rounded-l-[8px]': !showRowNumbers }]"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          class="even:bg-slate-100 odd:bg-white font-semibold"
        >
          <td v-if="showRowNumbers" class="px-4 py-2 text-slate-700 rounded-l">
            {{ rowIndex + 1 }}
          </td>
          <td
            v-for="(value, colIndex) in columnsVisible"
            :key="colIndex"
            class="px-4 py-2 text-slate-700"
          >
            <template v-if="$slots[`cell-${colIndex}`]">
              <slot
                :name="`cell-${colIndex}`"
                :item="value"
                :index="colIndex"
              ></slot>
            </template>
            <template v-else>
              <div v-if="value.includes('img')">
                <img
                  :src="`${baseURL}/${value.split(':')[2]}/${
                    row[value.split(':')[1]]
                  }`"
                  alt=""
                  class="max-w-40"
                />
              </div>
              <div v-if="value.includes('tooltip')">
                <div
                  class="bg-[#B346501A] w-fit text-[#B34650] rounded-full px-2 py-1"
                >
                  {{ row[value.split(":")[2]] }}
                </div>
              </div>
              <div v-if="!value.includes('img')">
                <span v-html="truncateHtml(row[value], 200)"></span>
              </div>
            </template>
          </td>
          <td
            v-if="showButtonAction"
            class="px-4 py-2 text-slate-700 rounded-r"
          >
            <div class="relative">
              <button
                @click="toggleDropdown(rowIndex)"
                class="bg-blue-500 text-slate-700 px-3 py-1 rounded-md hover:bg-blue-600 border border-slate-400 flex flex-row items-center gap-2"
              >
                Aksi
                <IconsChevron class="-rotate-90" width="15" height="15" />
              </button>
              <div
                v-if="openDropdown === rowIndex"
                class="fixed mt-2 w-32 -translate-x-[3.1rem] bg-white border border-slate-200 rounded-lg shadow-lg z-[999]"
              >
                <button
                  v-for="(action, actionIndex) in actions"
                  :key="actionIndex"
                  @click="handleAction(action, row)"
                  class="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-100 flex flex-row gap-2 items-center text-xs"
                >
                  <component :is="action.icon"></component>
                  {{ action.label }}
                </button>
              </div>
            </div>
          </td>
        </tr>

        <tr v-if="data.length === 0">
          <td
            :colspan="
              headers.length +
              (showRowNumbers ? 1 : 0) +
              (showButtonAction ? 1 : 0)
            "
            class="pt-2"
          >
            <div
              class="text-center rounded-[8px] p-4 text-danger bg-red-100 font-bold text-base"
            >
              <h1 v-if="!loading">Tidak Ada Data Yang Di Temukan</h1>
              <h1 v-if="loading">Tunggu Sejenak</h1>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { truncateHtml } from "~/function/truncateHtml";
import BaseButton from "../button/BaseButton.vue";

const runtimeConfig = useRuntimeConfig();
const { baseURL } = runtimeConfig.public.axios;

const openDropdown = ref(null);

const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  actions: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  showRowNumbers: {
    type: Boolean,
    default: false,
  },
  showButtonAction: {
    type: Boolean,
    default: false,
  },
  columnsVisible: {
    type: Array,
    default: () => [],
  },
});

const handleAction = (action, row) => {
  if (typeof action.onClick === "function") {
    action.onClick(row);
  }
};
</script>

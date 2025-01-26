<template>
  <div class="mt-20 w-full flex flex-col">
    <WidgetsCardBaseCard
      :with-pagination="true"
      :pages="['Daftar Pengguna', 'Daftar Pejabat', 'Manajemen Role']"
      :page-selected="tabSelected"
      @update:page-selected="handleTabChange"
    >
      <div v-if="tabSelected == 0">
        <h1 class="font-semibold text-lg mb-4">Pengguna & Pejabat</h1>

        <div
          class="bg-gray-100 flex px-4 py-2 items-center border-b-0 rounded-t-lg justify-between border"
        >
          <h1 class="font-semibold">List Pengguna</h1>

          <WidgetsDataInputBaseInput
            placeholder="Cari Pengguna"
            add-class="pr-9"
            :with-icon="true"
            :icon="Search"
          />

          <WidgetsButtonBaseButton
            variant="secondary"
            add-class="rounded-full flex gap-1 items-center"
          >
            <IconsCirclePlus />

            Tambah Pengguna
          </WidgetsButtonBaseButton>
        </div>

        <div class="border border-b-0 p-4">
          <WidgetsDatatableBaseTable
            :headers="userStore.tableHeaders"
            :data="userStore.data"
            :loading="userStore.loading"
            :show-button-action="true"
            :actions="actions"
            :columns-visible="['nik', 'nama', 'username', 'instansi', 'role']"
          />
        </div>

        <div
          class="border rounded-b-lg px-4 items-center flex justify-between py-2"
        >
          <h1 class="text-xs font-medium">
            Menampilkan {{ perPage }} dari {{ totalDatas }} Data
          </h1>

          <WidgetsDatatableBasePagination
            :model-value="perPage"
            :current-page="userStore.currentPage"
            :total-pages="userStore.totalPages"
            :total-datas="userStore.totalDatas"
            :per-page="userStore.perPage"
            @page-change="handlePageChange"
          />

          <WidgetsDataInputBaseSelect
            class="block rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
            id="perpage_select"
            :options="perpageOption"
            v-model:model-value="perPage"
            @update:model-value="handlePerPageChange"
          >
            <option
              v-for="(option, idx) in perpageOption"
              :key="idx"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </WidgetsDataInputBaseSelect>
        </div>
      </div>
      <div v-if="tabSelected == 1">
        <h1>Daftar Pejabat</h1>
      </div>
      <div v-if="tabSelected == 2">
        <h1>Manajemen Role</h1>
      </div>
    </WidgetsCardBaseCard>
  </div>
</template>

<script lang="ts" setup>
import Edit from "~/components/icons/Edit.vue";
import Search from "~/components/icons/Search.vue";
import Trash from "~/components/icons/Trash.vue";
import { useMyUserStore } from "~/store/user";

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const userStore = useMyUserStore();

const tabSelected = ref(0);

const search = ref("");

function handleTabChange(value: number) {
  tabSelected.value = value;
}

const perpageOption = [
  { label: "5 Entries", value: 5 },
  { label: "10 Entries", value: 10 },
  { label: "15 Entries", value: 15 },
];

const { totalDatas, perPage } = storeToRefs(userStore);

const actions = [
  {
    label: "Edit",
    onClick: () => {},
    btnVariant: "primary",
    icon: Edit,
  },
  {
    label: "Hapus",
    onClick: () => {},
    btnVariant: "danger",
    icon: Trash,
  },
];

const loadData = () => {
  const payload = {
    search: search.value,
    per_page: userStore.perPage,
  };
  userStore.getData(payload).then((res: any) => {});
};

const handlePageChange = (page: any) => {
  userStore.currentPage = page;
  loadData();
};

const handlePerPageChange = (value: any) => {
  userStore.perPage = value;
  loadData();
};

watch([search], () => {
  loadData();
});

onMounted(async () => {
  loadData();
});
</script>

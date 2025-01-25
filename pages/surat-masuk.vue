<template>
  <WidgetsCardBaseCard add-class="mt-16 w-full h-fit flex-col">
    <WidgetsCardBaseCard
      header-color="bg-gray-100"
      :with-header="true"
      add-class=" grid gap-4 grid-cols-3"
      title="Rekapitulasi Surat Masuk"
    >
      <WidgetsDataInputBaseInput label="Tanggal Awal" type="date" />
      <WidgetsDataInputBaseInput label="Tanggal Akhir" type="date" />
    </WidgetsCardBaseCard>

    <div class="mt-4 shadow rounded-lg">
      <div
        class="border flex justify-between items-center border-b-0 px-4 py-2 rounded-t-lg bg-gray-100"
      >
        <h1 class="font-semibold">Tabel Data</h1>

        <div class="flex items-center gap-2">
          <div>
            <WidgetsDataInputBaseSelect
              class="block w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
              id="jenis_surat"
              :options="jenisSuratOption"
              v-model="jenisSurat"
              @change="handlePerPageChange"
            >
              <option
                v-for="(option, idx) in jenisSuratOption"
                :key="idx"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </WidgetsDataInputBaseSelect>
          </div>

          <WidgetsDataInputBaseInput
            placeholder="Cari"
            add-class="pr-9"
            :with-icon="true"
            :icon="Search"
          />
        </div>

        <div>
          <WidgetsDataInputBaseSelect
            class="block w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
            id="perpage_select"
            :options="perpageOption"
            v-model="perPage as any"
            @change="handlePerPageChange"
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
      <div class="border border-b-0 p-4">
        <WidgetsDatatableBaseTable
          :headers="suratMasukStore.tableHeaders"
          :data="suratMasukStore.data"
          :loading="suratMasukStore.loading"
          :show-button-action="true"
          :actions="actions"
          :columns-visible="[
            'nomor_surat',
            'perihal',
            'pengirim',
            'penerima',
            'tanggal',
            'sifat',
            'status',
          ]"
        />
      </div>
      <div
        class="border rounded-b-lg px-4 items-center flex justify-between py-2"
      >
        <h1 class="text-xs font-medium">
          Menampilkan {{ perPage }} dari {{ totalDatas }} Data
        </h1>

        <BasePagination
          :model-value="perPage"
          :current-page="suratMasukStore.currentPage"
          :total-pages="suratMasukStore.totalPages"
          :total-datas="suratMasukStore.totalDatas"
          :per-page="suratMasukStore.perPage"
          @page-change="handlePageChange"
          @perpage-change="handlePerPageChange"
        />

        <div class="flex gap-3">
          <WidgetsButtonBaseButton
            add-class="rounded-lg flex gap-2 items-center"
            size="sm"
            variant="outline"
          >
            <IconsExportPDF /> Export PDF
          </WidgetsButtonBaseButton>
          <WidgetsButtonBaseButton
            add-class="rounded-lg flex gap-2 items-center"
            size="sm"
            variant="outline"
          >
            <IconsExportXLS /> Export XLS
          </WidgetsButtonBaseButton>
        </div>
      </div>
    </div>
  </WidgetsCardBaseCard>
</template>

<script lang="ts" setup>
import Edit from "~/components/icons/Edit.vue";
import Search from "~/components/icons/Search.vue";
import Trash from "~/components/icons/Trash.vue";
import BasePagination from "~/components/widgets/datatable/BasePagination.vue";
import { useMySuratMasukStore } from "~/store/surat-masuk";

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const suratMasukStore = useMySuratMasukStore();

const search = ref("");

const perpageOption = [
  { label: "5 Entries", value: 5 },
  { label: "10 Entries", value: 10 },
  { label: "15 Entries", value: 15 },
];

const jenisSuratOption = [
  { label: "Jenis Surat", value: "default" },
  { label: "10 Entries", value: 10 },
  { label: "15 Entries", value: 15 },
];

const { totalDatas } = storeToRefs(suratMasukStore);
const perPage = ref(5);
const jenisSurat = ref("default");

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
    per_page: suratMasukStore.perPage,
  };
  suratMasukStore.getData(payload).then((res: any) => {});
};

const handlePageChange = (page: any) => {
  suratMasukStore.currentPage = page;
  loadData();
};

const handlePerPageChange = (value: any) => {
  console.log(value);

  suratMasukStore.perPage = value;
  loadData();
};

watch([search], () => {
  loadData();
});

onMounted(async () => {
  loadData();
});
</script>

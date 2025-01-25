<template>
  <div class="mt-20 w-full flex flex-col pb-10 gap-5">
    <WidgetsCardBaseCard add-class="flex-col">
      <div class="flex justify-end mb-4 gap-3">
        <WidgetsButtonBaseButton
          add-class="rounded-full flex gap-2 items-center"
          variant="success"
        >
          <IconsSave />
          Simpan ke Draft
        </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton
          add-class="rounded-full flex gap-2 items-center"
          variant="success"
        >
          <IconsView />
          Print View
        </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton
          add-class="rounded-full flex gap-2 items-center"
          variant="success"
        >
          <IconsAirplane />
          Kirim Draft
        </WidgetsButtonBaseButton>
      </div>
      <div class="grid grid-cols-2 gap-4 items-center">
        <WidgetsDataInputBaseSelect
          :inline="true"
          label="Jenis Surat*"
          :options="jenisSuratOptions"
          v-model:model-value="jenis_surat"
        />

        <WidgetsDataInputBaseInput
          :inline="true"
          label="Kepada (Group)"
          placeholder="Ketik Kepada (Group)"
        />

        <WidgetsDataInputBaseInput
          :inline="true"
          label="Kepada*"
          placeholder="Ketik Penerima"
        />

        <WidgetsDataInputBaseInput
          :inline="true"
          label="Tembusan"
          placeholder="Ketik Tembusan"
        />

        <WidgetsDataInputBaseTextArea
          label="Perihal*"
          add-class="row-span-2"
          height="h-32"
          placeholder="Ketik Perihal"
        />

        <WidgetsDataInputBaseInput
          :inline="true"
          label="Tembusan (Group)"
          placeholder="Ketik Tembusan (Group)"
        />
        <WidgetsDataInputBaseInput
          :inline="true"
          label="Pemeriksa"
          placeholder="Ketik Pemeriksa"
        />
        <WidgetsDataInputBaseInput
          :inline="true"
          label="Klasifikasi Masalah*"
          placeholder="Ketik klasifikasi"
        />
        <WidgetsDataInputBaseInput
          :inline="true"
          label="Tanggal*"
          type="date"
          placeholder="Masukkan Tanggal"
        />
        <div class="grid grid-cols-3">
          <h1 class="block text-sm font-semibold">Jenis Surat*</h1>
          <div class="flex justify-between items-center col-span-2">
            <WidgetsDataInputBaseRadio
              label="Biasa"
              id="biasa"
              name="jenis_surat"
              v-model="jenis_surat"
            />
            <WidgetsDataInputBaseRadio
              label="Penting"
              id="penting"
              name="jenis_surat"
              v-model="jenis_surat"
            />
            <WidgetsDataInputBaseRadio
              label="Rahasia"
              id="rahasia"
              name="jenis_surat"
              v-model="jenis_surat"
            />
          </div>
        </div>
        <WidgetsDataInputBaseInput
          :inline="true"
          label="Lampiran Surat*"
          type="file"
          placeholder="Masukkan Tanggal"
        />
      </div>
    </WidgetsCardBaseCard>

    <WidgetsCardBaseCard add-class="flex-col">
      <h1>Isi Surat*</h1>

      <WidgetsEditorTiptapEditor :model-value="isiSurat" />
    </WidgetsCardBaseCard>
  </div>
</template>

<script setup>
const jenisSuratOptions = ref([
  { value: "semua", label: "Semua" },
  { value: "biasa", label: "Biasa" },
  { value: "penting", label: "Penting" },
  { value: "rahasia", label: "Rahasia" },
]);

const jenis_surat = ref("semua");
const kepada = ref("");
const kepada_group = ref("");
const tembusan = ref("");
const tembusan_group = ref("");
const perihal = ref("");
const pemeriksa = ref("");
const klasifikasi_masalah = ref("");
const tanggal = ref("");

const isiSurat = ref("Ini isi surat default");

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

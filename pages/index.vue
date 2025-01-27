<template>
  <div class="w-full">
    <div
      class="grid gap-3 grid-cols-1 mb-7 mt-16 sm:grid-cols-2 md:grid-cols-3 w-full"
    >
      <BaseCard add-class="flex items-center justify-between">
        <div>
          <h1 class="text-[#8392AB] font-semibold">PERLU PROSES</h1>
          <h1 class="font-semibold">0</h1>
        </div>
        <IconsSuratCog />
      </BaseCard>

      <BaseCard add-class="flex items-center justify-between">
        <div>
          <h1 class="text-[#8392AB] font-semibold">SURAT MASUK</h1>
          <h1 class="font-semibold">0</h1>
        </div>

        <IconsSuratMasuk />
      </BaseCard>

      <BaseCard add-class="flex items-center justify-between">
        <div>
          <h1 class="text-[#8392AB] font-semibold">SURAT KELUAR</h1>
          <h1 class="font-semibold">0</h1>
        </div>
        <IconsSuratKeluar />
      </BaseCard>
    </div>
    <BaseCard
      title="Notifikasi Terbaru"
      :with-footer="true"
      :with-header="true"
      v-if="notifikasi"
      add-class="flex-col gap-4"
    >
      <div
        class="flex gap-5 items-center"
        v-for="(notif, notifIdx) in notifikasi"
      >
        <IconsDot />
        <div>
          <h1 class="text-[#172B4D]">{{ notif.judul }}</h1>
          <h1 class="text-[#7C7C7C]">{{ notif.waktu }}</h1>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from "~/components/widgets/card/BaseCard.vue";

const notifikasi = ref([
  {
    judul: "Surat masuk baru Dari Divisi Keuangan",
    waktu: "5 menit yang lalu",
  },
  {
    judul: "Dokumen perlu ditandatangani 2 dokumen menunggu",
    waktu: "30 menit yang lalu",
  },
]);

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

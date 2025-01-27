<template>
  <WidgetsCardBaseCard add-class="mt-20 flex-col gap-5 mb-10 h-fit">
    <WidgetsDataInputBaseSelect
      class="block w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
      id="format_surat"
      label="Format Surat *"
      :options="jenisSuratOption"
      v-model="jenisSurat"
      @update:model-value="handleChangeJenisSurat"
    >
      <option
        v-for="(option, idx) in jenisSuratOption"
        :key="idx"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </WidgetsDataInputBaseSelect>

    <div>
      <h1 class="text-lg font-bold text-[#172B4D]">Preview</h1>
      <div class="flex items-center justify-center w-full h-60">
        <h1 class="text-sm">
          Silahkan Pilih Format Surat, Previewnya akan muncul disini
        </h1>
      </div>
      <div class="flex justify-center">
        <WidgetsButtonBaseButton class="rounded-full mt-1" variant="success">
          <IconsSave class="mr-2" />
          Simpan Format Surat
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </WidgetsCardBaseCard>
</template>

<script lang="ts" setup>
const jenisSuratOption = [
  { label: "Pilih Format Surat", value: "default" },
  { label: "10 Entries", value: 10 },
  { label: "15 Entries", value: 15 },
];

const jenisSurat = ref("default");

const handleChangeJenisSurat = (value: any) => {
  jenisSurat.value = value;
};

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

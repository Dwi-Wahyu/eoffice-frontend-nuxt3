<template>
  <div
    class="w-full relative min-h-screen bg-[url('/backgrounds/bg-login.png')] bg-center bg-cover"
  >
    <div
      class="bg-primary w-full h-full absolute z-10 opacity-50 left-0 right-0"
    ></div>

    <div
      class="flex w-full flex-col gap-4 sm:gap-0 sm:flex-row sm:px-40 items-center justify-center h-full sm:justify-between absolute z-20"
    >
      <img
        src="/backgrounds/login-logo.png"
        alt=""
        class="sm:w-[35rem] w-[75vw]"
      />

      <div class="bg-white rounded-[28px] shadow w-[22rem] p-10">
        <div class="text-center">
          <h1 class="font-bold text-2xl mb-2">Login</h1>
          <h1>{{ authStore.welcomeDesc }}</h1>
        </div>
        <div class="mt-4 flex flex-col gap-4">
          <BaseInput
            add-class="shadow-inner"
            label="Username"
            id="username"
            placeholder="Masukkan Username Anda"
          />

          <BaseInput label="Password" placeholder="Masukkan Password Anda" />
          <div class="grid grid-cols-2 gap-2">
            <BaseInput
              label="Kode Captcha"
              id="password"
              placeholder="Masukkan Kode"
            />
            <div class="flex items-end">
              <img src="/captcha-example.png" alt="" />
            </div>
          </div>
          <div class="flex justify-center mt-3">
            <BaseButton type="submit" class="rounded-full">Login</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "~/components/widgets/button/BaseButton.vue";
import BaseInput from "~/components/widgets/data-input/BaseInput.vue";
import { useMyAuthStore } from "~/store/auth";

definePageMeta({
  layout: "login",
});

const authStore = useMyAuthStore();

onMounted(() => {
  navigateTo("/dashboard");
});
</script>

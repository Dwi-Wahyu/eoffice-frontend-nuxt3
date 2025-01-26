import { defineStore } from "pinia";
import { useAxios } from "@/composables/useAxios";

interface ErrorData {
  msg: string;
  data: any;
  status: string;
}

type User = {
  id?: string;
  username: string;
  name: string;
};

export const useMyAuthStore = defineStore("myAuthStore", {
  state: () => ({
    orgName: "Pemerintah Kabupaten Luwu Timur",
    appName: "Pemerintah Kabupaten Luwu Timur",
    appDesc:
      "Aplikasi Analisis Data Eksploratori Pada Desa Garing Kecamatan Tompobulu",
    welcomeText: "Selamat Datang",
    welcomeDesc:
      "Silahkan masukkan Username dan Password untuk masuk ke Aplikasi.",
    token: "",
    user: null as User | null,
    alwaysLogin: false,
    error: false,
    error_data: null as ErrorData | null,
  }),
  persist: true, // Opsi untuk plugin persist
  actions: {
    async login(credentials: {
      username: string;
      password: string;
      alwaysLogin: boolean;
    }) {
      this.error = false;
      this.error_data = null;
      const axios = useAxios();

      return new Promise((resolve, reject) => {
        const { username, password } = credentials;

        if (username == "superadmin" && password == "secret") {
          this.token = "lkajwflkwjefklajfkljoiafjoe";
          this.alwaysLogin = credentials.alwaysLogin;
          this.user = { username: "superadmin", name: "admin" };
          resolve("success");
        } else {
          reject(new Error("Invalid credentials"));
        }

        // Jika menggunakan axios:
        // axios
        //   .post("/auth/login", credentials)
        //   .then((response) => {
        //     this.alwaysLogin = credentials.alwaysLogin;
        //     this.token = response.data.access_token;
        //     resolve(response);
        //   })
        //   .catch((error: any) => {
        //     this.error = true;
        //     this.error_data = error.response.data;
        //     reject(error);
        //   });
      });
    },
  },
});

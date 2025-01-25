import { defineStore } from "pinia";
interface ResData {
  msg: string;
  data: any;
  status: string;
}

export const useMySuratMasukStore = defineStore({
  id: "mySuratMasukStore",
  state: () => ({
    currentPage: 1,
    totalPages: 10,
    perPage: 5,
    data: [] as any[],
    totalDatas: 50,
    tableHeaders: [
      "No Surat",
      "Perihal",
      "Pengirim",
      "Penerima",
      "Tanggal Surat",
      "Sifat Surat",
      "Status",
      "Aksi",
    ],
    step: 1,
    error: false,
    error_data: null as ResData | null,
    responseData: null as ResData | null,
    loading: false,
  }),
  actions: {
    async sendData(payload: any) {
      this.responseData = null;
      this.error = false;
      this.error_data = null;
      const axios = useAxios();

      return new Promise((resolve, reject) => {
        axios
          .post("/jadwal", payload)
          .then((response) => {
            this.responseData = response.data;
            resolve(response.data);
          })
          .catch((error) => {
            this.error = true;
            this.error_data = error.response.data;
            reject(error.response.data);
          });
      });
    },

    async getData(payload: any) {
      this.loading = true;
      this.responseData = null;
      this.error = false;
      this.error_data = null;
      this.data = [];
      const axios = useAxios();

      return new Promise((resolve, reject) => {
        const dataExample = [
          {
            id: "afekjalflakwefjalkwfjkafjaljfe",
            nomor_surat: "59056/UN4.26/PA.00/2024",
            perihal: "UNDANGAN SOSIALISASI MATURIS SPIP",
            pengirim: "Kurniawan",
            penerima: "Dedi",
            tanggal: "20 Des 2024",
            sifat: "Penting",
            status: "Diproses",
          },
        ];

        this.currentPage = this.currentPage;
        this.totalPages = 1;
        this.totalDatas = dataExample.length;

        dataExample.forEach(
          (element: {
            id: string;
            nomor_surat: string;
            perihal: string;
            pengirim: string;
            penerima: string;
            tanggal: string;
            sifat: string;
            status: string;
          }) => {
            let tempData = {
              id: element.id,
              nomor_surat: element.nomor_surat,
              perihal: element.perihal,
              pengirim: element.pengirim,
              penerima: element.penerima,
              tanggal: element.tanggal,
              sifat: element.sifat,
              status: element.status,
            };

            this.data.push(tempData);
          }
        );

        this.loading = false;

        resolve(this.data);

        // axios
        //   .get("/data-jadwal", { params: payload })
        //   .then((response) => {
        //     this.responseData = response.data;

        //     this.responseData?.data.data.forEach(
        //       (element: {
        //         id: string;
        //         nomor_surat: string;
        //         perihal: string;
        //         pengirim: string;
        //         penerima: string;
        //         tanggal: string;
        //         sifat: string;
        //         status: string;
        //       }) => {
        //         let tempData = {
        //           id: element.id,
        //           nomor_surat: element.nomor_surat,
        //           perihal: element.perihal,
        //           pengirim: element.pengirim,
        //           penerima: element.penerima,
        //           tanggal: element.tanggal,
        //           sifat: element.sifat,
        //           status: element.status,
        //         };

        //         this.data.push(tempData);
        //       }
        //     );

        //     this.currentPage = this.responseData?.data.currentPage;
        //     this.totalPages = this.responseData?.data.totalPages;
        //     this.totalDatas = this.responseData?.data.totalDatas;

        //     this.loading = false;

        //     resolve(this.data);
        //   })
        //   .catch((error) => {
        //     this.error = true;
        //     this.error_data = error.response.data;
        //     this.loading = false;
        //     // reject(error.response.data)
        //   });
      });
    },

    async updateData(payload: any) {
      this.responseData = null;
      this.error = false;
      this.error_data = null;
      const axios = useAxios();

      return new Promise((resolve, reject) => {
        axios
          .put("/jadwal", payload)
          .then((response) => {
            this.responseData = response.data;

            resolve(response.data);
          })
          .catch((error) => {
            this.error = true;
            this.error_data = error.response.data;
            reject(error.response.data);
          });
      });
    },
  },
});

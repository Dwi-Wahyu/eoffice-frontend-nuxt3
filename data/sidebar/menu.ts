export interface MenuItem {
  title: string;
  icon?: string;
  icon2?: string;
  route: string;
  child?: any;
  roles: any;
  type: string;
  iconColor?: string;
}

export const menuItems: MenuItem[] = [
  {
    title: "MENU",
    icon: "",
    icon2: "",
    route: "",
    child: [],
    roles: [],
    type: "menuName",
  },
  {
    title: "Dashboard",
    icon: "dashboard-active",
    icon2: "dashboard-inactive",
    route: "/dashboard",
    child: [],
    roles: [],
    type: "parent",
    iconColor: "#FF4757",
  },
  {
    title: "Dokumen",
    icon: "buat-dokumen-active",
    icon2: "buat-dokumen-inactive",
    route: "/dokumen",
    iconColor: "#14AE5C",
    child: [
      {
        title: "Buat Dokumen Baru",
        route: "/dokumen/buat-dokumen-baru",
      },
      {
        title: "Draft",
        route: "/dokumen/draft",
      },
    ],
    roles: [],
    type: "parent",
  },

  {
    title: "KOTAK SURAT",
    icon: "",
    icon2: "",
    route: "",
    child: [],
    roles: [],
    type: "menuName",
  },
  {
    title: "Surat Masuk",
    icon: "surat-masuk-active",
    icon2: "surat-masuk-inactive",
    route: "/surat-masuk",
    child: [],
    roles: [],
    type: "parent",
    iconColor: "#0D99FF",
  },
  {
    title: "Surat Keluar",
    icon: "surat-keluar-active",
    icon2: "surat-keluar-inactive",
    route: "/surat-keluar",
    child: [],
    roles: [],
    type: "parent",
    iconColor: "#F24822",
  },
  {
    title: "Disposisi",
    icon: "disposisi-active",
    icon2: "disposisi-inactive",
    route: "/disposisi",
    iconColor: "#FFCD29",
    child: [
      {
        title: "Disposisi Diterima",
        route: "/disposisi/diterima",
      },
      {
        title: "Disposisi Dikeluarkan",
        route: "/disposisi/dikeluarkan",
      },
    ],
    roles: [],
    type: "parent",
  },

  {
    title: "PANDUAN",
    icon: "",
    icon2: "",
    route: "",
    child: [],
    roles: [],
    type: "menuName",
  },
  {
    title: "Panduan",
    icon: "panduan-active",
    icon2: "panduan-inactive",
    route: "/panduan",
    iconColor: "#FFCD29",
    child: [
      {
        title: "Helpdesk",
        route: "/panduan/helpdesk",
      },
      {
        title: "Panduan dan Aturan",
        route: "/panduan/aturan",
      },
      {
        title: "FAQ",
        route: "/panduan/faq",
      },
    ],
    roles: [],
    type: "parent",
  },

  {
    title: "PENGATURAN",
    icon: "",
    icon2: "",
    route: "",
    child: [],
    roles: [],
    type: "menuName",
  },
  {
    title: "Pengaturan",
    icon: "pengaturan-active",
    icon2: "pengaturan-inactive",
    route: "/pengaturan",
    iconColor: "#D0B35A",
    child: [
      {
        title: "Management User",
        route: "/pengaturan/user",
      },
      {
        title: "Format Surat",
        route: "/pengaturan/format-surat",
      },
    ],
    roles: [],
    type: "parent",
  },
];

import { it, expect, test, describe, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useMySidebarStore } from "~/store/sidebar";

describe("Periksa Aksi Sidebar", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Harus bisa toggle sidebar", () => {
    const sidebarStore = useMySidebarStore();
    const initialSidebarState = sidebarStore.sidebarActive;

    sidebarStore.actionSidebar();

    expect(sidebarStore.sidebarActive).toBe(!initialSidebarState);
  });
});

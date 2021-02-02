import { shallowMount } from "@vue/test-utils";
import BHeader from "@/components/atoms/BHeader";

describe("BHeader", () => {
  it("it renders one h1 containing 'FINAL SPACE'", () => {
    const wrapper = shallowMount(BHeader);
    expect(wrapper.find("h1").html()).toContain("FINAL SPACE");
    expect(wrapper.findAll("h1")).toHaveLength(1);
  });
});

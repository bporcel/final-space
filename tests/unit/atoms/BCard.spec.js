import { shallowMount } from "@vue/test-utils";
import BCard from "@/components/atoms/BCard";

const factory = props => {
  return shallowMount(BCard, {
    props: props
  });
};

const defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
  data: [],
  img: "src",
  roundImageOnSmallScreen: false
};

describe("Bcard", () => {
  it("it renders an image with given src", () => {
    const wrapper = factory(defaultProps);
    expect(wrapper.findAll("img")).toHaveLength(1);
    expect(wrapper.findAll("img")[0].attributes().src).toBe("src");
  });

  it("Rounds 'roundImageOnSmallScreen' round class to img if prop is true", () => {
    const wrapper = factory({ ...defaultProps, roundImageOnSmallScreen: true });
    expect(wrapper.find("img").attributes().class).toBe(
      "roundImageOnSmallScreen"
    );
  });

  it("Renders title and subtitle", () => {
    const wrapper = factory(defaultProps);
    expect(wrapper.find(".title").html()).toContain(wrapper.vm.title);
    expect(wrapper.find(".subtitle").html()).toContain(wrapper.vm.subtitle);
  });

  it("Renders as many info 'p' as data length", () => {
    const wrapper = factory({
      title: "Title",
      subtitle: "Subtitle",
      data: [
        { text: "Text0", info: "Info0" },
        { text: "Text1", info: "Info1" }
      ],
      img: "src",
      roundImageOnSmallScreen: true
    });
    expect(wrapper.findAll(".info")).toHaveLength(wrapper.vm.data.length);
  });
});

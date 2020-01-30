import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg) // 不是严格相等，会有一些wrapper.text() 会有一些空格之类的
  });
});
 
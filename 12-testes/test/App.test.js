import { mount } from "@vue/test-utils";
import App from "./../src/App.vue";

test("total	sendo	iniciado	com	valor	0", () => {
  const wrapper = mount(App);
  expect(wrapper.find("p	span").text()).toEqual("0");
});

test("subtraindo	um	número	do	total", async () => {
  const wrapper = mount(App);
  await wrapper.find("button:first-of-type").trigger("click");
  expect(wrapper.find("p	span").text()).toEqual("-1");
});

test("somando	um	número	do	total", async () => {
  const wrapper = mount(App);
  await wrapper.find("button:last-of-type").trigger("click");
  expect(wrapper.find("p	span").text()).toEqual("1");
});

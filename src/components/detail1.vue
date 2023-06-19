<template>
  <div>
    <h2>子组件</h2>
    <p>我的名字是：{{ name }}</p>
    <input type="text" v-model="inputText" @blur="handleChange" />
  </div>
</template>
  
  <script>
export default {
  props: {
    name: {
      type: String,
      default() {
        return "John";
      },
    },
  },
  data() {
    return { inputText: "" };
  },
  methods: {
    handleChange() {
      this.$emit("change", this.inputText);
    },
  },
};
</script>
  
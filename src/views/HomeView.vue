<template>
  <div id="app">
    <div class="mianBox">
      <div>app主动发送数据给h5：{{ monitor }}</div>
      <div>h5触发app方法接收的结果：{{ contnet }}</div>
      <button @click="getData">调用app方法getAppData</button>

      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      contnet: "",
      monitor: "",
      awesome: true,
    };
  },
  mounted() {
    // 监听app触发monitorTestData，进行监听接收数据
    this.$jsbridge.registerHandler("monitorTestData", (data) => {
      this.monitor = data;
      alert(this.monitor);
    });
  },
  methods: {
    getData() {
      // 触发 app 内部设定好的方法，触发完成会有回调接收结果
      this.$jsbridge.callHandler(
        "getAppData",
        { param: "你好，这是我JS传递给你的数据" },
        (data) => {
          console.log("获取到的数据", data);
          this.contnet = data;
        }
      );
    },
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>

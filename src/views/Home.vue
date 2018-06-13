<template>
  <div class="home">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Vue.svg/512px-Vue.svg.png" width="200px">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<template>
  <div>
    <test-component />
    <p>{{ req }}</p>
  </div>
</template>

<script>
import TestComponent from "./components/main-page.vue";

export default {
  name: "App",
  components: {
    TestComponent,
  },
};
</script>

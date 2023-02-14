<script setup lang="ts">
import { ref } from "vue";

const showDefaultMessage = ref(true);

const toggleMessage = () => {
  showDefaultMessage.value = !showDefaultMessage.value;
};
</script>

<template>
  <main>
    <h1 v-if="showDefaultMessage">Hello world</h1>
    <h1 v-else>Hola Human</h1>
    <button @click="toggleMessage">Toggle Message</button>
  </main>
</template>

<template>
  <div class="Searchbar">
    <input v-model="product" class="Input" placeholder="Product Name" />
    <button class="Button">Search</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = ref("");
</script>

<style scoped>
.Searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Input {
  font-size: 20px;
  border-radius: 50px 0px 0px 50px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #fefcf3;
}

.Button {
  font-size: 20px;
  padding: 10px;
  border-radius: 0px 50px 50px 0px;
  border: none;
  outline: none;
}
</style>

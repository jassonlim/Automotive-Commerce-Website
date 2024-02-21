<template>
  <div id="app">
    <form @submit.prevent="register">
      <h1>Register</h1>
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />

      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
const username = ref("");
const password = ref("");

async function register() {
  const { data, error } = await supabase
    .from("user")
    .insert({ username: username.value, password: password.value });
  if (error) {
    throw error;
  }
}
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input,
button {
  margin: 10px 0;
}
</style>

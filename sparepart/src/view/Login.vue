<template>
  <div id="app">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />

      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />

      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
const username = ref("");
const password = ref("");

if (localStorage.getItem("user")) {
  window.location.href = "/";
}

async function login() {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("username", username.value);
  localStorage.setItem("user", JSON.stringify(data[0]));
  if (error) {
    console.log(error);
  } else {
    if (data.length > 0) {
      if (data[0].password == password.value) {
        localStorage.setItem("user", JSON.stringify(data[0]));
        window.location.href = "/";
      } else {
        alert("Wrong password");
      }
    } else {
      alert("Username not found");
    }
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

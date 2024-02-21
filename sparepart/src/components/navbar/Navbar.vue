<template>
  <div class="Container">
    <div class="ImageContainer">
      <h1 class="brand">Mitra Mandiri Motor</h1>
    </div>
    <SearchBar />
    <div class="ItemContainer">
      <ul class="GroupList">
        <li class="Home">Home</li>
        <li class="Account"><a href="/account">Account</a></li>
        <li @if="bool" class="Login"><a href="/login">Login</a></li>
        <li class="Register"><a href="/register">Register</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import SearchBar from "../seachBar/SearchBar.vue";
import { onMounted, ref } from "vue";
const bool = ref(true);
onMounted(() => {
  if (localStorage.getItem("user")) {
    bool.value = false;
  }
});
</script>
<style scoped>
.Container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 7%);
}

.brand {
  font-family: "Inconsolata", monospace;
  color: rgb(3, 172, 14);
}

/* .ImageContainer {
    
} */

.GroupList {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: rgb(3, 172, 14);
}

.Home {
  margin: 0px 10px 0px 0px;
}

.Account {
  margin: 0px 0px 0px 10px;
}

.Login {
  margin: 0px 0px 0px 10px;
}

.Register {
  margin: 0px 0px 0px 10px;
}

.Image {
  width: 100px;
}
</style>

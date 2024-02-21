<template>
  <div>
    <NavbarVue />
    <div class="MainContainer">
      <div class="">
        <div class="ThirdContainer">
          <div class="TextContainer">
            <h2 class="FirstText">
              Discover Many Spare Parts From the Finest Automobile
            </h2>
            <p class="SecondText">Guaranteed the best in the league</p>
            <div>
              <button class="Button" style="margin-right: 20px">
                Get Started
              </button>
            </div>
          </div>
          <div class="MainImageContainer">
            <div class="ImageContainer">
              <img :src="imageUrl" alt="Slider Images" class="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Collection />
  </div>
</template>

<script setup>
import Collection from "../components/collection/Collection.vue";
import NavbarVue from "../components/navbar/Navbar.vue";
import { imageUrl } from "../config/image";
</script>

<style scoped>
.MainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.ThirdContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.FirstText {
  font-size: 30px;
}

.SecondText {
  font-size: 25px;
  color: rgb(3, 172, 14);
}

.Button {
  font-size: 30px;
  border-radius: 50px;
  color: white;
  padding: 15px 16px;
  font-weight: 800;
  border-radius: 8px;
  font-size: 25px;
  background: rgb(3, 172, 14);
  cursor: pointer;
  border: none;
}
.MainImageContainer {
  margin-left: 40px;
}
.Image {
  width: 500px;
  border-radius: 20px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
}
</style>

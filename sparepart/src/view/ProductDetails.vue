<template>
  <Navbar />
  <div class="MainContainer">
    <div>
      <img :src="details.imageurl" alt="lol" />
    </div>
    <div class="Product">
      <h1 class="ProductName">{{ details.name }}</h1>
      <p class="Price">{{ details.price }} RM</p>
    </div>
  </div>
  <div class="Tab">
    <div class="Button">
      <p id="DescriptionP" :onclick="() => (toggle = true)">Description</p>
      <p id="DetailP" :onclick="() => (toggle = false)">Details</p>
    </div>
    <div v-if="toggle" class="DescriptionContainer">
      <h1>Description</h1>
      <hr class="Line" />
      <p class="description">
        {{ details.description }}
      </p>
    </div>
    <div v-else class="DetailContainer">
      <h1>Product Detail</h1>
      <hr class="Line" />
      <div>
        <p>Condition: {{ details.condition }}</p>
      </div>
      <div>
        <p>Minimal Order: {{ details.minorder }}</p>
      </div>
      <div>
        <p>Type: {{ details.type }}</p>
      </div>
      <div>
        <p>Category: {{ details.category }}</p>
      </div>
      <div>
        <p>Contact Number: {{ details.contactnum }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive } from "vue";
import Navbar from "../components/navbar/Navbar.vue";
import { imageUrl } from "../config/image";
import { supabase } from "../supabase";

const props = defineProps({
  id: String,
});

let productID = parseInt(props.id);
const details = ref({});

async function getProductDetail() {
  const { data, error } = await supabase
    .from("productdetail")
    .upsert({ id: productID })
    .select();

  //.select()
  //.eq('id',productID)

  if (data) {
    console.log(data[0]);
    details.value = data[0];
  } else if (error) {
    console.log(error);
  }
}

getProductDetail();

const toggle = ref(true);
const color = ref(true);

watch(toggle, (e) => {
  if (e === false) {
    document.getElementById("DescriptionP").style.color = "black";
    document.getElementById("DetailP").style.color = "#03AC14";
  } else {
    document.getElementById("DescriptionP").style.color = "#03AC14";
    document.getElementById("DetailP").style.color = "black";
  }
});
</script>

<style scoped>
.MainContainer {
  margin: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
}
.Product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0px 200px 0px 0px;
}
.ProductName {
  font-size: 1.28571rem;
}

.Price {
  font-size: 2rem;
}

.description {
  width: 100%;
  height: 300px;
  overflow: scroll;
}

.Tab {
  display: flex;
  flex-direction: column;
}
.Button {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0px 30px 0px 30px;
}

.DescriptionContainer {
  display: flex;
  margin: 0px 30px 0px 30px;
  flex-direction: column;
  justify-content: start;
}

#DescriptionP {
  font-size: 20px;
  margin: 0px 30px 0px 0px;
  color: #03ac14;
}

#DetailP {
  font-size: 20px;
}

.DetailContainer {
  display: flex;
  margin: 0px 30px 0px 30px;
  flex-direction: column;
  justify-content: start;
}
.Line {
  width: 100%;
}
</style>

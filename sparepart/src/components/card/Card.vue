<template>
  <router-link :to="`/product/${product.id}`">
    <div class="CardContainer">
      <div>
        <img :src="product.imageurl" alt="" class="Image" />
      </div>
      <div class="Details">
        <p class="ProductName">{{ product.name }}</p>
        <p class="ProductPrice">{{ product.price }}RM</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
// import { imageUrl } from "../../config/image";

// import { supabase } from "../../supabase";

// const { data, error } = await supabase.rpc("productdetail", { name: product });
// if (data) {
//   console.log(data);
// } else if (error) {
//   console.log(error);
// }
defineProps({
  product: {},
});

// console.log(product);
</script>

<style scoped>
.CardContainer {
  width: 250px;
  border-radius: 8px;
  background-color: #ffff;
  margin: 10px 0px 0px 0px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
}
.Image {
  width: 100%;
  border-radius: 8px 8px 0px 0px;
}

.Details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0px 20px 0px 0px;
}

a {
  text-decoration: none;
  color: black;
}

.ProductName {
  font-size: 20px;
  font-weight: 100;
}

.ProductPrice {
  font-weight: bold;
}
</style>

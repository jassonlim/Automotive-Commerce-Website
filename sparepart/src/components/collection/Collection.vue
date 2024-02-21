<template>
  <div class="CollectionContainer">
    <div>
      <h1 class="ProductTitle">Products</h1>
      <hr class="Line" />
    </div>
    <div class="Collection">
      <div v-for="(product, index) in productData">
        <Card :key="index" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../card/Card.vue";
import { ref, reactive } from "vue";
import { supabase } from "../../supabase";

// const dbdata = ref([]);
const productData = reactive([]);

async function getproduct() {
  // const { data, error } = await supabase.from("productdetail").select();

  const { data, error } = await supabase
    .from("productdetail")
    .select("*")
    .order("id", { ascending: false });

  if (data) {
    console.log("DATA:" + data);
    console.log(data);
  } else if (error) {
    console.log(error);
  }

  // console.log("dbdata:" + dbdata);
  for (let i in data) {
    //console.log(data[i]);
    //console.log("minorder:" + data[i]["imageurl"]);
    // productData.value.push(i);
    if (data[i]["imageurl"] == null) {
      break;
    }
    productData.push(data[i]);
    console.log(productData[0]);
  }
}
getproduct();

const dummyData = ref([
  {
    id: 123456,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
]);

//const dummyData = ref([1,2,3,4,5,6,7,8])
</script>

<style scoped>
.CollectionContainer {
  margin: 0px 60px 0px 60px;
}

.ProductTitle {
  text-decoration: none;
}

.Collection {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>

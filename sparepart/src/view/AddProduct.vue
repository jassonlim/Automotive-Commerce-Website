<template>
  <!-- <p>Please insert an image</p>
  <input type="file" accept="image/*" /> -->
  <NavbarVue />

  <div class="container">
    <div class="name inputs">
      <p class="col-25">Product Name:</p>
      <div class="col-75">
        <input
          type="text"
          v-model="name"
          placeholder="Add Product Name"
          @input="handleInput"
        />
        <img
          :src="previewImage"
          alt=""
          class="previewimage"
          style="height: 150px"
        />
      </div>
    </div>

    <div class="image inputs">
      <p class="col-25">Please insert an image</p>
      <div class="images col-75">
        <input type="file" accept="image/jpeg" @change="uploadImage" />
      </div>
    </div>

    <div class="desc inputs">
      <div class="col-25">Product Description:</div>
      <div class="col-75">
        <textarea
          class="textbox"
          v-model="description"
          placeholder="Add Product Description"
          style="height: 200px"
        ></textarea>
      </div>
    </div>

    <div class="condition inputs">
      <p class="col-25">Condition: {{ condition }}</p>
      <div class="col-75">
        <input
          type="radio"
          name="condition"
          v-model="condition"
          value="New"
          id="radiobtn"
          checked="True"
        />New
        <input
          type="radio"
          name="condition"
          v-model="condition"
          value="Used"
          id="radiobtn"
        />Used
      </div>
    </div>

    <div class="price inputs">
      <p class="col-25">Price: {{ price }} RM</p>
      <div class="col-75">
        <input
          type="number"
          v-model="price"
          placeholder="Add Minimal Order of Product"
          @input="handleInput"
          min="1"
        />
      </div>
    </div>

    <div class="type inputs">
      <p class="col-25">Type:</p>
      <div class="col-75">
        <input
          type="text"
          v-model="type"
          placeholder="Add Product type"
          @input="handleInput"
        />
      </div>
    </div>

    <div class="minorder inputs">
      <p class="col-25">Minimal Order of Product: {{ minorder }}</p>
      <div class="col-75">
        <input
          type="number"
          v-model="minorder"
          placeholder="Add Minimal Order of Product"
          @input="handleInput"
          min="1"
        />
      </div>
    </div>

    <div class="category inputs">
      <p class="col-25">Product Category: {{ category }}</p>
      <div class="col-75">
        <select v-model="category">
          <option disabled value="">Please select one</option>
          <option>wheel</option>
          <option>engine</option>
          <option>else</option>
        </select>
      </div>
    </div>

    <div class="stock inputs">
      <p class="col-25">Number of Stock: {{ stock }}</p>
      <div class="col-75">
        <input
          type="number"
          v-model="stock"
          placeholder="Add the stock of the product"
          @input="handleInput"
          min="1"
        />
      </div>
    </div>

    <div class="stock inputs">
      <p class="col-25">Contact Number: {{ contactnum }}</p>
      <div class="col-75">
        <input
          type="number"
          v-model="contactnum"
          placeholder="Add the contact number"
          @input="handleInput"
          min="1"
        />
      </div>
    </div>

    <div class="inputs">
      <div class="col-25"></div>
      <div class="col-75">
        <button class="submit" @click="addProduct">Add Product</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { supabase } from "../supabase";
import NavbarVue from "../components/navbar/Navbar.vue";

//variable=ref({name:'qwerty'})
//variable=reactive({name:'qwerty'})
//ref=variable.value.name
//reactive=variable.name

const name = ref("");
const description = ref("");
const condition = ref("New");
const type = ref("");
const minorder = ref(0);
const category = ref("");
const price = ref(0);
const stock = ref(0);
const contactnum = ref(0);
let imageurl;
//const images = reactive([]);

const previewImage = ref("");

let latestID = 0;
let imageobj;

async function getlatestid() {
  const { data, error } = await supabase
    .from("productdetail")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);
  if (data) {
    if (data.length == 0) {
      latestID = 0;
    } else {
      latestID = data[0]["id"] + 1;
    }
    console.log(latestID);
  } else if (error) {
    console.log(error);
  }
}

function uploadImage(e) {
  const image = e.target.files[0];
  imageobj = image;
  //console.log(image);
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    previewImage.value = e.target.result;
  };
}

async function storetoBucket(file) {
  await getlatestid();
  console.log("bucket:" + latestID);
  const { data, error } = await supabase.storage
    .from("productimage")
    .upload(latestID + "/" + file["name"], file);

  if (data) {
    console.log(JSON.stringify({ data }));
    //get images
  } else if (error) {
    console.log(error);
    if (error["statusCode"] == "409") {
      alert("please change the image file name");
    }
  }
}

async function addProduct() {
  await storetoBucket(imageobj);
  imageurl =
    "https://onwrrdlkwxjilkfbvwhc.supabase.co/storage/v1/object/public/productimage/" +
    latestID +
    "/" +
    imageobj["name"];
  console.log({
    name: name.value,
    description: description.value,
    //contact number
    condition: condition.value,
    type: type.value,
    minorder: minorder.value,
    category: category.value,
    price: price.value,
    stock: stock.value,
    imageurl: imageurl,
    contactnum: contactnum.value,
  });
  const { data, error } = await supabase.from("productdetail").insert({
    name: name.value,
    description: description.value,
    //contact number
    condition: condition.value,
    type: type.value,
    minorder: minorder.value,
    category: category.value,
    price: price.value,
    stock: stock.value,
    contactnum: contactnum.value,
    imageurl: imageurl,
  });
  if (error) {
    throw error;
  }
  console.log(JSON.stringify({ data }));
}
</script>

<style>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

label {
  padding: 12px 12px 12px 0;
  /* display: inline-block; */
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.inputs:after {
  content: "";
  display: table;
  clear: both;
}
.submit {
  background-color: rgb(3, 172, 14);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: sticky;

  /* float: right; */
}
</style>

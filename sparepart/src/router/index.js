import { createRouter, createWebHistory } from "vue-router";
import ProductDetails from "../view/ProductDetails.vue";
import HomePage from "../view/HomePage.vue";
import AddProduct from "../view/AddProduct.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";

const routes = [
  {
    path: "/product/:id",
    name: "ProductDetails",
    props: true,
    component: ProductDetails,
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/add",
    name: "addProduct",
    component: AddProduct,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

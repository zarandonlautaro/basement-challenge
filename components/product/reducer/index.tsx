import {Product} from "../types";

export let allProducts: Product[] = [];

export function addProduct(product: Product) {
  console.log("product added", product);
  allProducts.push(product);
  localStorage.setItem("store", JSON.stringify(allProducts));
}

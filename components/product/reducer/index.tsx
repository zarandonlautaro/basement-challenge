import {Product} from "../types";

export function addProduct(product: Product) {
  console.log("product added", product);
  localStorage.setItem("store", JSON.stringify(product));
}

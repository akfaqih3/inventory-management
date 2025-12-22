import { CategoryModel } from "./category-model";
import { ProductModel } from "./product-model";

const categoryMock : CategoryModel[] = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Tablet"
  },
  {
    id: 3,
    name: "Accessories"
  },
  {
    id: 4,
    name: "Smart Watch"
  },
  {
    id: 5,
    name: "Smart Watch"
  },
]
export const productMock: ProductModel[] = [
  {
    id: 1,
    name: "Apple MacBook Pro 17\"",
    categoryId: 1,
    price: 2999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 2,
    name: "Microsoft Surface Pro",
    categoryId: 1,
    price: 1999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 3,
    name: "Magic Mouse 2",
    categoryId: 1,
    price: 99,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 4,
    name: "Apple Watch",
    categoryId: 4,
    price: 179,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 5,
    name: "iPad",
    categoryId: 4,
    price: 699,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 6,
    name: "Apple iMac 27\"",
    categoryId: 1,
    price: 3999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 7,
    name: "Apple MacBook Pro 17\"",
    categoryId: 1,
    price: 2999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 8,
    name: "Microsoft Surface Pro",
    categoryId: 1,
    price: 1999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 9,
    name: "Magic Mouse 2",
    categoryId: 1,
    price: 99,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 10,
    name: "Apple Watch",
    categoryId: 4,
    price: 179,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 11,
    name: "iPad",
    categoryId: 4,
    price: 699,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
  {
    id: 12,
    name: "sam",
    categoryId: 1,
    price: 3999,
    quantity: 1,
    createdAt: new Date("2022-01-01T00:00:00.000Z")
  },
]
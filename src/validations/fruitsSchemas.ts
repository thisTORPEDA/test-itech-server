import { date, object, string } from "yup";

export const baseFruitSchema = object().shape({
  name: string().required("Название обязательно"),
  color: string().required("Цвет обязателен"),
  sellBy: date().required("Срок годности обязательно"),
});

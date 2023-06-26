import { z } from "zod";

export const createProductsSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  description: z.string({
    required_error: "Description required",
  }),
  price: z.number({
    required_error: "must be a number",
  }),
  image: z.string({
    required_error: "Image needed",
  }),
  stock: z.number({
    required_error: "Stock required",
  }),
  category: z.array(z.string(), {
    required_error: "Category needed",
  }),
});

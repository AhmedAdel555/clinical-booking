import { z } from "zod";


export const catSchema=z.object({
    catalog_name: z.string().min(3)
})
export type permBodyDto = z.infer<typeof catSchema>;

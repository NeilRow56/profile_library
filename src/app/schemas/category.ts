import { z } from 'zod'

export const categorySchema = z.object({
  // id is used so that we can use the same form for editing and creation
  id: z.number().default(-1),
  name: z
    .string()
    .min(2, {
      message: 'Category must be entered'
    })
    .max(20)
})

// model BookCategory {
//  category_id         Int                   @id @default(autoincrement())
//  category_name       String                @db.VarChar(255)
//  bookCategoryLinks   BookCategoryLink[]

//   @@map("categories")
//}

'use server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

////////////////////////////////////////////////////////////////////////////////
//              Category
////////////////////////////////////////////////////////////////////////////////

//category_name is the prisma.schema name
//name comes from the form
//path is so that we can revalidate data

export async function addCategory(name: string, path: string) {
  try {
    const category = await prisma.$transaction([
      prisma.bookCategory.create({
        data: {
          category_name: name
        }
      })
    ])

    revalidatePath(path)
    return category
  } catch (error) {
    throw error
  }
}

// // Create a product
// export async function createProduct(data: z.infer<typeof insertProductSchema>) {
//     try {
//       const product = insertProductSchema.parse(data)
//       await prisma.product.create({ data: product })

//       revalidatePath('/admin/products')

//       return {
//         success: true,
//         message: 'Product created successfully'
//       }
//     } catch (error) {
//       return { success: false, message: formatError(error) }
//     }
//   }

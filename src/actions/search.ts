'use server'

import { redirect } from 'next/navigation'

export async function doSearch(formData: FormData) {
  const search_by = formData.get('search_by') as string
  const search = formData.get('search') as string

  if (search && search_by) {
    redirect(
      `/search?query=${encodeURIComponent(search)}&search_by=${encodeURIComponent(search_by)}`
    )
  }
}

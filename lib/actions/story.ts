'use server'

import { redirect } from 'next/navigation'

export async function uploadStory(formData: FormData) {
  redirect('/new-story/complete')
}

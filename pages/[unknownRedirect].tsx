/*
  Catch all possible routes and redirect the user to the root slug.
  Any predefined route takes precedence so this won't override them.
*/
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function RedirectUnknownSlug() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/play')
  }, [router])
}

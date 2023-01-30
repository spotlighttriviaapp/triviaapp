import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">-----</h1>
        <Link href="/test" className="underline">
          Go to -Test-
        </Link>
      </div>
    </PageWrapper>
  )
}

import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Test() {
  return (
    <PageWrapper>
      <div className="container mx-auto bg-slate-400">
        <h1 className="text-3xl font-bold">-----</h1>
        <Link href="/" className="underline">
          Go to -Home-
        </Link>
      </div>
    </PageWrapper>
  )
}

import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Viewer() {
  return (
    <PageWrapper>
      <div className="container mx-auto bg-slate-400">
        <h1 className="pb-8 text-3xl font-bold">-----</h1>
        Go to →
        <Link href="/" className="pl-8 underline">
          Home
        </Link>
        <Link href="/admin" className="pl-6 underline">
          Admin
        </Link>
        <Link href="/host" className="pl-6 underline">
          Host
        </Link>
        <Link href="/viewer" className="pl-6 underline">
          Viewer
        </Link>
        <text className="pl-6 font-bold">Player</text>
      </div>
    </PageWrapper>
  )
}

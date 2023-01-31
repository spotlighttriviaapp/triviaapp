import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Admin() {
  return (
    <PageWrapper>
      <div className="container mx-auto bg-slate-100">
        <h1 className="pb-8 text-3xl font-bold">-----</h1>
        Go to →
        <Link href="/" className="pl-8 underline">
          Home
        </Link>
        <text className="pl-6 font-bold">Admin</text>
        <Link href="/host" className="pl-6 underline">
          Host
        </Link>
        <Link href="/viewer" className="pl-6 underline">
          Viewer
        </Link>
        <Link href="/play" className="pl-6 underline">
          Player
        </Link>
      </div>
    </PageWrapper>
  )
}

import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Admin() {
  return (
    <PageWrapper>
      <div className="">
        <h1 className="bg-black p-8 text-3xl font-bold text-white">
          Spotlight Trivia
        </h1>
        <div className="bg-slate-200 px-8 py-3">
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
      </div>
    </PageWrapper>
  )
}

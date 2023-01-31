import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Viewer() {
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
          <Link href="/admin" className="pl-6 underline">
            Admin
          </Link>
          <Link href="/host" className="pl-6 underline">
            Host
          </Link>
          <text className="pl-6 font-bold">Viewer</text>
          <Link href="/play" className="pl-6 underline">
            Player
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}

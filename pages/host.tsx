import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Host() {
  return (
    <PageWrapper>
      <div className="">
        <h1 className="bg-black p-8 text-3xl font-bold text-white">
          Spotlight Trivia
        </h1>
        <div className="bg-slate-200 px-8 py-3">
          <text className="text-slate-500">Go to → </text>
          <Link href="/admin" className="pl-6 underline">
            Admin
          </Link>
          <text className="pl-6 font-bold">Host</text>
          <Link href="/viewer" className="pl-6 underline">
            Viewer
          </Link>
          <Link href="/" className="pl-6 underline">
            Player
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}

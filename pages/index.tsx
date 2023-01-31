import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <div className="">
        <h1 className="bg-black p-8 text-3xl font-bold text-white">
          Spotlight Trivia
        </h1>
        <div className="bg-slate-200 px-8 py-3">
          <text className="text-slate-500">Go to → </text>
          <text className="pl-6 font-bold">Home</text>
          <Link href="/admin" className="pl-6 underline">
            Admin
          </Link>
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
      <hr />
    </PageWrapper>
  )
}

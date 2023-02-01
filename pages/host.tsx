import Link from 'next/link'
import PageWrapper from './pageWrapper'
import { GiGears } from 'react-icons/gi'

export default function Host() {
  return (
    <PageWrapper>
      <div className="">
        <div className="w-full bg-black p-4">
          <Link href="/host">
            <h1 className="flex w-fit space-x-3 rounded-lg bg-gray-900/75 p-3 px-5 text-3xl font-bold text-white hover:bg-gray-800/75">
              <GiGears />
              <span>Spotlight Trivia</span>
            </h1>
          </Link>
        </div>
        <div className="bg-slate-200 px-8 py-3">
          <text className="text-slate-500">Go to → </text>
          <Link href="/admin" className="pl-6 underline">
            Admin
          </Link>
          <text className="pl-6 font-bold">Host</text>
          <Link href="/view" className="pl-6 underline">
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

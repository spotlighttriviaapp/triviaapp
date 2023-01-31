import Link from 'next/link'
import PageWrapper from './pageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <div className="container mx-auto">
        <h1 className="pb-8 text-3xl font-bold">-----</h1>
        Go to → <text className="pl-6 font-bold">Home</text>
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
    </PageWrapper>
  )
}

import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'
import Link from 'next/link'
import PageWrapper from './pageWrapper'
import { GiGears } from 'react-icons/gi'

export default function Home() {
  const ref = useRef<FireworksHandlers>(null)

  const toggle = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }

  return (
    <PageWrapper>
      <div className="w-full bg-black p-4">
        <Link href="/">
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
        <Link href="/host" className="pl-6 underline">
          Host
        </Link>
        <Link href="/view" className="pl-6 underline">
          Viewer
        </Link>
        <text className="pl-6 font-bold">Player</text>
      </div>
      <hr />
      <div className="pt-6 pl-8">
        <button
          onClick={() => toggle()}
          className="rounded-lg bg-blue-900 p-3 px-5 text-white"
        >
          &gt;&gt;&emsp;
          <span className="underline decoration-dotted">
            Click here to toggle the Fireworks
          </span>
          &emsp;&lt;&lt;
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          position: 'absolute',
          zIndex: -1,
        }}
      >
        <Fireworks
          ref={ref}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
          className="bg-transparent"
        />
      </div>
    </PageWrapper>
  )
}

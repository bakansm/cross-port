import { useRouter } from 'next/router'
import { useState } from 'react'
import CommunityModal from './CommunityModal'
import Link from 'next/link'

export default function Navbar() {
  const [showCommunity, setShowCommunity] = useState<boolean>(false)

  const router = useRouter()

  const handleCommunityMouseOver = () => {
    setShowCommunity(true)
  }

  const handleCommunityMouseOut = async () => {
    setShowCommunity(false)
  }

  const handleNavbarClick = (path: string) => {
    router.push(path)
  }

  return (
    <div>
      <ul className="flex text-slate-500">
        <li>
          <div
            className="relative h-full w-full"
            onMouseOver={handleCommunityMouseOver}
            onMouseOut={handleCommunityMouseOut}
          >
            <button className="rounded-xl px-6 py-2 font-semibold hover:bg-slate-100">
              Community
            </button>
            {showCommunity && <CommunityModal />}
          </div>
        </li>
        <li>
          <button
            className="rounded-xl px-6 py-2 font-semibold hover:bg-slate-100"
            onClick={() => handleNavbarClick('/')}
          >
            Blog
          </button>
        </li>
        <li>
          <button className="rounded-xl px-6 py-2 font-semibold hover:bg-slate-100">
            <Link href="https://faucet-cross-port.vercel.app">
              Faucet
            </Link>
          </button>
        </li>
      </ul>
    </div>
  )
}

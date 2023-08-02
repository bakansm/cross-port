import { store } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { connect } from '@/redux/connectWalletReducer'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { connectMetamask } from '@/contract/connectMetamask'

export default function MainSection() {
  const state = store.getState().connectWallet
  const router = useRouter()
  const { status } = useSession()
  const dispatch = useDispatch()

  const clickToScrollToId = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGetStartedClick = async () => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (!state.isConnected) {
      await connectMetamask()
        .then((value) => dispatch(connect(value)))
        .catch((error) => console.log(error))
      router.push('/generate-crossport')
    } else {
      router.push('/generate-crossport')
    }
  }

  return (
    <div
      id="main-section"
      className="flex h-screen w-full snap-start items-center justify-center bg-zinc-900"
    >
      <div className="space-y-8">
        <div className="animate-[slideFromTop_1s_ease-in-out]">
          <p className="text-center text-4xl text-white">
            Welcome to
          </p>
          <p className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-center text-6xl font-bold text-transparent">
            CrossPort
          </p>
        </div>
        <div className="w-fit animate-[slideFromBottom_1s_ease-in-out] space-x-8">
          <button
            className="w-36 animate-[slideFromLeft_1s_ease-in-out] rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
          <button
            onClick={() => clickToScrollToId('#who-we-are-section')}
            className="transtion w-36 animate-[slideFromRight_1s_ease-in-out] rounded-xl bg-white px-4 py-2 font-semibold text-zinc-900 outline outline-1 outline-slate-600 duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          >
            Explore now
          </button>
        </div>
      </div>
    </div>
  )
}

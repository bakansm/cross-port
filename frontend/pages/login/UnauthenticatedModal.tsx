import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function UnauthenticatedModal() {
  const googleIcon = (
    <FontAwesomeIcon icon={faGoogle} size="xl" className="pr-2" />
  )
  const facebookIcon = (
    <FontAwesomeIcon icon={faFacebook} size="xl" className="pr-2" />
  )

  const router = useRouter()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex animate-[popin_0.7s_ease-in-out] flex-col space-y-20 rounded-2xl p-10 mobile:bg-none tablet:bg-slate-50">
        <div className="space-y-4">
          <p className="text-4xl font-semibold text-slate-700">
            Log in to Soundbound
          </p>
          <p className="text-xl font-semibold text-slate-500">
            Welcome back!
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => signIn('google')}
            className="w-full rounded-xl bg-slate-700 py-4 text-white hover:-translate-y-1 hover:bg-slate-600 hover:shadow-md hover:shadow-gray-500"
          >
            {googleIcon} Sign in with Google
          </button>
          <button
            onClick={() => signIn('facebook')}
            className="w-full rounded-xl bg-slate-700 py-4 text-white hover:-translate-y-1 hover:bg-slate-600 hover:shadow-md hover:shadow-gray-500"
          >
            {facebookIcon} Sign in with Facebook
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full rounded-xl py-4 text-slate-700 hover:scale-105"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

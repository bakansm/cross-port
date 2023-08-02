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

  const handleLoginFacebook = async () => {
    await signIn('google')
    router.push('/')
  }

  const handleLoginGoogle = async () => {
    await signIn('facebook')
    router.push('/')
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex animate-[popin_0.3s_ease-in-out] flex-col space-y-20 rounded-2xl bg-slate-50 p-10">
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
            onClick={handleLoginGoogle}
            className="w-full rounded-xl bg-slate-700 py-4 text-white hover:bg-slate-600"
          >
            {googleIcon} Sign in with Google
          </button>
          <button
            onClick={handleLoginFacebook}
            className="w-full rounded-xl bg-slate-700 py-4 text-white hover:bg-slate-600"
          >
            {facebookIcon} Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

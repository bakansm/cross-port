// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faGoogle,
//   faFacebook,
// } from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function UnauthenticatedModal() {
  // const googleIcon = (
  //   <FontAwesomeIcon
  //     icon={faGoogle}
  //     size="xl"
  //     className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
  //   />
  // )
  // const facebookIcon = (
  //   <FontAwesomeIcon icon={faFacebook} size="xl" className="pr-2" />
  // )

  const router = useRouter()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className="flex animate-[popin_0.7s_ease-in-out] flex-col space-y-20 rounded-2xl from-purple-500 via-pink-500 to-blue-500 p-10 mobile:bg-none tablet:bg-gradient-to-tr">
        <div className="space-y-4">
          <p className="text-4xl font-semibold text-white">
            Log in to CrossPort
          </p>
          <p className="text-xl font-semibold text-zinc-100">
            Welcome back!
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => signIn('google')}
            className="w-full rounded-xl bg-white py-4 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          >
            <p className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text font-semibold text-transparent">
              {/* {googleIcon}  */}
              Sign in with Google
            </p>
          </button>
          <button
            onClick={() => signIn('facebook')}
            className="bg-zinc-000 w-full rounded-xl bg-white py-4 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          >
            <p className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text font-semibold text-transparent">
              {/* {facebookIcon} */}
              Sign in with Facebook
            </p>
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full rounded-xl py-4 text-white hover:scale-105"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

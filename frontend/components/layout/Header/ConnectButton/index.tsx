import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import AuthenticatedButton from './AuthenticatedButton'

export default function ConnectButton() {
  const { status } = useSession()

  const router = useRouter()

  const handleSignInButtonClick = (path: string) => {
    router.push(path)
  }

  if (status === 'unauthenticated')
    return (
      <button
        className="rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 px-6 py-1 text-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
        onClick={() => handleSignInButtonClick('/login')}
      >
        Sign in
      </button>
    )
  else if (status === 'authenticated') {
    return <AuthenticatedButton />
  }
}

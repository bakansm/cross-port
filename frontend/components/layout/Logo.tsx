import { useRouter } from 'next/router'

export default function Logo() {
  const router = useRouter()

  const handleLogoClicked = (path: string) => {
    router.push(path)
  }

  return (
    <button
      className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent"
      onClick={() => handleLogoClicked('/')}
    >
      CrossPort
    </button>
  )
}

import { useRouter } from 'next/router'

export default function Logo() {
  const router = useRouter()

  const handleLogoClicked = (path: string) => {
    router.push(path)
  }

  return (
    <button
      className="text-2xl font-semibold text-slate-600"
      onClick={() => handleLogoClicked('/')}
    >
      CrossPort
    </button>
  )
}

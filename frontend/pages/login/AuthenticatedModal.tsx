import { useRouter } from 'next/router'

export default function AuthenticatedModal() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className="flex animate-[popin_0.3s_ease-in-out] flex-col space-y-20 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 p-10">
        <div className="space-y-4">
          <p className="text-4xl font-semibold text-white">
            You are already logged in
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => router.push('/')}
            className="bg-zinc-000 w-full rounded-xl bg-white py-4 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          >
            <p className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text font-semibold text-transparent">
              Return to Home Page
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

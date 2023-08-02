import { useRouter } from 'next/router'

export default function AuthenticatedModal() {
  const router = useRouter()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex animate-[popin_0.3s_ease-in-out] flex-col space-y-20 rounded-2xl bg-slate-50 p-10">
        <div className="space-y-4">
          <p className="text-4xl font-semibold text-slate-700">
            You are already logged in
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => router.push('/')}
            className="w-full rounded-xl bg-slate-700 py-4 text-white hover:bg-slate-600"
          >
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

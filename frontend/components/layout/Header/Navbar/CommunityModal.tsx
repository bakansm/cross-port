export default function CommunityModal({ open }: any) {
  return (
    <div className="absolute left-0 top-full w-full animate-[popin_0.15s_ease-in-out] overflow-hidden rounded-xl bg-zinc-800 shadow-lg transition-all">
      <a
        href="#"
        className="block px-4 py-2 text-lg  text-white hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Discord
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg text-white hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Facebook
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Twitter
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Telegram
      </a>
    </div>
  )
}

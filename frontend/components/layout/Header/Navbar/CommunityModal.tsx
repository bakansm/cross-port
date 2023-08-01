export default function CommunityModal({ open }: any) {
  return (
    <div className="absolute left-0 top-full w-full animate-[popin_0.15s_ease-in-out] overflow-hidden rounded-xl bg-white shadow-lg transition-all">
      <a
        href="#"
        className="block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50"
      >
        Discord
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
      >
        Facebook
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
      >
        Twitter
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
      >
        Telegram
      </a>
    </div>
  )
}

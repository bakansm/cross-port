import { signOut } from 'next-auth/react'
import { disconnect } from '@/redux/connectWalletReducer'
import { useDispatch } from 'react-redux'

export default function AvtModal() {
  const dispatch = useDispatch()

  const handleLogoutBtnClick = () => {
    signOut()
    dispatch(disconnect())
  }

  return (
    <div className="w-58 absolute right-0 z-10 animate-[popin_0.1s_ease-in-out] overflow-hidden rounded-xl bg-zinc-800 shadow-lg">
      <a
        href="#"
        className="block px-4 py-2 text-lg  text-white hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-lg  text-white hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Setting
      </a>
      <button
        onClick={handleLogoutBtnClick}
        className="block whitespace-nowrap px-4 py-2  text-lg text-white hover:bg-zinc-100 hover:bg-opacity-10"
      >
        Sign out
      </button>
    </div>
  )
}

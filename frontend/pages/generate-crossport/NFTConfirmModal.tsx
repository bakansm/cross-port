import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { store } from '@/redux/store'

export default function NFTConfirmModal({ onClose }: any) {
  const googleIcon = (
    <FontAwesomeIcon icon={faGoogle} size="xl" className="pr-2" />
  )
  const facebookIcon = (
    <FontAwesomeIcon icon={faFacebook} size="xl" className="pr-2" />
  )

  const copyIcon = (
    <FontAwesomeIcon
      icon={faCopy}
      className="rounded-full p-2 text-white hover:bg-black hover:bg-opacity-10"
    />
  )

  const address = store.getState().connectWallet.address

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-zinc-700 bg-opacity-50 backdrop-blur-sm">
      <div className="mb-10 animate-pulse text-4xl font-extrabold text-white">
        CrossPort is generated successfully
      </div>
      <div className="flex w-fit animate-[popin_0.3s_ease-in-out] flex-col items-center space-y-2 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 p-6 shadow-xl">
        <Image
          src="https://ipfs.io/ipfs/QmXjBGaQmCFsUgx8cHdtAYxjsGy7wqbergwLrA4yLZzXnT"
          alt="nft-token"
          className="rounded-xl outline-2 outline-white"
          width={400}
          height={400}
        />
        <p className="w-full border-t-2 border-t-white pt-2 text-center text-xl font-bold text-white">
          Token 1r85udfyg
        </p>
        <div className="flex w-full justify-between">
          <p className="w-full text-base italic text-white">
            Address: {address?.slice(0, 5)}...{address?.slice(-6, -1)}
          </p>
          <button className="text-base">{copyIcon}</button>
        </div>
        <div className="w-full space-y-2">
          <p className="w-full text-base font-semibold text-white">
            Connected Social
          </p>
          <div className="w-full space-x-2 text-white">
            <button className="rounded-full hover:scale-105">
              {googleIcon}
            </button>
            <button className="rounded-full hover:scale-105">
              {facebookIcon}
            </button>
          </div>
        </div>
        <div className="w-full pt-4">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-white py-2 shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

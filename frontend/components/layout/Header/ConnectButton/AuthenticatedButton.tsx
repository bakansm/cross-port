import { connectMetamask } from '@/contract/connectMetamask'
import { useState } from 'react'
import Image from 'next/image'
import avatar from '@/assets/images/download.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from '@/redux/connectWalletReducer'
import { RootState } from '@/redux/store'
import AvtModal from './AvtModal'

export default function AuthenticatedButton() {
  const dispatch = useDispatch()

  const [showAvt, setShowAvt] = useState<boolean>(false)

  const handleAvtMouseOver = async () => {
    setShowAvt(true)
  }

  const handleAvtMouseOut = async () => {
    setShowAvt(false)
  }

  const address = useSelector(
    (state: RootState) => state.connectWallet.address
  )

  const handleConnectWalletButtonClick = async () => {
    await connectMetamask()
      .then((value) => dispatch(connect(value)))
      .catch((error) => console.log(error))
  }

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <button className="block w-fit rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 bg-clip-text px-6 py-1 text-transparent text-white">
          {address.slice(0, 15)}...
        </button>
      ) : (
        <button
          className="w-fit rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 px-6 py-1 text-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
          onClick={handleConnectWalletButtonClick}
        >
          Connect Wallet
        </button>
      )}
      <div
        className="relative"
        onMouseOver={handleAvtMouseOver}
        onMouseOut={handleAvtMouseOut}
      >
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={avatar}
            fill
            sizes="large"
            alt="Your avatar"
          />
        </button>
        {showAvt && <AvtModal />}
      </div>
    </div>
  )
}

import axios from 'axios'
import { useState } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { store } from '@/redux/store'

export default function GenerateCrossport() {
  const [isLoading, setIsLoading] = useState(false)
  const state = store.getState().connectWallet

  const handleGenCP = async () => {
    setIsLoading(true)
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://34.232.46.225:9001/nft/generate/${state.address}`,
    }

    axios
      .request(config)
      .then((response) => {
        setIsLoading(false)
        alert(response.data.message)
      })
      .catch((error) => {
        setIsLoading(false)
        alert(error)
      })
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner text="Generating" />
      ) : (
        <div className="flex h-screen items-center justify-center">
          <button
            className="rounded-xl bg-slate-700 px-4 py-2 text-white duration-300 ease-in-out hover:scale-110"
            onClick={handleGenCP}
          >
            Generate crossport
          </button>
        </div>
      )}
    </>
  )
}

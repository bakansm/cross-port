import axios from 'axios'
import { ReactElement, useState } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import { store } from '@/redux/store'
import type { NextPageWithLayout } from '../_app'
import BaseLayout from '@/layouts/BaseLayout'
import NFTConfirmModal from './NFTConfirmModal'
import { checkOwnerSbt } from '@/contract/sbtContract'

const GenerateCrossportPage: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const state = store.getState().connectWallet
  const [showNFTConfirmation, setShowNFTConfirmation] =
    useState<boolean>(false)

  const handleGenCP = async () => {
    if (state.address) {
      await checkOwnerSbt(state.address)
        .then((response) => {
          if (response) {
            setIsLoading(true)
            const config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: `https://fe4d-2406-da18-19d-6400-fc4-24e0-d6d4-4cc3.ngrok-free.app/nft/generate/${state.address}`,
            }

            axios
              .request(config)
              .then(() => {
                setIsLoading(false)
                setShowNFTConfirmation(true)
              })
              .catch((error) => {
                setIsLoading(false)
                alert(error)
              })
          } else {
            alert('Cannot generate, ISoulBondT is existed')
          }
        })
        .catch((error) => alert(error))
    }
  }

  const handleCloseModal = () => {
    setShowNFTConfirmation(false)
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner text="Generating" />
      ) : (
        <>
          <div className="flex h-screen items-center justify-center bg-zinc-900">
            <button
              className="w-fit animate-[slideFromLeft_1s_ease-in-out] rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-700"
              onClick={handleGenCP}
            >
              Generate ISoulBondT
            </button>
          </div>
          {showNFTConfirmation && (
            <NFTConfirmModal onClose={handleCloseModal} />
          )}
        </>
      )}
    </>
  )
}

GenerateCrossportPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <BaseLayout>{page}</BaseLayout>
}

export default GenerateCrossportPage

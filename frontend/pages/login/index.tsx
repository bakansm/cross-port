import { useSession } from 'next-auth/react'
import UnauthenticatedModal from './UnauthenticatedModal'
import LoadingSpinner from '@/components/LoadingSpinner'
import BlankLayout from '@/layouts/BlankLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import AuthenticatedModal from './AuthenticatedModal'

const LoginPage: NextPageWithLayout = () => {
  const { status } = useSession()

  if (status === 'unauthenticated') {
    return <UnauthenticatedModal />
  } else if (status === 'loading') {
    return <LoadingSpinner text={'Loggin In'} />
  } else {
    return <AuthenticatedModal />
  }
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>
}

export default LoginPage

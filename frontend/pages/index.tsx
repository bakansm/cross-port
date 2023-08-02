import WhoWeAreSection from './WhoWeAreSection'
import OurSolutionSection from './OurSolutionSection'
import MainSection from './MainSection'
import { ReactElement } from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="h-auto">
      <MainSection />
      <WhoWeAreSection />
      <OurSolutionSection />
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}

export default HomePage

import WhoWeAreSection from './WhoWeAreSection'
import OurSolutionSection from './OurSolutionSection'
import MainSection from './MainSection'
import { ReactElement } from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="snap-y snap-mandatory bg-red-400 mobile:px-2 laptop:px-0">
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

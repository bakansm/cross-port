import WhoWeAreSection from './WhoWeAreSection'
import OurSolutionSection from './OurSolutionSection'
import MainSection from './MainSection'

export default function Home() {
  return (
    <div className="h-auto">
      <MainSection />
      <WhoWeAreSection />
      <OurSolutionSection />
    </div>
  )
}

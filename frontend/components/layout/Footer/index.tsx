import About from './About'
import Community from './Community'
import CrossPort from './CrossPort'
import Introduce from './Introduce'
import Support from './Support'

export default function Footer() {
  return (
    <div className="relative flex w-full items-start justify-center bg-slate-50 py-16 text-slate-600">
      <div className="flex w-3/4 flex-wrap items-start justify-between sm:space-y-10 lg:space-x-40 lg:space-y-0">
        <div className="flex w-full sm:flex-grow lg:flex-1">
          <Introduce />
        </div>
        <div className="flex w-full items-start justify-between sm:flex-grow lg:flex-1">
          <CrossPort />
          <About />
          <Community />
          <Support />
        </div>
      </div>
    </div>
  )
}

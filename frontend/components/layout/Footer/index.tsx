import About from './About'
import Community from './Community'
import CrossPort from './CrossPort'
import Introduce from './Introduce'
import Support from './Support'

export default function Footer() {
  return (
    <div className="flex w-full snap-end items-center justify-center bg-slate-50 py-16 text-slate-600">
      <div className="flex flex-wrap items-start justify-between mobile:w-full mobile:gap-10 mobile:px-4 laptop:w-3/4 laptop:gap-40 laptop:px-0">
        <div className="mobile:flex-grow laptop:flex-1">
          <Introduce />
        </div>
        <div className="flex items-start justify-between mobile:flex-grow tablet:text-xl laptop:flex-1">
          <CrossPort />
          <About />
          <Community />
          <Support />
        </div>
      </div>
    </div>
  )
}

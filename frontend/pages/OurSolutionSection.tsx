import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OurSolutionSection() {
  const arrowUpIcon = (
    <FontAwesomeIcon
      icon={faArrowUp}
      className="mr-4 animate-[slideFromBottom_1s_ease-in-out_infinite] text-slate-700"
    />
  )

  return (
    <div
      id="our-solution-section"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <div className="w-1/2 animate-[slideFromTop_1s_ease-in-out] space-y-8">
        <p className="text-center text-4xl text-slate-600">
          Our Solution
        </p>
        <p className="text-justify text-xl text-slate-600">
          Lorem ipsum dolor sit amet. Et galisum architecto ex dolores
          quisquam aut veritatis quaerat aut voluptatem incidunt sit
          nulla ratione aut quas delectus ex nostrum expedita. Quo
          dolorum natus eos voluptas expedita qui minus ipsa non quam
          beatae est asperiores mollitia et totam adipisci et pariatur
          deleniti! <br /> <br />
          In dolor dolorem hic iure recusandae hic galisum earum in
          ipsum corrupti sit debitis architecto aut quia quam sed
          voluptates tempore. Vel placeat nihil 33 officiis doloremque
          et autem eaque! Ea ratione nesciunt sed voluptas nostrum non
          facilis iure! <br /> <br />
          Qui recusandae sint sed sunt minima eos asperiores dolorem
          et esse placeat sit dolorem sint et voluptates suscipit sed
          molestias voluptas. Hic repellat harum et saepe tempore in
          optio accusantium. In quidem odio et repellat cumque aut
          totam esse ad quod nobis est eius quod? Ad dicta ducimus ut
          molestiae laudantium qui nobis molestiae et reprehenderit
          libero.
        </p>
      </div>
      <div className="absolute bottom-0 mb-6 w-fit hover:scale-105">
        <button
          className="font-semibold text-slate-600 hover:underline"
          onClick={() =>
            scroll.scrollToTop({
              duration: 1000,
              smooth: 'easeInOutQuart',
            })
          }
        >
          {arrowUpIcon}Go to Top
        </button>
      </div>
    </div>
  )
}

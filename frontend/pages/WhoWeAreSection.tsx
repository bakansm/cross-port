import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhoWeAreSection() {
  const arrowDownIcon = (
    <FontAwesomeIcon
      icon={faAnglesDown}
      className="mr-4 animate-[slideFromTop_1s_ease-in-out_infinite] text-slate-700"
    />
  )

  const clickToScrollToId = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      id="who-we-are-section"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <div className="w-1/2 animate-[slideFromTop_1s_ease-in-out] space-y-8">
        <p className="text-center text-4xl text-slate-600">
          Who are we?
        </p>
        <p className="text-justify text-xl text-slate-600">
          Sit distinctio dolor qui necessitatibus saepe rem ipsa
          aliquam quo libero rerum. In sint dolorem eos laborum
          excepturi non cupiditate dolorem et ipsum atque non
          assumenda quibusdam aut obcaecati fugiat? Ut omnis incidunt
          non blanditiis nemo aut excepturi ipsum qui nihil labore sit
          nemo ullam eos esse odio eos rerum pariatur! <br /> <br />
          Et sunt minima qui saepe quae non beatae expedita qui
          veritatis illum sed expedita nemo qui nemo recusandae? Non
          quaerat perferendis qui sapiente voluptatum et internos
          voluptas qui ipsa temporibus et quas quisquam in velit
          ratione ut expedita consequatur. Est soluta odit et nihil
          sunt ea molestiae illum et distinctio nemo. <br /> <br />
          In voluptates praesentium ut autem molestiae eum recusandae
          modi sed error velit? Qui culpa facilis ex quas mollitia ea
          officiis omnis est nostrum sunt in assumenda dolores hic
          minima soluta ut recusandae accusantium. Vel quia modi eos
          quae rerum quo temporibus facilis qui deleniti suscipit non
          enim obcaecati et necessitatibus dolores aut aliquid omnis.
          Et rerum quos qui numquam assumenda rem similique autem.
        </p>
      </div>
      <div className=" absolute bottom-0 mb-6 w-fit animate-[slideFromBottom_1s_ease-in-out] hover:scale-105">
        <button
          className="font-semibold text-slate-600 hover:underline"
          onClick={() => clickToScrollToId('#our-solution-section')}
        >
          {arrowDownIcon}Go down
        </button>
      </div>
    </div>
  )
}

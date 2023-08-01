export default function About() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">About</h2>
      <ul className="space-y-2 text-xl text-slate-400">
        <li className="hover:text-slate-700">
          <a href="#">Docs</a>
        </li>
        <li className="hover:text-slate-700">
          <a href="#">Careers</a>
        </li>
        <li className="hover:text-slate-700">
          <a href="#">FAQs</a>
        </li>
      </ul>
    </div>
  )
}

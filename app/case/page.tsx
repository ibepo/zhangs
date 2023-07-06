import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col  mt-10 justify-center items-center gap-4">
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <Link className="text-2xl" href="/case/useState">
            useState
          </Link>
        </li>
        <li>
          <Link className="text-2xl" href="/case/useEffect">
            useEffect
          </Link>
        </li>
      </ul>
    </div>
  )
}

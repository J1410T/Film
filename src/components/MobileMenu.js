import React from "react"
import { Link } from "react-router-dom"
const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5  flex-col border-2 border-grey-800 flex animate-pulse">
      <div className="flex flex-col gap-4">
        <Link to={`/`}>
          <div className="px-3 text-center text-white hover:underline">
            Home
          </div>
        </Link>
        <Link to={`/news`}>
          <div className="px-3 text-center text-white hover:underline">
            News & popular
          </div>
        </Link>
        <Link to={"/about"}>
        <div className="px-3 text-center text-white hover:underline">
            About
          </div>
        </Link>
        <Link to={"/FilmsManagement"}>
          <div className="px-3 text-center text-white hover:underline">
            Add Film
          </div>
        </Link>
      </div>
    </div>
  )
}
export default MobileMenu

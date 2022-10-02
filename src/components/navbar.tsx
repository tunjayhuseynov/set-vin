import { Link, NavLink } from "react-router-dom"
import MobileNavbar from "./mobileNavbar"


export default function Navbar() {


  return (
    <div className="h-[80px] w-full bg-blue-500 px-24 relative">
      <div className="flex items-center justify-center md:justify-between h-full">
        <div className="text-white text-4xl font-bold FLibre tracking-wide">
          <Link to="/" className="text-white hover:text-white">
            Setvin.com
          </Link>
        </div>
        <ul className="space-x-5 justify-center mb-0 hidden md:flex">
          <Li className="group">
            Sample Reports
            <ul className="absolute bg-blue-500 pt-8 w-full hidden group-hover:flex flex-col space-y-2 items-center pb-2">
              <Li>
                <a href="https://api.allreports.tools/page-carfax-example/" target={"_blank"} className="text-white hover:text-white">Carfax</a>
              </Li>
              <Li>
                <a href="https://api.allreports.tools/page-autocheck-example/" target="_blank" className="text-white hover:text-white">AutoCheck</a>
              </Li>
            </ul>
          </Li>
          <Li to="/faq">
            FAQ
          </Li>
          <Li to="/contact">
            Contact Us
          </Li>
        </ul>
        <MobileNavbar />
      </div>
    </div>
  )
}

export const Li = ({ children, className, black = false, to }: { to?: string, black?: boolean, children: JSX.Element | string | string[] | JSX.Element[] | (string | JSX.Element)[], className?: string }) => {

  const Class = `${black ? "text-black" : ""} cursor-pointer font-semibold text-white text-lg md:hover:!text-white relative ${className ?? ''}`
  const UnderLine = `md:after:w-full md:after:h-[2px] md:after:bg-white md:after:absolute md:after:-bottom-1 md:after:left-0`

  return <>
    {!(!to) ? <li className="relative">
      <NavLink to={to} className={(navData) => `${(navData.isActive ? `!text-blue-500 md:!text-white ${UnderLine}` : '')} ${Class}` }>
        {children}
      </NavLink>
    </li>
      :
      <li className={Class}>
        {children}
      </li>
    }
  </>
}
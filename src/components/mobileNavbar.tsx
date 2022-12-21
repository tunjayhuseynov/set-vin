import Hamburger from 'hamburger-react'
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { Li } from './navbar'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import useExit from '../hooks/useExit'


export default function MobileNavbar() {
    const [isOpen, setOpen] = useState(false)

    const [ref, exceptRef] = useExit<boolean>(isOpen, setOpen, false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'unset'
        }
    }, [isOpen])


    return (
        <>
            <div ref={exceptRef} className="absolute right-4 pt-1 md:hidden">
                <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen} />
            </div>
            <AnimatePresence>
                {isOpen && <motion.div ref={ref} className="absolute left-0 top-0 z-50 md:hidden"
                    initial={{ x: -250 }}
                    animate={{ x: 0 }}
                    exit={{ x: -250 }}
                    transition={{
                        type: 'tween',
                        duration: .3,
                    }}
                >
                    <div className="bg-white shadow-md flex items-center justify-center" style={{
                        width: 250,
                        height: '100vh',
                        borderRight: '2px solid rgba(255, 255, 255, 0.3)',
                    }}>
                        <ul className="space-y-5 justify-center mb-0 md:hidden flex flex-col">
                            <Li black to="/">
                                Home
                            </Li>
                            <Li black to="/faq">
                                FAQ
                            </Li>
                            <Li black to="/contact">
                                Contact Us
                            </Li>
                            <Li black className="hover:text-black">
                                <span>Sample Reports</span>
                                <ul className="pl-1 pt-2 w-full flex-col space-y-2 items-center pb-2">
                                    <Li black to="/example/carfax" className="!text-black !hover:text-black flex space-y-1 items-center" >
                                        <AiOutlineRight size="15" className="pt-1" />
                                        <span>Carfax</span>
                                    </Li>
                                    <Li black to="/example/autocheck" className="!text-black !hover:text-black flex space-y-1 items-center" >
                                        <AiOutlineRight size="15" className="pt-1" />
                                        <span >AutoCheck</span>
                                    </Li>
                                </ul>
                            </Li>
                        </ul>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

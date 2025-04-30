import React from 'react'

export const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-800 bg-gray-900 relative transition-all">
            <a href="#">
                {/* You might want to replace with a white version of your logo */}
                <img className="h-9 filter brightness-0 invert" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="dummyLogoColored" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-700 bg-gray-800 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-gray-300" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#9CA3AF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#9CA3AF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#A5B4FC" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-600 w-[18px] h-[18px] rounded-full">3</button>
                </div>

                <button className="cursor-pointer px-8 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-full font-medium shadow-lg shadow-indigo-500/20">
                    Login
                </button>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#9CA3AF" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#9CA3AF" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#9CA3AF" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-gray-900 shadow-lg border-t border-gray-800 py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-full text-sm font-medium shadow-lg shadow-indigo-500/20">
                    Login
                </button>
            </div>
        </nav>
    )
}
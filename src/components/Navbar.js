import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex items-center flex-wrap bg-teal-500 p-6 flex-shrink-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <i className="nes-ash mx-3"></i>
                <span className="font-semibold text-xl tracking-tight">Pokémon game</span>
            </Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </Link>
                    <Link href="/pokedex" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Pokédex
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </nav>
    )
}
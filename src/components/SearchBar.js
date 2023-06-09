import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function SearchBar() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState('pikachu')

    useEffect(() => {
        const onChange = async (e) => {
            const {setSelectedPokemon} = e.target;
            setQuery(selectedPokemon)
          }
        if (selectedPokemon.length > 3) {
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
        }
      }, [onChange])
    
      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No profile data</p>

    return (
        <div className="flex justify-center nes-field">
        <div className="mb-3 xl:w-96">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
                type="search"
                className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                onChange={onChange} 
                value={selectedPokemon}
            />
            <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
            </span>
            </div>
            <div>
                <h1>{data.name}</h1>
                <Image src={data.sprites.front_default} alt={data.name} width="200" height="200" className="block" />
            </div>
        </div>
        </div>
    )
}
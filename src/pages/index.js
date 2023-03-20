import Head from 'next/head'
import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
    <Layout>
      <div className="nes-container">
        <div className="message-list">
          <div className="message -left">
            <h1 className="text-3xl font-bold underline nes-balloon from-left">
            <i className="nes-pokeball mx-5 my-1"></i>
              Pick your Pokémon
            </h1>
          </div>
          <div className="searchBar">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </Layout>
  )
}
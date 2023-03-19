import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="nes-container p-3 m-3">
        <div className="message-list">
          <div className="message -left">
            <h1 className="text-3xl font-bold underline nes-balloon from-left">
              Pokemon game
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
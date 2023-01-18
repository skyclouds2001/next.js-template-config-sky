import React from 'react'
import type { GetServerSideProps } from 'next'

const Home: React.FC<{ name: string }> = (props) => {
  return (
    <>
      <main>
        <div>next.js template</div>
        <div>{props.name}</div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ name: string }> = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const data: { name: string } = await res.json()
  return { props: { name: data.name } }
}

export default Home

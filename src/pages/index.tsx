import React from 'react'
import PropTypes from 'prop-types'
import type { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Hello from '@/components/hello'
import { increase, decrease } from '@/store'
import type { RootState, AppDispatch } from '@/store'

interface HomeProps {
  name: string
}

const Home: React.FC<HomeProps> = (props) => {
  const value = useSelector<RootState, RootState['hello']['value']>((state) => state.hello.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center flex-col">
        <h1>next.js template</h1>
        <div>{props.name}</div>
        <div>{value}</div>
        <div onClick={() => dispatch(increase())}>+</div>
        <div onClick={() => dispatch(decrease())}>-</div>
        <Hello />
      </main>
    </>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const data: { name: string } = await res.json()
  return { props: { name: data.name } }
}

export default Home

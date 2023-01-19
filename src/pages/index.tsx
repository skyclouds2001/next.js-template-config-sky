import React from 'react'
import PropTypes from 'prop-types'
import type { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
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
      <main>
        <div>next.js template</div>
        <div>{props.name}</div>
        <div>{value}</div>
        <div onClick={() => dispatch(increase())}>+</div>
        <div onClick={() => dispatch(decrease())}>-</div>
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

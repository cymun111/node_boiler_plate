import useStore from '../stores/useStore'

export default function Home() {
  const { count, increment, decrement } = useStore()

  return (
    <div className="page">
      <h1>Home</h1>
      <p>Welcome to the React boilerplate.</p>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

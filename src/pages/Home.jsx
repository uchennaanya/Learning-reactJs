import Counter from "../components/Counter"
import Todo from "../components/Todo"
import Calculator from "./Calculator"

const Home = () => {
    return (
        <>
            <header>
                <h1>Home page</h1>
                <Todo />
                <Counter />
            </header>
            <Calculator />
        </>
    )
}

export default Home

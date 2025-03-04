import Cart from "./Cart"


const Main = () => {
    return (
        <main >
            <h3 className=" font-semibold pb-2">All Users</h3>
            <ul className=" grid gap-y-4 scroll-smooth">
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"employer"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"employer"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"employer"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"employer"} />

            </ul>
        </main>
    )
}

export default Main
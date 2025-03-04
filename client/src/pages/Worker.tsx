import Cart from "../components/Cart"


const Worker = () => {
    return (
        <div>
            <h3 className=" font-semibold pb-2">Employers</h3>
            <ul className=" grid gap-y-4 scroll-smooth">
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
                <Cart role={"worker"} />
            </ul>
        </div>
    )
}

export default Worker
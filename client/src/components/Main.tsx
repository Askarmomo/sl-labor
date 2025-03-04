import Cart from "./Cart"


const Main = () => {

    const role: string = "worker"

    return (
        <main >
            <h3 className=" font-semibold pb-2">All Users</h3>
            <ul className=" grid gap-y-4 scroll-smooth">
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />
                <Cart role={role} />

            </ul>
        </main>
    )
}

export default Main
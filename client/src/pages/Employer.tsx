import Cart from "../components/Cart"


const Employer = () => {
    return (
        <div>
            <h3 className=" font-semibold pb-2">Employers</h3>
            <ul className=" grid gap-y-4 scroll-smooth">
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
                <Cart role="employer" />
            </ul>
        </div>
    )
}

export default Employer
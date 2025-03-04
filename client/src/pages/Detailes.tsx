import workerImg from "/assets/images/worker.png"
import employerImage from "/assets/images/contract.png"

const Detailes = () => {

    const worker = true

    return (
        <div>

            <h4 className=" text-xl font-bold text-center pb-4 underline">House cleaner</h4>
            <div className=" flex items-center space-x-4 bg-blue-100 mb-2 p-1 rounded-xl">
                <img className=" h-[170px] w-[170px] object-cover" src="https://t4.ftcdn.net/jpg/01/85/03/97/360_F_185039759_C6rijMdG2F8NoBRYA8NiUjlHMKU6vjKy.jpg" alt="clean-service-image" />
                <img className="h-[170px] w-[170px]" src={worker ? workerImg : employerImage} alt=" worker" />
            </div>
            <span className=" text-blue-800">Detailes</span>
            <div className=" space-y-2 pt-4">
                <div className="flex space-x-2">
                    <span className=" font-semibold">Name :</span>
                    <span> jabarullah mohammed askar</span>
                </div>
                <div className=" flex space-x-2">
                    <span className=" font-semibold">Address :</span>
                    <span> Trincomalee naduoothu kinniya</span>
                </div>
                <div className=" flex space-x-2">
                    <span className=" font-semibold">Phone :</span>
                    <span> 0751336007</span>
                </div>
                <div className=" flex space-x-2">
                    <span className=" font-semibold">Salary :</span>
                    <span> per 1h = <span>Rs. 125</span></span>
                </div>
            </div >
            <div className=" pt-4">
                <span className="  text-blue-800"> More Skills</span>
                <ul className=" space-y-1 mt-4">
                    <li>
                        <span>Helper</span>
                    </li>
                    <li>
                        <span>Meson</span>
                    </li>
                    <li>
                        <span>Agriculture Helper</span>
                    </li>
                </ul>
            </div>
            <div className=" space-y-5 mt-5">
                <div>
                    <div className=" pb-5">
                        <span className=" text-blue-800">Immidiot Contact</span>
                    </div>
                    <button className=" w-full justify-center p-2 bg-green-500 text-white flex items-center space-x-4 px-5 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1FAF38"></stop><stop offset="100%" stopColor="#60D669"></stop></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#F9F9F9"></stop><stop offset="100%" stopColor="#FFF"></stop></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path></svg>
                        <span> call With Whatsapp</span>
                    </button>
                </div>
                <button className=" w-full justify-center p-2 bg-blue-500 text-white flex items-center space-x-4 px-5 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg>
                    <span>call with Mobile</span>
                </button>
            </div>

        </div >
    )
}

export default Detailes
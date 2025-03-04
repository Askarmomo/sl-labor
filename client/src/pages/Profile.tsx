import userImage from "/assets/images/Askar.jpg"
import { FiEdit } from "react-icons/fi";

const Profile = () => {
    return (
        <div>
            
            <div className=" relative space-y-5">
                <img className=" h-[180px] w-[180px] mx-auto rounded-full object-cover" src={userImage} alt="Askar-img" />
                <div className=" space-y-4">
                    <button className=" cursor-pointer hover:bg-yellow-700 flex items-center justify-center space-x-4 p-2 w-full bg-yellow-600 text-white rounded">
                        <span><FiEdit className=" h-6 w-6" /></span>
                        <span>Edit Image</span>
                    </button>
                    <button className=" cursor-pointer  hover:bg-blue-700 flex items-center justify-center space-x-4 p-2 w-full bg-blue-600 text-white rounded">
                        <span><FiEdit className=" h-6 w-6" /></span>
                        <span>Edit Detailes</span>
                    </button>
                </div>
            </div>
            <div className=" space-y-3 mt-7">
                <div>
                    <div className="text-blue-800 font-semibold">Name</div>
                    <div>Jabarullah mohammed askar</div>
                </div>
                <div>
                    <div className="text-blue-800 font-semibold">Address</div>
                    <div>Trincomalee naduoothu kinniya</div>
                </div>
                <div>
                    <div className="text-blue-800 font-semibold">Role</div>
                    <div>Worker</div>
                </div>
                <div>
                    <div className="text-blue-800 font-semibold">slary</div>
                    <div>per 1 month = 30,000</div>
                </div>
                <div>
                    <div className="text-blue-800 font-semibold">Skills</div>
                    <div>
                        <li>construction helper</li>
                        <li>farming helper</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
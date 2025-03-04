import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import clickSound from "/assets/music/mixkit-on-or-off-light-switch-tap-2585.wav"
import { Link } from "react-router-dom";

const Footer = () => {

    const playSound = () => {
        const audio = new Audio(clickSound)
        // audio.currentTime = 0.002
        audio.volume = 0.10
        audio.play()

        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 100);
    }

    return (
        <footer className="fixed left-0 right-0 bottom-0 bg-blue-800 text-white py-3 ">
            <div className=" flex items-center justify-evenly space-x-9">
                <Link to={'/'}>
                    <IoHomeOutline onClick={() => { playSound() }} size={40} className=" hover:opacity-60" />
                </Link>
                <Link to={'/worker'}>
                    <MdWorkOutline onClick={() => { playSound() }} size={40} className=" hover:opacity-60" />
                </Link>
                <Link to={'/employer'}>
                    <IoBusinessOutline onClick={() => { playSound() }} size={40} className=" hover:opacity-60" />
                </Link>
                <Link to={'/Profile'}>
                    <VscAccount onClick={() => { playSound() }} size={40} className=" hover:opacity-60" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
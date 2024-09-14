import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
    return (
        <div className='sticky top-0 max-w-full backdrop-blur-2xl bg-white/30 z-10 backdrop-brightness-90 h-12 py-2 px-8'>
            <div className='container flex justify-between'>
                <div className='px-4'>
                    Portfolio
                </div>
                <Popup trigger={<button><GiHamburgerMenu/></button>} closeOnDocumentClick position={"bottom right"}>
                    <ul>
                        <li>
                            <link rel="stylesheet" href="" />
                        </li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </Popup>
            </div>
        </div>
    )
}

export default Navbar
import MenuItem from "../common/menuItem";
import {FaHome} from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-800 fixed h-full'>
        <div>
            <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <MenuItem iconName={FaHome} title="Home" />
        </ul>
    </div>
  )
}

export default Sidebar;
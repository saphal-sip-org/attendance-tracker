
import { NavLink } from "react-router-dom";

const MenuItem = ({ iconName: Icon, title }) => {
  return (
    <li className='mb-2 rounded hover:bg-blue-500 py-2'>
      <NavLink to="/" className={({ isActive }) => isActive? "text-red-300" : ""}>
        <Icon className="inline-block w-6 h-6 mr-2 mt-2" />
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
//FaHome
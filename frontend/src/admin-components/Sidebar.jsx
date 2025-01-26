import { ChevronLast, ChevronFirst, LayoutDashboard, House, HousePlus, Building2} from "lucide-react"
import { useContext, createContext, useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { ADMIN_BASE_URL } from "../App"
import logos from '../assets/rrr logo.png'


const SidebarContext = createContext()

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    
  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const handleResize = () => {
        setExpanded(window.innerWidth >= 768); // Adjust breakpoint as needed
      };

      // Initial check on mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
      // close on click outside
      useEffect(() => {
        const clickHandler = ({ target }) => {
          if (!dropdown.current) return;
          if (
            !dropdownOpen ||
            dropdown.current.contains(target) ||
            trigger.current.contains(target)
          )
            return;
          setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      });
    
      // close if the esc key is pressed
      useEffect(() => {
        const keyHandler = ({ keyCode }) => {
          if (!dropdownOpen || keyCode !== 27) return;
          console.log("outside is clicked...");
          setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
      });


  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
        <Link to={'../../'} >
          <img src={logos} 
            className={`overflow-hidden transition-all ${
              expanded ? "w-12" : "w-0"
            }`} />        
        </Link> 
          
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-300"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" link={ADMIN_BASE_URL+"/"} active />
            <SidebarItem icon={<House size={20} />} text="Properties" link={ADMIN_BASE_URL+"/view-properties"} />
            <SidebarItem icon={<Building2 size={20} />} text="Add Project" link={ADMIN_BASE_URL+"/add-project"} />
            <SidebarItem icon={<HousePlus size={20} />} text="Add Property" link={ADMIN_BASE_URL+"/add-property"} />            
            {/* <SidebarItem icon={<UserCircle size={20} />} text="Profile" link={ADMIN_BASE_URL+"/profile"} /> */}
          </ul>
        </SidebarContext.Provider>

        
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, link }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const [active, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === link);
  }, [location.pathname, link]);
  
  return (
    <li>
      <Link to={link} 
    className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
     
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
      </Link>
    </li>
  )
}

import { Menu } from "lucide-react";

const MobileMenu = () => {
    return ( 
        <div className="md:hidden flex flex-col items-center w-[120px]">
            <Menu />
        </div>
     );
}
 
export default MobileMenu;
import React from "react";
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../shared/constants";


function Main() {
    // const navigate = useNavigate()
    // const menuItems = [
    //     "Back to School",
    //     "Wishlist",
    //     "Plans",
    //     "Products",
    // ];
    //
    // return (
    //     <div>
    //         <Navbar disableAnimation isBordered>
    //             <NavbarContent className="sm:hidden" justify="start">
    //                 <NavbarMenuToggle/>
    //             </NavbarContent>
    //
    //             <NavbarContent className="sm:hidden pr-3" justify="center">
    //                 <NavbarBrand>
    //                     <p className="font-bold text-inherit">To Do List</p>
    //                 </NavbarBrand>
    //             </NavbarContent>
    //
    //             <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //                 <NavbarBrand>
    //                     <p className="font-bold text-inherit">To Do List</p>
    //                 </NavbarBrand>
    //             </NavbarContent>
    //
    //             <NavbarContent justify="end">
    //                 <NavbarItem>
    //                     <Button className="Setting-button" onClick={() => navigate(ROUTER_PATH.SETTINGS)} variant="flat">
    //                         Settings
    //                     </Button>
    //                 </NavbarItem>
    //             </NavbarContent>
    //
    //             <NavbarMenu>
    //                 {menuItems.map((item, index) => (
    //                     <NavbarMenuItem key={`${item}-${index}`}>
    //                         <Link
    //                             className="w-full"
    //                             href="#"
    //                             size="lg"
    //                         >
    //                             {item}
    //                         </Link>
    //                     </NavbarMenuItem>
    //                 ))}
    //             </NavbarMenu>
    //         </Navbar>
    //         <h1>Create your first list</h1>
    //     </div>
    // );
}

export default Main;
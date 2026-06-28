import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {

    const location = useLocation();
    const { logout } = useAuth();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Leads",
            path: "/leads"
        },
        {
            name: "Archived Leads",
            path: "/archived"
        },
        {
            name: "Proposals",
            path: "/proposals"
        },
        {
            name: "Settings",
            path: "/settings"
        }
    ];

    const pageTitle = menuItems.find(
        (item) => item.path === location.pathname
    )?.name || "TrafficGru CRM";

    return (

        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}

            <aside className="w-64 bg-white border-r flex flex-col">

                <div className="border-b p-6">

                    <h1 className="text-2xl font-bold">

                        TrafficGru CRM

                    </h1>

                    <p className="mt-1 text-sm text-gray-500">

                        Admin Panel

                    </p>

                </div>

                <nav className="flex-1 p-4 space-y-2">

                    {

                        menuItems.map((item) => (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({ isActive }) =>

                                    `block rounded-lg px-4 py-3 transition-all

                                    ${

                                        isActive

                                            ? "bg-black text-white"

                                            : "text-gray-700 hover:bg-gray-100"

                                    }`

                                }

                            >

                                {item.name}

                            </NavLink>

                        ))

                    }

                </nav>

                <div className="border-t p-4">

                    <button

                        onClick={logout}

                        className="w-full rounded-lg bg-red-500 px-4 py-3 text-white hover:bg-red-600"

                    >

                        Logout

                    </button>

                </div>

            </aside>

            {/* Main */}

            <div className="flex flex-1 flex-col">

                {/* Header */}

                <header className="flex h-16 items-center justify-between border-b bg-white px-8">

                    <h2 className="text-2xl font-semibold">

                        {pageTitle}

                    </h2>

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">

                            A

                        </div>

                        <div>

                            <p className="font-semibold">

                                Administrator

                            </p>

                            <p className="text-sm text-gray-500">

                                TrafficGru

                            </p>

                        </div>

                    </div>

                </header>

                {/* Page */}

                <main className="flex-1 overflow-y-auto p-8">

                    <Outlet />

                </main>

            </div>

        </div>

    );

};

export default AdminLayout;
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {

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
            name: "Archived",
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

    return (

        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}

            <aside className="w-64 bg-white border-r">

                <div className="border-b p-6">

                    <h1 className="text-2xl font-bold">

                        TrafficGru CRM

                    </h1>

                </div>

                <nav className="p-4 space-y-2">

                    {

                        menuItems.map((item) => (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({ isActive }) =>

                                    `block rounded-lg px-4 py-3 transition

                                    ${

                                        isActive

                                            ? "bg-black text-white"

                                            : "hover:bg-gray-100"

                                    }`

                                }

                            >

                                {item.name}

                            </NavLink>

                        ))

                    }

                </nav>

            </aside>

            {/* Content */}

            <div className="flex-1 flex flex-col">

                {/* Header */}

                <header className="h-16 bg-white border-b flex items-center justify-between px-8">

                    <h2 className="font-semibold text-xl">

                        Dashboard

                    </h2>

                    <div>

                        Admin

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
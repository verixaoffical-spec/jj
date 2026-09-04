import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const navItems = [
  { path: "/", label: "Dashboard", icon: "📊" },
  { path: "/projects", label: "Projects", icon: "📁" },
];

export default function Layout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-purple-950 text-fuchsia-50 hidden lg:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center font-extrabold text-white shadow-lg">RS</div>
            <div className="min-w-0">
              <h1 className="text-sm font-bold truncate">Real-Time Study Group ...</h1>
              <p className="text-[10px] opacity-60 truncate">React + Vite • Express (Node.js) • Supabase</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === item.path ? "bg-fuchsia-700 text-white" : "opacity-80 hover:bg-purple-900"
              }`}>
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <p className="text-sm font-medium truncate">{user?.full_name}</p>
          <p className="text-xs opacity-60 truncate">{user?.email}</p>
          <button onClick={logout} className="text-xs text-rose-300 mt-2 hover:underline">Sign Out</button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="lg:hidden bg-purple-950 text-fuchsia-50 px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold truncate">Real-Time Study Group ...</h1>
          <button onClick={logout} className="text-xs text-rose-300">Sign Out</button>
        </header>
        <main className="flex-1 overflow-auto"><Outlet /></main>
        <nav className="lg:hidden bg-white border-t flex">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}
              className={`flex-1 flex flex-col items-center py-3 text-xs font-medium ${
                location.pathname === item.path ? "text-fuchsia-600" : "text-gray-400"
              }`}>
              <span className="text-lg">{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

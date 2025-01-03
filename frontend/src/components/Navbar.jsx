import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User, MessageCircleMore } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="
        bg-white border-b border-gray-200 fixed w-full top-0 z-50 
        shadow-sm backdrop-blur-md bg-opacity-80
      "
    >
      <div className="container mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
              <MessageCircleMore className="w-5 h-5 text-blue-500" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">GapShap</h1>
          </Link>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {authUser && (
              <>
                {/* Profile Button */}
                <Link
                  to="/profile"
                  className="
                    flex items-center gap-2 px-4 py-2 text-sm font-medium
                    bg-blue-100 text-blue-600 rounded-lg 
                    hover:bg-blue-200 transition
                  "
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={logout}
                  className="
                    flex items-center gap-2 px-4 py-2 text-sm font-medium
                    bg-gray-100 text-gray-600 rounded-lg 
                    hover:bg-gray-200 transition
                  "
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

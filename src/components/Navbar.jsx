import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="topbar">
      {/* LEFT */}
      <div className="logo" onClick={() => navigate("/")}>
        ✈ SkyLine
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {user ? (
          <>
            <Link to="/trips">My Trips</Link>

            <button className="nav-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button
            className="nav-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

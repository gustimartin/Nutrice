import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoutes() {
  const { login } = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (!login.id) {
    setTimeout(() => {
      navigate("/login");
      toast.error("Porfavor ingrese con su cuenta o registrese.", {
        position: "bottom-left",
      });
    }, 0);
  }
  return <Outlet />;
}

export default ProtectedRoutes;

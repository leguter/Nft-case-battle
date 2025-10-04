import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/"); // редірект у головне меню гри
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] text-white">
      <p>Authorizing...</p>
    </div>
  );
};

export default LoginSuccess;

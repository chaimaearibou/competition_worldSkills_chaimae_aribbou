import React from "react";
import { useNavigate } from "react-router-dom";

function BienvenuePage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          backgroundColor: "#6A0DAD",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          A VOUS DE RACONTRER LE
        </h1>
        <h2 style={{ fontSize: "4rem", fontWeight: "bold", color: "yellow" }}>
          "WOW" !!
        </h2>
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "#000",
          color: "#FFD700",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div className="d-flex flex-column gap-3 mt-4" style={{ width: "60%" }}>
          <button
            onClick={() => navigate("/login")}
            className="btn fw-bold"
            style={{
              backgroundColor: "purple",
              color: "white",
              fontWeight: "bold",
              borderWidth: "1px", 
              borderStyle: "solid",
              borderRadius: "40px",
            }}
          >
            Se connecter
          </button>
          <button
            onClick={() => navigate("/register")}
            className="btn fw-bold"
            style={{ backgroundColor: "purple", color: "white" ,borderRadius: "40px",backgroundColor: "purple",
}}
          >
            S’inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default BienvenuePage;

import React from "react";
import { useMsal } from "@azure/msal-react";

export default function Header() {
  const { accounts, instance } = useMsal();
  const user = accounts[0];
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>Bem-vindo, {user?.username}</span>
      <button style={{ float: "right" }} onClick={() => instance.logout()}>Sair</button>
    </header>
  );
}
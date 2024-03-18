import { json, redirect } from "react-router-dom";

export async function action({ request }) {
  const authData = {
    email: request.body.get("email"),
    name: request.body.get("name"),
    tc: request.body.get("tc"),
    password: request.body.get("password"),
    password2: request.body.get("password2"),
  };

  const response = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not response" });
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
}

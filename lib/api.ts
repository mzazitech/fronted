const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in .env.local")
}

// Generic request function
export async function apiRequest(
  endpoint: string,
  method: string = "GET",
  body?: any,
  isFormData: boolean = false
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null

  const headers: any = {}

  if (!isFormData) {
    headers["Content-Type"] = "application/json"
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body
      ? isFormData
        ? body
        : JSON.stringify(body)
      : undefined
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }

  return data
}

// Auth helpers
export const AuthAPI = {
  register: (formData: FormData) =>
    apiRequest("/auth/register", "POST", formData, true),

  login: (payload: any) =>
    apiRequest("/auth/login", "POST", payload)
}

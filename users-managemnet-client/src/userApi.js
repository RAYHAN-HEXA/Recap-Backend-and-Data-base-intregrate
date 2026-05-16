const BASE_URL = 'http://localhost:3000/users';

function ensureResponse(response) {
  if (!response.ok) {
    throw new Error(`Server error: ${response.status} ${response.statusText}`);
  }
  return response;
}

export async function fetchUsers() {
  const response = await fetch(BASE_URL);
  ensureResponse(response);
  return response.json();
}

export function normalizeUserName(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export function buildUserPayload({ name, email }) {
  return {
    name: normalizeUserName(name),
    email: String(email).trim().toLowerCase(),
  };
}

export async function addUser(userData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  ensureResponse(response);
  return response.json();
}

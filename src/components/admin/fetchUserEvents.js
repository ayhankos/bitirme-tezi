export async function fetchUserEvents() {
  try {
    const token = localStorage.getItem("accessToken"); // Kullanıcı token'ını al
    console.log(`Bearer ${localStorage.getItem("accessToken")}`);
    const response = await fetch("http://localhost:3001/user_events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user events");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

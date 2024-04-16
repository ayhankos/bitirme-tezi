export const fetchEvents = async () => {
  try {
    const response = await fetch("http://localhost:3001/communities");
    if (!response.ok) {
      throw new Error("Failed to fetch communities");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

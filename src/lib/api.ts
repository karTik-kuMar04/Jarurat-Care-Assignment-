export async function loadPatients() {
  const BIN_URL = "https://api.jsonbin.io/v3/b/68f1f6d143b1c97be96c98dd/latest";

  try {
    const res = await fetch(BIN_URL);
    if (!res.ok) throw new Error("Failed to fetch patients");

    const json = await res.json();
    return json.record?.data || [];
  } catch (error) {
    console.error("Error loading patients:", error);
    throw error;
  }
}

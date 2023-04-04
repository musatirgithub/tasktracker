const editTask = async (url, data) => {
  try {
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export default editTask;

const deleteTask = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export default deleteTask;

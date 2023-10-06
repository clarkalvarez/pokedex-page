export const saveImage = async (filename: string, image: string) => {
  try {
    const url = "http://localhost:3100/upload-image";

    const requestBody = {
      filename: filename,
      image: image,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(requestBody), // Convert the object to JSON
    });

    if (response.ok) {
      console.log("Image uploaded successfully");
      return true;
    } else {
      console.error("Error uploading image");
      return false;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return false;
  }
};

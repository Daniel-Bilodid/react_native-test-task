import axios from "axios";

export async function getPosts() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

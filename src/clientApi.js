import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
});

export default {
  fetchImages() {
    return axiosClient.get("get/images?short=true");
  },
  uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    return axiosClient.post("post/image", formData);
  },
  removeImage(id) {
    return axiosClient.delete(`delete/image`, {
      data: {
        id,
      },
    });
  },
};

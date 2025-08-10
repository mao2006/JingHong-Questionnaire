import { request } from "@/apis/axios";

const saveImgAPI = (data: FormData | null) => {
  return request("/api/user/upload/img", {
    data: data,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export default saveImgAPI;
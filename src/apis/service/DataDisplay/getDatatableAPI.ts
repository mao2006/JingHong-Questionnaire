import { request } from "@/apis/axios";
import { GetDataTableRequest, GetDataTableResponse } from "@/apis/types/DataDisplay/getDataTableTypes";

const getDataTableAPI = (data: GetDataTableRequest):
Promise<GetDataTableResponse> => {
  return request("/api/admin/download", {
    params: data,
    method: "GET"
  });
};

export { getDataTableAPI };
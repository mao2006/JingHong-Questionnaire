import { request } from "@/apis/axios";
import { GetQuestionnaireRequest, GetQuestionnaireResponse } from "@/apis/types/User/getUserTypes";

// 填写者获取问卷
const getQuestionnaireAPI = (params: GetQuestionnaireRequest):
Promise<GetQuestionnaireResponse> => {
  return request("/api/user/get", {
    method: "GET",
    params: params
  });
};

export default getQuestionnaireAPI;

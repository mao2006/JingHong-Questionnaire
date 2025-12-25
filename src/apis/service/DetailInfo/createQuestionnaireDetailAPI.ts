import { request } from "@/apis/axios";
import { createQuestionnaireDetailResponse, createQuestionnaireDetailRequest } from "@/apis/types/DetaiInfo/setNewQuestionnaireDetailTypes";
// 定义发送问卷详情更新请求的函数
const createQuestionnaireDetailAPI = (data: createQuestionnaireDetailRequest):
Promise<createQuestionnaireDetailResponse> => {
  return request("/api/admin/create", {
    method: "POST",
    data: data
  });
};

export default createQuestionnaireDetailAPI;

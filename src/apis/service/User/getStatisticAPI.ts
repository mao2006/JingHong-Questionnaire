import { request } from "@/apis/axios";
import { GetStatisticRequest, GetStatisticResponse } from "@/apis/types/User/getStatisticTypes";

// 获取投票选项数据的接口

const getStatisticAPI = (params: GetStatisticRequest): Promise<GetStatisticResponse> => {
  return request("/api/user/statistic", {
    method: "GET",
    params: params
  });
};

export { getStatisticAPI };
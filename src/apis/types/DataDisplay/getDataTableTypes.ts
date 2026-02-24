export interface GetDataTableRequest {
  /** 问卷编号 */
  id: number;
}

export interface GetDataTableResponse {
  code: number;
  /** 问卷url */
  data: string | null;
  msg: string;
}


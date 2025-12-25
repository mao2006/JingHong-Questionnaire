export interface SetUserSubmitRequest {
  /** 问卷编号 */
  id: number;
  /** 问题列表 */
  questions_list: QuestionAnswer[];
  /** 包含学号信息的token */
  token: string;
}

export interface QuestionAnswer {
  /** 回答 */
  answer: string;
  /** 问题编号 */
  question_id: number;
}

export interface SetUserSubmitResponse {
  code: number;
  data: Data | null;
  msg: string;
}

export interface Data {
  /** 提交时间 */
  time: string;
}
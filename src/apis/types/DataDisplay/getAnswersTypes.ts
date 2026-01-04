export interface GetAnswersResponse {
  code: number;
  data: Data;
  msg: string;
}

export interface Data {
  answers_data: AnswersData;
  survey_type: number;
  total_page_num: number;
}

export interface AnswersData {
  question_answers: QuestionAnswer[];
  answerIds: string[];
  time: string[];
}

export interface QuestionAnswer {
  answers?: string[];
  /** 1单选2多选3填空4简答5图片 */
  question_type: number;
  title?: string;
}
export interface GetAnswersRequest {
  /** 问卷编号 */
  id: number;
  page_num: number;
  page_size: number;
  /** 查询内容 */
  text?: string;
  /** 是否只显示最新的填写记录 */
  unique: boolean;
}
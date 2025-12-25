export interface GetQuestionnaireListResponse {
  code: number;
  data: Data | null;
  msg: string;
}

export interface Data {
  survey_list: SurveyList[];
  total_page_num: number;
}

export interface SurveyList {
  /** 问卷编号 */
  id: number;
  /** 答卷份数 */
  num: number;
  /** 1草稿、2发布、3已截止 */
  status: number;
  /** 问卷类型，0调研1投票 */
  survey_type: number;
  /** 问卷标题 */
  title: string;
}

export interface GetQuestionnaireListResquest {
  page_num: number,
  page_size: number,
  title?: string
}
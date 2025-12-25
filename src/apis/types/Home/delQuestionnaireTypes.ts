export interface DelQuestionnaireRequest {
  /** 问卷编号 */
  id: number;
}

export interface DelQuestionnaireResponse {
  code: number;
  data: null;
  msg: string;
}
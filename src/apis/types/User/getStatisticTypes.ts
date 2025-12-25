export interface GetStatisticRequest {
  /**
     * 问卷编号
     */
  id: number;
}

export interface GetStatisticResponse {
  code: number;
  data: Data | null;
  msg: string;
}

export interface Data {
  statistics: Statistic[];
}

export interface Statistic {
  options: Option[];
  /**
     * 题目标题
     */
  question: string;
  /**
     * 题目类型，1单选2多选
     */
  question_type: number;
  /**
     * 题目序号
     */
  serial_num: number;
}

export interface Option {
  /**
     * 选项内容
     */
  content: string;
  /**
     * 选人数
     */
  count: number;
  rank: number;
  /**
     * 选项序号
     */
  serial_num: number;
}
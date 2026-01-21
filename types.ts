
export interface WorkflowStep {
  title: string;
  description: string;
  toolCategory: string;
}

export interface AIRootPlan {
  projectName: string;
  suggestedStack: string[];
  workflow: WorkflowStep[];
  productivityTip: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

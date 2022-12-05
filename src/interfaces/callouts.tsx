export interface ICalloutProps {
  id?: number;
  order?: number;
  title?: any;
  label?: any;
  text?: any;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: string;
  // data?: any[];
}

export interface ICalloutBulletProps {
  id: number;
  title?: any;
  text: string;
  side?: string;
  color?: string;
  backgroundColor?: any;
  buttonText?: string;
  buttonTo?: string;
  buttonColor?: any;
}


export interface IBannerChartProps {
  data: any;
  randomHeight: boolean;
  color: string;
  label: string;
  text: string;
  backgroundColor: number;
  typing?: boolean;
}
export interface IBarColumnProps {
  id: number;
  label?: any;
  randomHeight: boolean;
  height: number;
  color: string;
  backgroundColor: any;
}



export interface TrendsProps {
  id: number;
  category: string;
  subcategory: string;
  description: string;
  height: number;
  dataKey?: string;
  baseUrl: string;
  params: string;
  resultLimit?: string;
  chartType: string;
  horizontal: boolean;
  keyLabel?: string;
  keySeries?: string;
  term: string;
  time: string;
  count?: string;
  textColor?: string;
  seriesColor?: string;
  backgroundColor?: string;
}

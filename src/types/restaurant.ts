export interface BaseItem {
  id: number;
  name: string;
  rating: number;
  color: string;
  tag: string;
}

export type ApiResponse = BaseItem;
export type RecommendationItem = BaseItem;

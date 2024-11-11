import { ApiResponse } from '@/types/restaurant';

export class ApiService {
  static async searchRestaurants(keyword: string): Promise<ApiResponse[]> {
    try {
      const response = await fetch(
        `http://localhost:8080/restaurants/search?keyword=${encodeURIComponent(
          keyword
        )}`
      );

      if (!response.ok) {
        throw new Error('데이터를 가져오는데 실패했습니다');
      }

      return response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
}

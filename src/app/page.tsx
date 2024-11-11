'use client'; // 클라이언트 컴포넌트로 변환

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';

// API 응답 타입 정의
interface ApiResponse {
  id: number;
  name: string;
  rating: number;
  tag: string;
  color: string;
}

// RecommendationItem 인터페이스는 유지
interface RecommendationItem {
  id: number;
  name: string;
  rating: number;
  color: string;
  tag: string;
}

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [recomList, setRecomList] = useState<RecommendationItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `http://localhost:8080/restaurants/search?keyword=${encodeURIComponent(
          userInput
        )}`
      );

      if (!response.ok) {
        throw new Error('데이터를 가져오는데 실패했습니다');
      }

      const data: ApiResponse[] = await response.json();

      // API 응답을 그대로 RecommendationItem으로 사용
      setRecomList(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다'
      );
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 text-gray-900 p-8'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-5xl font-bold mb-4 text-center text-gray-800'>
          뭐 드실래요?
        </h1>

        <div className='max-w-2xl mx-auto mb-16'>
          <form onSubmit={handleSubmit} className='relative'>
            <Input
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder='오늘 뭐 먹지? (예: 새콤한 게 땡기네)'
              className='w-full h-14 pl-6 pr-32 text-lg rounded-full border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400'
              disabled={isLoading}
            />
            <Button
              type='submit'
              className='absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50'
              disabled={isLoading}
            >
              {isLoading ? '검색 중...' : '추천받기'}
            </Button>
          </form>
          {error && (
            <p className='mt-2 text-red-500 text-sm text-center'>{error}</p>
          )}
        </div>

        {/* recomList 렌더링 */}
        {recomList.length > 0 && (
          <div className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 pl-4 border-l-4 border-purple-500'>
              추천 메뉴 목록
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {recomList.map((item) => (
                <div
                  key={item.id}
                  className={`${item.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {item.name}
                  </h3>
                  <div className='flex flex-col gap-2'>
                    <span className='bg-white/30 self-start px-3 py-1 rounded-full text-white text-sm'>
                      {item.tag}
                    </span>
                    <div className='flex items-center bg-white/30 self-start px-4 py-2 rounded-full backdrop-blur-sm'>
                      <Star className='h-5 w-5 text-yellow-300 mr-1 fill-current' />
                      <span className='font-semibold text-white'>
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

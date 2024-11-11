'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ApiService } from '@/services/api';
import { RecommendationCard } from '@/components/RecommendationCard';
import { RecommendationItem } from '@/types/restaurant';

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
      const data = await ApiService.searchRestaurants(userInput);
      setRecomList(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다'
      );
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

        {recomList.length > 0 && (
          <div className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 pl-4 border-l-4 border-purple-500'>
              추천 메뉴 목록
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {recomList.map((item) => (
                <RecommendationCard key={item.idx} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

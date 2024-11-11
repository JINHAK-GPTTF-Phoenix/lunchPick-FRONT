import { RecommendationItem } from '@/types/restaurant';
import { Star } from 'lucide-react';

interface RecommendationCardProps {
  item: RecommendationItem;
}

export function RecommendationCard({ item }: RecommendationCardProps) {
  return (
    <div
      key={item.idx}
      className={`${item.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <h3 className='text-2xl font-bold text-white mb-4'>{item.name}</h3>
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
  );
}

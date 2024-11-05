"use client"; // 클라이언트 컴포넌트로 변환

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

// 더미 데이터: 실제 구현시 API 호출로 대체해야 합니다
const dummyRecommendations = {
  "새콤한 음식": [
    {
      id: 1,
      name: "레몬 파스타",
      rating: 4.5,
      color: "bg-gradient-to-br from-purple-400 to-pink-300",
    },
    {
      id: 2,
      name: "유자 샐러드",
      rating: 4.2,
      color: "bg-gradient-to-br from-purple-400 to-pink-300",
    },
    {
      id: 3,
      name: "사과 돼지갈비",
      rating: 4.7,
      color: "bg-gradient-to-br from-purple-400 to-pink-300",
    },
    {
      id: 4,
      name: "오렌지 치킨",
      rating: 4.3,
      color: "bg-gradient-to-br from-purple-400 to-pink-300",
    },
  ],
  "매콤한 음식": [
    {
      id: 5,
      name: "마라탕",
      rating: 4.8,
      color: "bg-gradient-to-br from-red-400 to-orange-300",
    },
    {
      id: 6,
      name: "양념치킨",
      rating: 4.6,
      color: "bg-gradient-to-br from-red-400 to-orange-300",
    },
    {
      id: 7,
      name: "떡볶이",
      rating: 4.4,
      color: "bg-gradient-to-br from-red-400 to-orange-300",
    },
    {
      id: 8,
      name: "김치찌개",
      rating: 4.5,
      color: "bg-gradient-to-br from-red-400 to-orange-300",
    },
  ],
  "달콤한 음식": [
    {
      id: 9,
      name: "티라미수",
      rating: 4.7,
      color: "bg-gradient-to-br from-yellow-400 to-orange-300",
    },
    {
      id: 10,
      name: "초코케이크",
      rating: 4.5,
      color: "bg-gradient-to-br from-yellow-400 to-orange-300",
    },
    {
      id: 11,
      name: "크레페",
      rating: 4.3,
      color: "bg-gradient-to-br from-yellow-400 to-orange-300",
    },
    {
      id: 12,
      name: "마카롱",
      rating: 4.6,
      color: "bg-gradient-to-br from-yellow-400 to-orange-300",
    },
  ],
};

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [recommendations, setRecommendations] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 구현시 여기서 API를 호출하여 추천 목록을 받아와야 합니다
    setRecommendations(dummyRecommendations);
  };

  // API test
  const fetchKoreanData = async () => {
    try {
      const response = await fetch("http://localhost:8080/korean");
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchKoreanData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
          뭐 드실래요?
        </h1>

        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="relative">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="오늘 뭐 먹지? (예: 새콤한 게 땡기네)"
              className="w-full h-14 pl-6 pr-32 text-lg rounded-full border-2 border-gray-200 focus:border-purple-400 focus:ring-purple-400"
            />
            <Button
              type="submit"
              className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
            >
              추천받기
            </Button>
          </form>
        </div>

        {Object.entries(recommendations).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-purple-500">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`${item.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.name}
                  </h3>
                  <div className="flex items-center bg-white/30 self-start px-4 py-2 rounded-full backdrop-blur-sm">
                    <Star className="h-5 w-5 text-yellow-300 mr-1 fill-current" />
                    <span className="font-semibold text-white">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

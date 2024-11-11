/**
 * Tailwind의 purge 과정에서 보존할 동적 클래스 목록
 * 주로 런타임에 동적으로 생성되는 클래스들을 포함
 */
export const safelist = [
  // 그라데이션 기본 클래스
  'bg-gradient-to-br',
  
  // 새콤한 메뉴 그라데이션
  'from-purple-400',
  'to-pink-300',
  
  // 매운 메뉴 그라데이션
  'from-red-400',
  'to-orange-300',
  
  // 달콤한 메뉴 그라데이션
  'from-yellow-400',
  'to-orange-300',
  
  // 얼큰한 메뉴 그라데이션
  'from-red-500',
  'to-orange-400',
  
  // 구수한 메뉴 그라데이션
  'from-amber-600',
  'to-yellow-400',
  
  // 시원한 메뉴 그라데이션
  'from-blue-400',
  'to-cyan-300',
  
  // 담백한 메뉴 그라데이션
  'from-green-400',
  'to-emerald-300',
]; 
/**
 * 애플리케이션에서 사용되는 기본 색상 설정
 * HSL 변수를 사용하여 다크모드 대응이 가능하도록 구성
 */
export const colors = {
  // 기본 배경 및 텍스트 색상
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',

  // 카드 컴포넌트 관련 색상
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },

  // 팝오버 컴포넌트 관련 색상
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },

  // 주요 액션 버튼 등에 사용되는 색상
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },

  // 보조 액션에 사용되는 색상
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },

  // 비활성화된 요소나 부가 정보에 사용되는 색상
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },

  // 강조 표시에 사용되는 색상
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },

  // 경고나 삭제 등 파괴적 액션에 사용되는 색상
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },

  // 기타 UI 요소 색상
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',

  // 차트 등 데이터 시각화에 사용되는 색상
  chart: {
    '1': 'hsl(var(--chart-1))',
    '2': 'hsl(var(--chart-2))',
    '3': 'hsl(var(--chart-3))',
    '4': 'hsl(var(--chart-4))',
    '5': 'hsl(var(--chart-5))',
  },
}; 
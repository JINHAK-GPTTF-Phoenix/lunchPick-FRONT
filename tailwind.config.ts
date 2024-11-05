import type { Config } from 'tailwindcss';
import { colors } from './src/config/colors';
import { borderRadius } from './src/config/radius';
import { safelist } from './src/config/safelist';

/**
 * Tailwind CSS 설정
 * 애플리케이션의 스타일 시스템을 정의
 */
const config: Config = {
  // 스캔할 파일 경로 설정
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // 동적으로 생성되는 클래스 보존 설정
  safelist,
  
  // 테마 설정
  theme: {
    extend: {
      colors,
      borderRadius,
    },
  },
  
  // 사용할 플러그인 설정
  plugins: [],
};

export default config;

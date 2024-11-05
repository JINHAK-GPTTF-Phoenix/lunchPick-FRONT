/**
 * 애플리케이션에서 사용되는 border-radius 설정
 * CSS 변수를 통해 일관된 곡률 제공
 */
export const borderRadius = {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
}; 
export function getKoreanToday() {
  return new Date(new Date().toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' }))
}
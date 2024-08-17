import Flex from '@/components/layout/Flex'
import Typography from '@/components/ui/Typography'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import { ColorPalette } from '@/lib/colors'
import { NumberPreset } from '@/lib/variables'
import { getKoreanToday } from '@/utils/date'

export function StoryTopbar() {
  const date = getKoreanToday()

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dayOfWeek = (() => {
    switch (date.getDay()) {
      case 0: return '일'
      case 1: return '월'
      case 2: return '화'
      case 3: return '수'
      case 4: return '목'
      case 5: return '금'
      case 6: return '토'
    }
  })()

  return <>
    <Flex direction='column' align='center' gap={NumberPreset[8]}>
      <Typography.Text
        color={ColorPalette.Gray600}
        size={TypographySize.SMALL}
      >
        {year}년 {month}월 {day}일 ({dayOfWeek})
      </Typography.Text>
      <Typography.Text
        color={ColorPalette.Peach}
        size={TypographySize.EXTRASMALL}
        weight={TypographyWeight.SEMIBOLD}
      >
        {1}번째 사연
      </Typography.Text>
    </Flex>
  </>
}

import Flex from '@/components/layout/Flex'
import { StoryTopbar } from '@/components/page/story/Topbar'
import Typography from '@/components/ui/Typography'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import { ColorPalette } from '@/lib/colors'
import { NumberPreset } from '@/lib/variables'

import s from './style.module.scss'
import StoryPhoto from '@/components/page/story/Photo'

export default function StoryPage() {
  return <>
    <Flex className={s.container} direction='column' gap={NumberPreset[30]}>
      <StoryTopbar />

      <Flex direction='column' gap={NumberPreset[16]}>
        <Typography.Display
          size={TypographySize.SMALL}
          weight={TypographyWeight.SEMIBOLD}
        >
          사연 제목
        </Typography.Display>
        <Typography.Text
          color={ColorPalette.Gray600}
          size={TypographySize.SMALL}
        >
          사연자 이름
        </Typography.Text>
      </Flex>

      <pre className={s.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, asperiores dolorum eaque magnam consectetur quibusdam aperiam atque esse sed amet iusto quasi officiis consequatur non assumenda veniam suscipit rem dolores.
      </pre>

      <Flex direction='column' gap={NumberPreset[8]}>
        <Typography.Text
          color={ColorPalette.Gray700}
          size={TypographySize.SMALL}
        >
          사진
        </Typography.Text>
        <div className={s.photos}>
          <StoryPhoto order={1} src='' />
          <StoryPhoto order={2} src='' />
          <StoryPhoto order={3} src='' />
          <StoryPhoto order={4} src='' />
          <StoryPhoto order={5} src='' />
          <StoryPhoto order={6} src='' />
          <StoryPhoto order={7} src='' />
          <StoryPhoto order={8} src='' />
          <StoryPhoto order={9} src='' />
          <StoryPhoto order={10} src='' />
          <StoryPhoto order={11} src='' />
          <StoryPhoto order={12} src='' />
        </div>
      </Flex>
    </Flex>
  </>
}

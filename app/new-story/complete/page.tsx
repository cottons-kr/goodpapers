import Flex from '@/components/layout/Flex'
import Button from '@/components/ui/Button'
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/shared'
import Typography from '@/components/ui/Typography'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import { NumberPreset } from '@/lib/variables'
import PeachCheck from '@/public/peach_check.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function NewStoryCompletePage() {
  return <>
    <Flex
      direction='column'
      align='center' justify='center'
      gap={NumberPreset[30]}
      height='100%'
    >
      <Image src={PeachCheck} alt='체크표시' />
      <Typography.Display
        size={TypographySize.SMALL}
        weight={TypographyWeight.SEMIBOLD}
      >
        사연이 등록되었습니다!
      </Typography.Display>
    </Flex>
    <Link href='/'>
      <Button
        fullWidth
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
      >
        돌아가기
      </Button>
    </Link>
  </>
}
import Flex from '@/components/layout/Flex'
import { NumberPreset } from '@/lib/variables'
import Envelop from '@/public/envelope.png'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'
import { ColorPalette } from '@/lib/colors'
import { TypographySize, TypographyWeight } from '@/components/ui/Typography/shared'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/shared'
import { auth } from '@/utils/auth'
import { redirect } from 'next/navigation'

import s from './page.module.scss'

export default async function IndexPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login')
  }

  return <>
    <Flex
      className={s.top}
      direction='column' align='center' justify='center'
      gap={NumberPreset[24]}
      height='100%'
    >
      <Flex direction='column' align='center' gap={NumberPreset[16]}>
        <div className={s.image}>
          <Image src={Envelop} alt='편지' />
        </div>
        <Typography.Display
          className={s.title}
          color={ColorPalette.Peach}
          size={TypographySize.SMALL}
          weight={TypographyWeight.SEMIBOLD}
        >
          당신의 따뜻한 마음을 <br />
          전달해드립니다
        </Typography.Display>
      </Flex>
      <Typography.Text
        color={ColorPalette.Gray700}
        size={TypographySize.SMALL}
        weight={TypographyWeight.MEDIUM}
      >
        응원의 메세지를 보내주세요.
      </Typography.Text>
    </Flex>
    <Flex direction='column' align='center' gap={NumberPreset[16]}>
      <Typography.Text
        color={ColorPalette.Gray300}
        size={TypographySize.EXTRASMALL}
        weight={TypographyWeight.MEDIUM}
      >
        아니면, 사연을 공유하고 싶으신가요?
      </Typography.Text>
      <Link href='/new-story'>
        <Button
          fullWidth
          size={ButtonSize.LARGE}
        >
          사연 작성하기
        </Button>
      </Link>
      <Link href='/story'>
        <Button
          fullWidth
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
        >
          사연 보러가기
        </Button>
      </Link>
    </Flex>
  </>
}

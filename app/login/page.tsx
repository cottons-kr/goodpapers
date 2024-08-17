import Flex from '@/components/layout/Flex'
import Button from '@/components/ui/Button'
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/shared'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { auth, signIn } from '@/utils/auth'
import { redirect } from 'next/navigation'

import s from './page.module.scss'

export default async function LoginPage() {
  const session = await auth()
  if (session?.user) {
    redirect('/')
  }

  const handleLogin = async () => {
    'use server'
    await signIn('google', { redirectTo: '/' })
  }

  return <>
    <Flex className={s.container} direction='column' align='center' justify='space-between' height='100%'>
      <Image className={s.logo} src={Logo} alt='굿페이퍼즈' />
      <form className={s.login} action={handleLogin}>
        <Button
          type='submit'
          fullWidth
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
        >Google로 로그인</Button>
      </form>
    </Flex>
  </>
}

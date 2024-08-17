import Flex from '@/components/layout/Flex'
import Button from '@/components/ui/Button'
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/shared'

export default function LoginPage() {
  return <>
    <Flex direction='column'>
      <Button
        fullWidth
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
      >Google로 로그인</Button>
    </Flex>
  </>
}

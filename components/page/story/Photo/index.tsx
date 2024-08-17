import classNames from 'classnames'
import s from './style.module.scss'

type StoryPhotoProps = {
  order: number
  src: string
}
export default function StoryPhoto(props: StoryPhotoProps) {
  function getCharacterType(n: number) {
    const pattern = ['big', 'small', 'small', 'big', 'big', 'small', 'small', 'big']
    const index = (n - 1) % pattern.length
    return pattern[index]
  }
  const size = getCharacterType(props.order)

  return <>
    <img
      className={classNames(s.photo, s[size])}
      src={props.src}
      alt={`사진 ${props.order}`}
    />
  </>
}

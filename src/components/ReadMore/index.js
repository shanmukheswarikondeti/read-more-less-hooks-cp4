// Write your code here
import {useState} from 'react'

import {
  MainPage,
  HooksContainer,
  HooksHeading,
  HooksCaption,
  HooksImage,
  HooksDescriptionContainer,
  HooksDescription,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isExpanded, setIsExpanded] = useState(false)

  const onClickReadMoreButton = () => {
    setIsExpanded(prevValue => !-prevValue)
  }

  const displayText = isExpanded
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <MainPage>
      <HooksContainer>
        <HooksHeading>React Hooks</HooksHeading>
        <HooksCaption>Hooks are a new addition to React</HooksCaption>
        <HooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <HooksDescriptionContainer>
          <HooksDescription>{displayText}</HooksDescription>
          <ReadMoreButton type="button" onClick={onClickReadMoreButton}>
            Read {isExpanded ? 'Less' : 'More'}
          </ReadMoreButton>
        </HooksDescriptionContainer>
      </HooksContainer>
    </MainPage>
  )
}
export default ReadMore

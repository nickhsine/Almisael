import styled from 'styled-components'
import { CollapsibleWrapper } from './collapsible/CollapsibleWrapper'
import { currentYear, electionNamePairs } from './helper/election'
import { Infobox } from './infobox/Infobox'

const Wrppaer = styled.div`
  width: 320px;
`
const InfoboxWrapper = styled(CollapsibleWrapper)`
  width: 100%;
  background-color: white;
  pointer-events: auto;
  margin: 22px 0 0;
`

const InfoboxYear = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`

export const InfoboxPanel = ({
  className,
  data,
  subtype,
  compareInfo,
  election,
  year,
  number,
}) => {
  const { compareMode } = compareInfo
  const electionName = electionNamePairs.find(
    (electionNamePair) =>
      electionNamePair.electionType === election.electionType
  )?.electionName
  const title = compareMode
    ? election.electionType === 'referendum'
      ? `${number?.year} ${number?.name}`
      : electionName
    : '詳細資訊'
  return (
    <Wrppaer className={className}>
      {compareMode && !number && <InfoboxYear>{year.key}</InfoboxYear>}
      <InfoboxWrapper title={title}>
        <Infobox
          data={data}
          subtype={subtype}
          isCurrentYear={year.key === currentYear}
          year={year.key}
        />
      </InfoboxWrapper>
    </Wrppaer>
  )
}

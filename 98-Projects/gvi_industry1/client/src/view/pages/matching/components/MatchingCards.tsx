import React from 'react'
interface MatchingCardProps {
  mentorsList: any
}
const MatchingCard = (props: MatchingCardProps) => {
  const { mentorsList } = props
  return (

    <div className='matching-grid'>
      {mentorsList.map((mentor: any) =>
        <div className='matching-card' key={mentor._id}>{mentor.fullName}</div>
      )}

    </div>
  )
}

export default MatchingCard
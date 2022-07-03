import React from 'react'
interface MatchingCardProps {
  mentorsList: any
}
const MatchingCard = (props: MatchingCardProps) => {
  const { mentorsList } = props
  return (
    <div>
      <h2>Matchings that are appropriate for you</h2>
      <div className='matching-grid'>
        {mentorsList.map((mentor: any) =>
          <div className='matching-card' key={mentor._id}>
            <img className='matching-card__pic' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            <div className='matching-card__details'>
              <p>{mentor.fullName}</p>
              <p>Primary occupation</p>
              <div className='matching-card-flex'>
                <img className='matching-card-flex__linkedin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" />
                <button className='matching-card-flex__request' >Send Request</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default MatchingCard
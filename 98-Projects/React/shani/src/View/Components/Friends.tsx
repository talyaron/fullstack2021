import React from 'react'
interface friendsProps{
  friends:Array<friend>
}
interface friend {
    friendPic:string;
    friendName: string;
}
const Friends = (props:friendsProps) => {
    const {friends}=props
  return (
    <div className="friends">
         {friends.map((friend:any)=>{
        return (
         
          <div>
             <img src={friend.friendPic}/>
            <h3>{friend.friendName}</h3> 
             </div>
        )
      })}
    </div>
  )
}

export default Friends
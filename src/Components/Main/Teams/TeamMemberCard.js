import React from "react";
import memberData from "./TeamsData";

const TeamMemberCards = ({ids,openMemberDetails, ...props}) => {
    const grabMemberDetails = (event)=>{
        event.preventDefault();
        openMemberDetails(event.target.closest('figure').dataset.member);
        console.log(event.target.dataset.member);
    }
    const members = ids.map( id =>  {
        const member = memberData[id];
        return(
        <figure className="TeamMember" data-member={member.id} onClick={grabMemberDetails}>
            <img src={`./img/members/${member.id}.jpg`} alt={`Portorate of ${member.name}`}/>
            <figcaption>
                <b>{member.name}</b><br/>
                {member.position}
            </figcaption>
        </figure>)
        })

    console.log(members);
    return (
        <div id="TeamMembers">
            {members}
        </div>
      );
  };
  
  export default TeamMemberCards;
  
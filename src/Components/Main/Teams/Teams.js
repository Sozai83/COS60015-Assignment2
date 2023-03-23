import React, {useState} from "react";
import AboutTeams from './AboutTeams'
import TeamMembers from "./TeamMembers";
import TeamMemberDetails from "./TeamMemberDetails"
import '../../../CSS/layout/teams.scss'

const Teams = () => {
  const [detailStatus, setDetailStatus] = useState('Hidden');
  const toggleDetailStatus = () => setDetailStatus((curStatus) => curStatus ? '' : 'Hidden');
  const [member, setMember] = useState('fw1');
  const openMemberDetails = (newMember)=>{
    toggleDetailStatus();
    setMember(newMember);
  }

  return (
    <section id="Teams">
        <AboutTeams/>
        <TeamMembers 
          openMemberDetails={openMemberDetails}
        />
        <TeamMemberDetails className={detailStatus}
          toggleDetailStatus={toggleDetailStatus}
          member={member}
        />
    </section>
    );
};

export default Teams;

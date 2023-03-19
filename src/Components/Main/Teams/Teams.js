import React from "react";
import AboutTeams from './AboutTeams'
import TeamMembers from "./TeamMembers";
import TeamMemberDetails from "./TeamMemberDetails"
import '../../../CSS/layout/teams.scss'

const Teams = () => {
  return (
    <section id="Teams">
        <AboutTeams/>
        <TeamMembers />
        <TeamMemberDetails />
    </section>
    );
};

export default Teams;

import React from "react";
import AboutTeams from './AboutTeams'
import TeamMembers from "./TeamMembers";
import TeamMemberDetails from "./TeamMemberDetails"

const Teams = () => {
  return (
    <section id="teams">
        <AboutTeams/>
        <TeamMembers />
        <TeamMemberDetails />
    </section>
    );
};

export default Teams;

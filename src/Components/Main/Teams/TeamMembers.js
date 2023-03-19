import React from "react";

const TeamMembers = () => {
  return (
    <div>
        <h3>Team Members</h3>
        <div id="TeamMembersWrapper">
            <button className="Prev Hidden"><span>&#10094;</span></button>
            <div id="TeamMembersContainer">
                <div id="TeamMembers">
                    <figure className="TeamMember" data-member="fw1">
                        <img src="./img/members/fw1.jpg" alt="fw1"/>
                        <figcaption><b>Keita Inagaki</b><br/>Forward</figcaption>
                    </figure>
                </div>
            </div>
            <button className="Next Hidden"><span>&#10095;</span></button>
            <i className="Credit">Photos from <a href="http://en.rugby-japan.jp/japan/">Japan rugby</a></i>
            <div className="TeamsDots">
                <button className="Dot Active" data-calousel="0"></button>
                <button className="Dot" data-calousel="1"></button>
                <button className="Dot" data-calousel="2"></button>
                <button className="Dot" data-calousel="3"></button>
                <button className="Dot" data-calousel="4"></button>
                <button className="Dot" data-calousel="5"></button>
            </div>
        </div>
    </div>    
    );
};

export default TeamMembers;

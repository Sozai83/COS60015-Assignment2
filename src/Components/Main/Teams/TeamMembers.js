import React from "react";

const TeamMembers = () => {
  return (
    <div>
        <h3>Team Members</h3>
        <div id="team-members-wrapper">
            <button class="prev hidden"><span>&#10094;</span></button>
            <div id="team-members-container">
                <div id="team-members">
                    <figure class="team-member" data-member="fw1">
                        <img src="./img/members/fw1.jpg" alt="fw1"/>
                        <figcaption class="fw1"><b>Keita Inagaki</b><br/>Forward</figcaption>
                    </figure>
                </div>
            </div>
            <button class="next hidden"><span>&#10095;</span></button>
            <i class="credit">Photos from <a href="http://en.rugby-japan.jp/japan/">Japan rugby</a></i>
            <div class="teams-dots">
                <button class="dot active" data-calousel="0"></button>
                <button class="dot" data-calousel="1"></button>
                <button class="dot" data-calousel="2"></button>
                <button class="dot" data-calousel="3"></button>
                <button class="dot" data-calousel="4"></button>
                <button class="dot" data-calousel="5"></button>
            </div>
        </div>
    </div>    
    );
};

export default TeamMembers;

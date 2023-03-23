import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCards from "./TeamMemberCard";
import Slider from "react-slick";


const TeamMembers = ({openMemberDetails, ...props}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <h3>Team Members</h3>
        <div id="TeamMembersWrapper">
                <Slider {...settings}>
                    <TeamMemberCards 
                        ids={['fw1', 'fw2', 'fw3', 'fw4', 'fw5', 'fw6']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw7','fw8', 'fw9', 'fw10', 'fw11', 'fw12']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw13', 'fw14', 'fw15', 'fw16', 'fw17', 'fw18']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw19', 'fw20', 'fw21', 'bk1', 'bk2', 'bk3']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['bk4', 'bk5', 'bk6', 'bk7', 'bk8', 'bk9']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['bk10','bk11']}
                        openMemberDetails={openMemberDetails}
                    />
                </Slider>
            <i className="Credit">Photos from <a href="http://en.rugby-japan.jp/japan/">Japan rugby</a></i>
        </div>
    </div>    
    );
};

export default TeamMembers;
import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import team1 from '../../assets/Billeder/team/1.jpg';
import team2 from '../../assets/Billeder/team/2.jpg';
import team3 from '../../assets/Billeder/team/3.jpg';
import TeamModal from './TeamModal';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";


const teamImages = {
  'team1.jpg': team1,
  'team2.jpg': team2,
  'team3.jpg': team3,
};

const Team = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [teamData, setTeamData] = useState([]);

  const [selectedMember, setSelectedMember] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  

    useEffect(() => {
      makeRequest('http://localhost:5029/team');
    }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setTeamData(data);
    }
  }, [data]);
  
  const handleImageClick = (member) => {
    setSelectedMember({
      ...member,
      image: teamImages[member.image],
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-medium mb-4 font-display">Experienced Team</h1>
        <p
          className="text-sm text-center mb-6 text-custom-gray font-thin leading-8"
          dangerouslySetInnerHTML={{
            __html: `
              To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin.
            `,
          }}
        ></p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <div key={member._id} className="relative flex flex-col items-center p-4">
              <img
                src={teamImages[member.image]}
                alt={`${member.firstname} ${member.lastname}`}
                className="w-full h-auto mb-4 border-gray-300"
              />
              <div className="absolute bottom-10 transform translate-y-1/2 bg-white p-4 w-80 shadow-lg ">
                <h3 className="text-xl font-display">{member.firstname} {member.lastname}</h3>
                <p className="text-gray-500 font-thin text-medium mt-2">Thai Message</p>
              </div>
            </div>
          ))}
        </div>
        
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <div key={member._id} className="relative flex flex-col items-center p-4" onClick={() => handleImageClick(member)}>
              <img
                src={teamImages[member.image]}
                alt={`${member.firstname} ${member.lastname}`}
                className="w-full h-auto mb-4 border-gray-300"
              />
              <div className="absolute bottom-10 transform translate-y-1/2 bg-white p-4 w-80 shadow-lg">
                <h3 className="text-xl font-display">{member.firstname} {member.lastname}</h3>
                <p className="text-gray-500 font-thin text-medium mt-2">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <TiSocialFacebook className="text-gray-700 hover:text-red-500" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TiSocialTwitter className="text-gray-700 hover:text-red-500" />
                  </a>
                  <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                    <TiSocialGooglePlus className="text-gray-700 hover:text-red-500" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <SlSocialInstagram className="text-gray-700 hover:text-red-500" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TeamModal member={selectedMember} isOpen={isModalOpen} onClose={closeModal} />
  </section>
  );
};

export default Team;
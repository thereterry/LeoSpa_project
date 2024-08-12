import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import team1 from '../../assets/Billeder/team/1.jpg';
import team2 from '../../assets/Billeder/team/2.jpg';
import team3 from '../../assets/Billeder/team/3.jpg';
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

  useEffect(() => {
    makeRequest('http://localhost:5029/team');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setTeamData(data);
    }
  }, [data]);

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <div 
              key={member._id} 
              className="relative flex flex-col items-center p-4 group"
              // No need for onClick here, as we're doing a hover effect
            >
              <img
                src={teamImages[member.image]}
                alt={`${member.firstname} ${member.lastname}`}
                className="w-full h-auto mb-4 border-gray-300"
              />
    
              <div className="absolute bottom-0 flex flex-col items-center justify-center bg-white p-4  w-4/5 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-4">
                <h3 className="text-xl font-display">{member.firstname} {member.lastname}</h3>
                <p className="text-gray-500 font-thin text-medium mt-2">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      {/* Social media with circle around and hover effect */}
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded-full hover:bg-white transition-colors">
                      <TiSocialFacebook className="text-gray-700 hover:text-red-700 text-2xl font-bold" />
                    </div>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        {/* Social media with circle around and hover */}
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded-full hover:bg-white transition-colors">
                      <TiSocialTwitter className="text-gray-700 hover:text-red-700 text-2xl font-bold" />
                    </div>
                  </a>
                  <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                      {/* Social media with circle around and hover */}
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded-full hover:bg-white transition-colors">
                        <TiSocialGooglePlus className="text-gray-700 hover:text-red-700 text-2xl font-bold" />
                    </div>
               
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    {/* Social media with circle around and hover */}
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded-full hover:bg-white transition-colors">
                        <SlSocialInstagram className="text-gray-700 hover:text-red-700 text-2xl font-bold" />
                    </div>
                    
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
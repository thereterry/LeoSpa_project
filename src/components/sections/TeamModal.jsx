import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const TeamModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
        <img
          src={member.image}
          alt={`${member.firstname} ${member.lastname}`}
          className="w-full h-auto mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-display mb-2">{member.firstname} {member.lastname}</h3>
        <p className="text-gray-500 mb-4">{member.role}</p>
        <div className="flex justify-center space-x-4 mb-6">
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
  );
};

export default TeamModal;
import React from 'react';

function ProfileCard(props) {
  return (
    <div className="justify-center items-center  overflow-hidden shadow-lg p-6 bg-white">
      <img
        className="w-[150px] h-[150px] rounded-[100px] ml-[30%]  mx-auto"
        src={props.avatar}
        alt={props.name}
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{props.name}</h2>
        <p className="text-gray-600 mt-2">{props.bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
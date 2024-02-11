import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className=" -z-10 flex h-screen  w-full" data-aos="fade-left">
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <h2 className="text-2xl font-semibold">PROFILE</h2>
        <div className="flex space-x-4">
          <div className="flex-1 p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">User Name:</h2>
            <p>{user.name}</p>
            <h2 className="text-lg font-semibold">Phone Number:</h2>
            <p>{user.phoneNumber}</p>
            <h2 className="text-lg font-semibold">College Name:</h2>
            <p>{user.collegeName}</p>
            <h2 className="text-lg font-semibold">Email Verification Status:</h2>
            <p>{user.emailVerified ? 'Verified' : 'Not Verified'}</p>
            <h2 className="text-lg font-semibold">Sponsors Task Verification:</h2>
            <p>{user.sponsorsTaskVerified ? 'Verified' : 'Not Verified'}</p>
          </div>
          <div className="flex-1 p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">QR Code:</h2>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(user.qrCodeData)}&amp;size=200x200`} alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
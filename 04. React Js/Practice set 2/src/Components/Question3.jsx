/* eslint-disable react/prop-types */
const UserProfile = ({ user }) => {
  return (
    <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div>
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
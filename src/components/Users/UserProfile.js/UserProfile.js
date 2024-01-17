import { FaRegUser } from "react-icons/fa";
const UserProfile = ({ user }) => {
  const { fullName, email, phoneNumber, address } = user;
  return (
    <div className="w-[50%] flex flex-col gap-5">
      <div className=" flex flex-col items-center gap-5">
        <h2 className="text-3xl font-medium tracking-wider">
          Personal information
        </h2>
        <h3 className="flex justify-center items-center h-40 w-40 text-8xl bg-gray-300 rounded-full">
          <FaRegUser />
        </h3>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="flex flex-col gap-[0.5]">
          <h2 className="text-xl font-medium">Full Name</h2>
          <h3 className="text-md bg-gray-100 p-2 rounded-md tracking-wider">
            {fullName}
          </h3>
        </div>
        <div className="flex flex-col gap-[0.5]">
          <h2 className="text-xl font-medium">Email</h2>
          <h3 className="text-md bg-gray-100 p-2 rounded-md tracking-wider">
            {email}
          </h3>
        </div>
        <div className="flex flex-col gap-[0.5]">
          <h2 className="text-xl font-medium">Phone Number</h2>
          <h3 className="text-md bg-gray-100 p-2 rounded-md tracking-wider">
            {phoneNumber}
          </h3>
        </div>
        <div className="flex flex-col gap-[0.5]">
          <h2 className="text-xl font-medium">Address</h2>
          <h3 className="text-md bg-gray-100 p-2 rounded-md tracking-wider">
            {address}
          </h3>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;

import { Card, Typography } from "@material-tailwind/react";
import UserProfileUpdateFrom from "../../components/Users/UserProfile.js/UserProfileUpdateFrom";
import Error from "../../components/ui/Error";
import Loader from "../../components/ui/Loaders/Loader";
import { useGetUsersProfileQuery } from "../../features/users/usersApi";

const UpdateProfile = () => {
  const { data: user, isError, isLoading } = useGetUsersProfileQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="User not found" />;
  }

  if (!isLoading && !isError && user?._id) {
    content = <UserProfileUpdateFrom user={user} />;
  }

  return (
    <div className=" mx-auto max-w-4xl max-h-4xl my-auto hover:shadow-2xl duration-200 shadow-lg py-10 px-16 mt-20 rounded-md">
      <div className="flex justify-center gap-8 flex-col items-center md:flex-row px-20">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Update user Profile
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Provided user all fields
          </Typography>
          {content}
        </Card>
      </div>
    </div>
  );
};

export default UpdateProfile;

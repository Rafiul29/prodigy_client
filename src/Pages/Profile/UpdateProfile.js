import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import Error from "../../components/ui/Error";
import {
  useGetUsersProfileQuery,
  useUpdateUserProfileMutation,
} from "../../features/users/usersApi";

const UpdateProfile = () => {
  const { data: user } = useGetUsersProfileQuery();
  const [fullName, setFullName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [error, setError] = useState("");

  const [updateUserProfile, { data, isLoading, error: responseError }] =
    useUpdateUserProfileMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }

    if (data) {
      navigate("/profile");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    updateUserProfile({
      fullName,
      email,
      phoneNumber,
      address,
    });
  };

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
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                onChange={(e) => setFullName(e.target.value)}
                name="fullName"
                value={fullName}
                size="lg"
                required
                label="Full Name"
              />

              <Input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                size="lg"
                value={email}
                required
                label="Email Address"
              />

              <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
                type="tel"
                value={phoneNumber}
                size="lg"
                required
                label="Phone Number"
              />

              <Input
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                type="text"
                size="lg"
                value={address}
                required
                label="Address"
              />
            </div>

            <Button
              disabled={isLoading}
              type="submit"
              color="amber"
              className="mt-6 hover:text-white"
              fullWidth
            >
              Update profile
            </Button>

            {error !== "" && <Error message={error?.error} />}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UpdateProfile;

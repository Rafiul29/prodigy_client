import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfileMutation } from "../../../features/users/usersApi";
import Error from "../../ui/Error";

const UserProfileUpdateFrom = ({ user }) => {
  const {
    fullName: initialFullName,
    email: initialEmail,
    phoneNumber: initialPhoneNumber,
    address: initialAddess,
  } = user;

  const [fullName, setFullName] = useState(initialFullName);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [address, setAddress] = useState(initialAddess);
  const [error, setError] = useState();

  const [updateUserProfile, { data, error: responseError, isLoading }] =
    useUpdateUserProfileMutation();

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

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data) {
      navigate("/profile");
    }
  }, [data, responseError, navigate]);

  return (
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
        color="purple"
        className="mt-6 hover:text-white"
        fullWidth
      >
        Update profile
      </Button>
      {error && <Error message={error?.error} />}
    </form>
  );
};

export default UserProfileUpdateFrom;

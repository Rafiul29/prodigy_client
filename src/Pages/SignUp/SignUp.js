import { Player } from "@lottiefiles/react-lottie-player";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../../components/ui/Error";
import { useRegisterMutation } from "../../features/auth/authApi";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data.error);
    }

    if (data?.user) {
      navigate("/signin");
    }
   
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Password Must be same");
      return;
    }
    register({
      fullName,
      email,
      password,
      phoneNumber,
      address,
    });
  };

  return (
    <div className=" mx-auto max-w-4xl max-h-4xl my-auto hover:shadow-2xl duration-200 shadow-lg py-10 px-16 mt-20 rounded-md">
      <div className="flex justify-center gap-8 flex-col items-center md:flex-row px-20">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Sign Up to get full access
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                onChange={(e) => setFullName(e.target.value)}
                name="name"
                size="lg"
                required
                label="Full Name"
              />

              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                size="lg"
                required
                label="Email Address"
              />

              <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
                type="tel"
                size="lg"
                required
                label="Phone Number"
              />

              <Input
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                type="text"
                size="lg"
                required
                label="Address"
              />

              <Input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                size="lg"
                required
                label="Password"
              />

              <Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                type="password"
                size="lg"
                required
                label="Confirm Password"
              />
            </div>

            <Button
              disabled={isLoading}
              type="submit"
              color="amber"
              className="mt-6 mb-2 hover:text-white"
              fullWidth
            >
              Sign up
            </Button>

            {error !== "" && <Error message={error} />}

            <Link to="/signin">
              <Typography
                color="gray"
                className="mt-4 text-center font-medium transition-colors  flex gap-3"
              >
                Already have an account?{" "}
                <p className="text-amber-300 hover:text-amber-700">Sign In</p>
              </Typography>
            </Link>
          </form>
        </Card>
        <div className="">
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_nUTP5Vd52q.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

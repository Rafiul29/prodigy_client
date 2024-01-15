import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
import Error from "../../components/ui/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const[login,{data,isLoading, error: responseError}]=useLoginMutation();

  const navigate=useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }

    if (data?.token && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    login({
      email,
      password,
    })
  };

  return (
    <div className=" mx-auto max-w-4xl max-h-4xl my-auto hover:shadow-2xl duration-200 shadow-lg py-10 px-10 mt-20 ">
      <div className="flex justify-center flex-col items-center my-auto max-h-3xl md:flex-row-reverse">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign in
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your email and password to login
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                name="email"
                size="lg"
                label="Email"
                color="amber"
              />

              <Input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                size="lg"
                value={password}
                required
                label="Password"
                color="amber"
              />
            </div>

            <Button disabled={isLoading} type="submit" className="mt-6" fullWidth color="purple">
              Sign In
            </Button>


            {error!=="" && <Error message={error.error}/>}

            <Link to="/signup">
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <a
                  href="/"
                  className="font-medium text-purple-500 transition-colors hover:text-deep-purple-700"
                >
                  Sign Up
                </a>
              </Typography>
            </Link>
          </form>
        </Card>
        <div className="">
          <Player
            src="https://assets8.lottiefiles.com/private_files/lf30_kj1v7uim.json"
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

export default Login;

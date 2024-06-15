import React, { useRef, useEffect } from "react";
import { Container, Row, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
// import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about",
    display: "About",
  },
];

const navList = (
  <ul className="flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="px-1 font-semibold"
    >
      <Link to="/" className="flex items-center text-xl">
        Home
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="px-1 font-semibold"
    >
      <Link to="services" className="flex items-center text-xl">
        Services
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="px-1 font-semibold"
    >
      <Link to="about" className="flex items-center text-xl">
        About
      </Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="px-1 font-semibold"
    >
      <Link to="/" className="flex items-center text-xl">
        Docs
      </Link>
    </Typography>
  </ul>
);

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <>
      <Navbar className="h-max max-w-full flex justify-center rounded-none py-3 lg:px-8 lg:py-4 bg-[#ff9a16]">
        <div className="w-[80%]">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="/"
              className=" cursor-pointer font-medium flex items-center"
            >
              <img src={logo} alt="logo" height={80} width={80} />
              <h1 className="text-2xl font-semibold text-zinc-800">
                Insure Smart
              </h1>
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {isAuthenticated ? (
                  <div className="gap-3 flex justify-center items-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={user.picture}
                        alt=""
                        width={90}
                        height={90}
                        className="p-[20px] rounded-full"
                      />
                      <h1 className="text-xl capitalize">{user.name}</h1>
                    </div>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      <span className="text-xl">Log Out</span>
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                    onClick={() => loginWithRedirect()}
                  >
                    <span className="text-xl  px-3 py-2">Log In</span>
                  </Button>
                )}
              </div>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              {isAuthenticated ? (
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      src={user.picture}
                      alt=""
                      width={90}
                      height={90}
                      className="p-[20px] rounded-full"
                    />
                    <h1 className="text-xl capitalize">{user.name}</h1>
                  </div>
                  <Button
                    fullWidth
                    variant="gradient"
                    size="sm"
                    className=""
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    <span>Log Out</span>
                  </Button>
                </div>
              ) : (
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className="mt-2"
                  onClick={() => loginWithRedirect()}
                >
                  <span>Login in</span>
                </Button>
              )}
            </div>
          </MobileNav>
        </div>
      </Navbar>
    </>
  );
};

export default Header;

// {
//   isAuthenticated ? (
// <div className="flex gap-4 justify-center">
//   <div className="flex items-center justify-center">
//     <img
//       src={user.picture}
//       alt=""
//       width={90}
//       height={90}
//       className="p-[20px] rounded-full"
//     />
//     <h1 className="text-xl capitalize">{user.name}</h1>
//   </div>

//       <Button
//         onClick={() =>
//           logout({
//             logoutParams: { returnTo: window.location.origin },
//           })
//         }
//       >
//         <div className="flex gap-4">
//           <Button className="text-xl ">Log Out</Button>
//         </div>
//       </Button>
//     </div>
//   ) : (
//     <Button
//       onClick={() => loginWithRedirect()}
//       className="shadow-lg bg-slate-700 text-white  rounded px-4 py-2 shadow-slate-300"
//     >
//       Log In
//     </Button>
//   );
// }

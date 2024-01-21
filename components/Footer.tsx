import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="z-10 flex h-14 w-screen bg-black">
      <div className="w-72 flex-grow-0">left</div>
      <div className="flex flex-1 justify-between ">
        <div className="flex w-80">
          <Link
            id="CreativeCommons"
            className="mx-3 self-center"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <g clip-path="url(#clip0_71_1659)">
                <path
                  d="M17.0557 -0.000514486C7.60404 0.239211 0 7.99043 0 17.4995C0 27.1595 7.84 34.9995 17.5 34.9995C27.16 34.9995 35 27.1595 35 17.4995C35 7.83949 27.16 -0.000514486 17.5 -0.000514486C17.3491 -0.000514486 17.2057 -0.00431965 17.0557 -0.000514486ZM17.0386 3.0073C17.1936 3.00238 17.3438 3.0073 17.5 3.0073C25.4997 3.0073 31.9922 9.4998 31.9922 17.4995C31.9922 25.4992 25.4997 31.9917 17.5 31.9917C9.50031 31.9917 3.00781 25.4992 3.00781 17.4995C3.00781 9.65604 9.25472 3.25409 17.0386 3.0073Z"
                  fill="#F8F8F8"
                />
                <path
                  d="M9.90707 14.6478H8.4082L11.8091 18.4588L15.21 14.6478H13.9829C14.2487 12.7885 15.8843 11.5927 17.7734 11.7425C17.8481 11.7484 17.9199 11.7425 17.9956 11.7425C21.0731 11.7425 22.2868 14.07 22.3877 17.5018C22.493 21.0834 20.417 23.3098 17.9956 23.2611C15.4398 23.2107 14.4715 21.9882 14.0991 20.1336H9.53613C10.2871 24.4054 13.432 26.9105 17.8931 26.9183C22.9432 26.9272 26.5918 22.7023 26.5918 17.5018C26.5918 11.9483 22.9445 8.0853 17.8931 8.0853C17.7431 8.0853 17.5969 8.07715 17.4487 8.0853C17.4129 8.08727 17.382 8.08471 17.3462 8.0853C14.1895 8.13778 9.90709 10.3492 9.90707 14.6478Z"
                  fill="#F8F8F8"
                />
              </g>
              <defs>
                <clipPath id="clip0_71_1659">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className="w-60 self-center text-xs font-light text-white">
            {" "}
            This site is licensed under CC BY-SA 4.0{" "}
          </div>
        </div>
        <div className=" flex w-80 justify-around self-center ">
          <Link id="GitHub" href="https://github.com/mmmmmob" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <g clip-path="url(#clip0_71_1664)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5145 0C7.82942 0 0 7.88715 0 17.6446C0 25.4443 5.01658 32.0465 11.9759 34.3833C12.846 34.559 13.1647 34.0036 13.1647 33.5365C13.1647 33.1274 13.136 31.7253 13.136 30.2644C8.26393 31.3163 7.24936 28.1611 7.24936 28.1611C6.46638 26.1161 5.30626 25.5906 5.30626 25.5906C3.71162 24.5097 5.42241 24.5097 5.42241 24.5097C7.19128 24.6265 8.11946 26.3208 8.11946 26.3208C9.68505 29.0082 12.2079 28.2489 13.2228 27.7814C13.3676 26.6421 13.8319 25.8533 14.3248 25.4152C10.439 25.0062 6.35059 23.4872 6.35059 16.7096C6.35059 14.7816 7.04609 13.2042 8.14814 11.9773C7.97426 11.5393 7.36516 9.72772 8.32237 7.30314C8.32237 7.30314 9.80121 6.83565 13.1357 9.11431C14.5633 8.72808 16.0356 8.5316 17.5145 8.52995C18.9933 8.52995 20.5008 8.73465 21.8929 9.11431C25.2277 6.83565 26.7066 7.30314 26.7066 7.30314C27.6638 9.72772 27.0543 11.5393 26.8805 11.9773C28.0116 13.2042 28.6784 14.7816 28.6784 16.7096C28.6784 23.4872 24.59 24.9768 20.6751 25.4152C21.3132 25.9702 21.8639 27.0217 21.8639 28.687C21.8639 31.0531 21.8352 32.9521 21.8352 33.5361C21.8352 34.0036 22.1543 34.559 23.024 34.3836C29.9833 32.0462 34.9999 25.4443 34.9999 17.6446C35.0286 7.88715 27.1705 0 17.5145 0Z"
                  fill="#F8F8F8"
                />
              </g>
              <defs>
                <clipPath id="clip0_71_1664">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            id="LinkedIn"
            href="https://linkedin.com/in/theppitak-m"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M32.4092 0H2.58398C1.15527 0 0 1.12793 0 2.52246V32.4707C0 33.8652 1.15527 35 2.58398 35H32.4092C33.8379 35 35 33.8652 35 32.4775V2.52246C35 1.12793 33.8379 0 32.4092 0ZM10.3838 29.8252H5.18848V13.1182H10.3838V29.8252ZM7.78613 10.8418C6.11816 10.8418 4.77148 9.49512 4.77148 7.83398C4.77148 6.17285 6.11816 4.82617 7.78613 4.82617C9.44727 4.82617 10.7939 6.17285 10.7939 7.83398C10.7939 9.48828 9.44727 10.8418 7.78613 10.8418ZM29.8252 29.8252H24.6367V21.7041C24.6367 19.7695 24.6025 17.2744 21.9365 17.2744C19.2363 17.2744 18.8262 19.3867 18.8262 21.5674V29.8252H13.6445V13.1182H18.6211V15.4014H18.6895C19.3799 14.0889 21.0752 12.7012 23.5977 12.7012C28.8545 12.7012 29.8252 16.1602 29.8252 20.6582V29.8252Z"
                fill="#F8F8F8"
              />
            </svg>
          </Link>
          <Link id="Medium" href="https://medium.com/@mmmmmob" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M35 17.2487C35 21.8852 34.2229 25.6462 33.2641 25.6462C32.3053 25.6462 31.5286 21.8862 31.5286 17.2487C31.5286 12.6112 32.3056 8.85127 33.2641 8.85127C34.2226 8.85127 35 12.6109 35 17.2487Z"
                fill="#F8F8F8"
              />
              <path
                d="M30.5708 17.2487C30.5708 22.4248 28.3611 26.6225 25.6352 26.6225C22.9093 26.6225 20.6996 22.4248 20.6996 17.2487C20.6996 12.0726 22.909 7.87493 25.6349 7.87493C28.3607 7.87493 30.5705 12.0713 30.5705 17.2487"
                fill="#F8F8F8"
              />
              <path
                d="M19.7421 17.2487C19.7421 22.7477 15.3226 27.2055 9.87122 27.2055C4.41981 27.2055 0 22.7467 0 17.2487C0 11.7508 4.41948 7.29167 9.87122 7.29167C15.323 7.29167 19.7421 11.7498 19.7421 17.2487Z"
                fill="#F8F8F8"
              />
            </svg>
          </Link>
          <Link
            id="Xbox"
            href="https://www.trueachievements.com/gamer/mmmmmob-1844"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M17.4614 0C14.1965 0 11.0842 0.913638 8.50331 2.51146C8.33668 2.56701 8.04876 2.78615 7.78702 3.01822C10.1039 1.17767 15.4616 4.86419 17.0259 5.96213C17.2892 6.14702 17.635 6.14702 17.8983 5.96213C19.4626 4.86419 24.8203 1.17691 27.1372 3.01822C26.8754 2.78615 26.5868 2.56701 26.4209 2.51146C23.8393 0.913638 20.7263 0 17.4614 0ZM6.80919 4.56522C5.59408 4.56522 4.70639 5.55494 4.70639 5.55494C1.82118 8.67451 0 12.8587 0 17.5C0 27.163 7.81962 35 17.4614 35C22.5478 35 27.1791 32.7935 30.3679 29.2935C30.3679 29.2935 29.9884 27.0106 27.635 23.6627C25.0032 19.6933 19.6718 14.6939 17.9651 13.1592C17.6737 12.8974 17.2393 12.8989 16.9502 13.1636C15.6643 14.3407 12.3463 17.6353 11.6151 18.4897C9.86895 20.3158 5.00998 26.0975 4.70639 29.3693C4.70639 29.3693 3.64294 26.7829 5.99631 20.8481C7.46098 17.2827 12.01 11.9822 14.2158 9.66988C14.5087 9.36325 14.5017 8.87867 14.192 8.58802C13.4616 7.904 11.7589 6.70525 10.2242 5.78231C9.16201 5.09753 7.94821 4.6413 6.80919 4.56522ZM27.8773 4.56522C27.3804 4.56522 24.1525 5.58694 20.756 8.59694C20.4349 8.8815 20.4221 9.37807 20.7203 9.68623C21.9506 10.9576 25.3156 14.2141 27.3319 17.4242C29.8374 21.5329 31.3552 24.8043 30.4437 29.2935C33.2528 26.1739 35 22.0652 35 17.5C34.9239 12.9348 33.1773 8.7503 30.2921 5.63073C30.216 5.55465 30.1401 5.47796 30.0648 5.40188C29.4576 4.71709 28.5605 4.56522 27.8773 4.56522Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            id="Spotify"
            href="https://open.spotify.com/user/31dktzn7hgpezc436jcddbgsbyta"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M17.4465 0C7.81125 0 0 7.81104 0 17.4462C0 27.0819 7.81125 34.8923 17.4465 34.8923C27.0827 34.8923 34.8931 27.0819 34.8931 17.4462C34.8931 7.81167 27.0827 0.000833329 17.4463 0.000833329L17.4465 0ZM25.4473 25.1625C25.1348 25.675 24.464 25.8375 23.9515 25.5229C19.8552 23.0208 14.6985 22.4542 8.62562 23.8417C8.04042 23.975 7.45708 23.6083 7.32375 23.0229C7.18979 22.4375 7.555 21.8542 8.14167 21.7208C14.7875 20.2019 20.4881 20.8562 25.0869 23.6667C25.5994 23.9812 25.7619 24.65 25.4473 25.1625ZM27.5827 20.4115C27.189 21.0521 26.3515 21.2542 25.7119 20.8604C21.0223 17.9773 13.8737 17.1425 8.32687 18.8262C7.6075 19.0435 6.84771 18.6381 6.62937 17.92C6.41271 17.2006 6.81833 16.4423 7.53646 16.2235C13.8725 14.301 21.7494 15.2323 27.1348 18.5417C27.7744 18.9354 27.9765 19.7727 27.5827 20.4115ZM27.766 15.4648C22.1431 12.125 12.866 11.8179 7.4975 13.4473C6.63542 13.7087 5.72375 13.2221 5.4625 12.36C5.20125 11.4975 5.6875 10.5865 6.55021 10.3244C12.7129 8.45354 22.9577 8.815 29.4315 12.6581C30.2085 13.1183 30.4627 14.1198 30.0023 14.8942C29.544 15.6696 28.5398 15.9252 27.7669 15.4648H27.766Z"
                fill="#F8F8F8"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

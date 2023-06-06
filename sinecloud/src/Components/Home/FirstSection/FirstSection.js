import { Title } from "./Title/Title";
import cloudsImage from "./decoration/clouds.png";
import { motion as m } from "framer-motion";

export const FirstSection = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <section className="first-section">
      <svg
        className="swirly"
        width="120"
        height="162"
        viewBox="0 0 120 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4_110)">
          <path
            d="M23.3021 2.52934C9.88035 10.9348 3.46551 24.8791 8.974 33.6751C14.4825 42.471 29.8284 42.7877 43.2501 34.3823C50.772 29.6717 54.9795 22.8345 52.6476 19.1111C50.3158 15.3876 42.3278 16.1879 34.8059 20.8985C21.3841 29.3039 14.9693 43.2483 20.4778 52.0443C25.9863 60.8402 41.3323 61.1571 54.754 52.7517C62.2759 48.0411 66.4833 41.2038 64.1514 37.4802C61.8196 33.7568 53.8315 34.5571 46.3096 39.2677C32.8879 47.6731 26.5005 61.6613 32.0427 70.5111C37.585 79.361 52.9584 79.7216 66.3802 71.3162C73.902 66.6056 78.1094 59.7683 75.7775 56.0447C73.4456 52.3212 65.4578 53.1219 57.9359 57.8325C44.5142 66.238 38.0992 80.1821 43.6077 88.9781C49.1162 97.7741 64.4619 98.0904 77.8837 89.685C85.4056 84.9744 89.6133 78.1377 87.2814 74.4141C84.9495 70.6905 76.9614 71.4907 69.4395 76.2013C56.0177 84.6067 49.6031 98.5514 55.1116 107.347C60.6201 116.143 75.9658 116.46 89.3875 108.054C96.9094 103.344 101.117 96.5064 98.7853 92.7834C96.4534 89.0599 88.4652 89.8601 80.9433 94.5707C67.5216 102.976 61.1069 116.921 66.6151 125.716C72.1236 134.512 87.4697 134.829 100.891 126.424C108.413 121.713 112.621 114.876 110.289 111.152C107.957 107.429 99.9691 108.229 92.4472 112.94C79.0255 121.345 72.6378 135.333 78.1801 144.183C83.7223 153.033 99.0958 153.394 112.518 144.988"
            stroke="black"
            stroke-opacity="0.9"
            stroke-width="5"
            stroke-linecap="round"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4_110"
            x="0.499695"
            y="0.0290222"
            width="118.518"
            height="161.535"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_110"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_110"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <Title />
      <img src={cloudsImage} className="clouds" alt="clouds" />
      <m.div className="pink-field-div">
        Smooth Waves With the SOUNDCLOUD API
      </m.div>
      <section className="colorfields-section">
        <m.div
          className="field field-1 share"
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2, duration: 0.6 }}
          variants={variants}
        >
          <p>Share</p>
        </m.div>
        <m.div
          className="field field-2 listen"
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4, duration: 0.8 }}
          variants={variants}
        >
          <p>Listen</p>
        </m.div>
        <m.div
          className="field field-3 discover"
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6, duration: 0.9 }}
          variants={variants}
        >
          <p>Discover</p>
        </m.div>
        <m.div
          className="field field-4 enjoy"
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8, duration: 0.3 }}
          variants={variants}
        >
          <p>Enjoy</p>
        </m.div>
      </section>
      <img src={cloudsImage} className="clouds" alt="clouds" />
    </section>
  );
};

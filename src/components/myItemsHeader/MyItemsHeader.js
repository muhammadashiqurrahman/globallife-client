import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import "./myItemsHeader.scss";

const MyItemsHeader = () => {
  const { user } = useAuth();

  const { data, loading, error } = useFetch(
    `https://global-life-api.onrender.com/api/events/myevents/${user?.username}`
  );

  const [loadedData, setLoadedData] = useState();

  useEffect(() => {
    setLoadedData(data);
  }, [data]);

  return (
    <section className="myItemsHeader section-padding-72 bg-gray-3">
      <div className="container">
        <h3 className="fs-48 text-center">My Items, Reviews and Ratings</h3>
        <div className="item-box d-flex align-items-center">
          <div className="item d-flex">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#B0DDFF"
              />
              <path
                d="M36.625 18.625C36.5359 18.625 36.4445 18.6414 36.3531 18.6789L22.8437 24.107H19C18.7937 24.107 18.625 24.2805 18.625 24.4961V31.5039C18.625 31.7195 18.7937 31.893 19 31.893H21.3836C21.2969 32.1648 21.25 32.4531 21.25 32.7461C21.25 34.2906 22.5109 35.5469 24.0625 35.5469C25.3609 35.5469 26.4555 34.6656 26.7789 33.475L36.3555 37.3234C36.4469 37.3586 36.5383 37.3773 36.6273 37.3773C37.0234 37.3773 37.3773 37.0445 37.3773 36.5992V19.4031C37.375 18.9578 37.0234 18.625 36.625 18.625ZM24.0625 33.8664C23.4414 33.8664 22.9375 33.3648 22.9375 32.7461C22.9375 32.4836 23.0289 32.2328 23.1953 32.0336L25.1852 32.8328C25.1383 33.4094 24.6531 33.8664 24.0625 33.8664ZM35.6875 35.2352L23.4719 30.3273L23.1695 30.2055H20.3125V25.7945H23.1695L23.4719 25.6727L35.6875 20.7648V35.2352Z"
                fill="#4D585F"
              />
            </svg>
            <div>
              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">
                What's happening?
              </p>

              {loading && (
                <Spinner size="sm" animation="grow" variant="warning" />
              )}

              {!loading && !error && (
                <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">
                  {loadedData?.myEvents?.length > 0
                    ? loadedData?.myEvents?.length
                    : 0}
                </h5>
              )}
            </div>
          </div>
          <div className="item d-flex">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#A7FFDA"
              />
              <path
                d="M36.1212 33.8969C35.679 32.8496 35.0374 31.8984 34.2321 31.0961C33.4292 30.2915 32.4781 29.65 31.4313 29.207C31.4219 29.2023 31.4126 29.2 31.4032 29.1953C32.8633 28.1406 33.8126 26.4227 33.8126 24.4844C33.8126 21.2734 31.211 18.6719 28.0001 18.6719C24.7891 18.6719 22.1876 21.2734 22.1876 24.4844C22.1876 26.4227 23.1368 28.1406 24.5969 29.1977C24.5876 29.2023 24.5782 29.2047 24.5688 29.2094C23.5188 29.6523 22.5766 30.2875 21.768 31.0984C20.9634 31.9013 20.3219 32.8524 19.879 33.8992C19.4438 34.924 19.2091 36.0228 19.1876 37.1359C19.1869 37.161 19.1913 37.1858 19.2005 37.2091C19.2096 37.2324 19.2233 37.2537 19.2408 37.2716C19.2583 37.2895 19.2791 37.3037 19.3022 37.3134C19.3253 37.3231 19.35 37.3281 19.3751 37.3281H20.7813C20.8844 37.3281 20.9665 37.2461 20.9688 37.1453C21.0157 35.3359 21.7422 33.6414 23.0266 32.357C24.3555 31.0281 26.1204 30.2969 28.0001 30.2969C29.8797 30.2969 31.6446 31.0281 32.9735 32.357C34.2579 33.6414 34.9844 35.3359 35.0313 37.1453C35.0337 37.2484 35.1157 37.3281 35.2188 37.3281H36.6251C36.6501 37.3281 36.6749 37.3231 36.6979 37.3134C36.721 37.3037 36.7419 37.2895 36.7593 37.2716C36.7768 37.2537 36.7905 37.2324 36.7997 37.2091C36.8088 37.1858 36.8132 37.161 36.8126 37.1359C36.7891 36.0156 36.5571 34.9258 36.1212 33.8969ZM28.0001 28.5156C26.9243 28.5156 25.9118 28.0961 25.1501 27.3344C24.3883 26.5727 23.9688 25.5602 23.9688 24.4844C23.9688 23.4086 24.3883 22.3961 25.1501 21.6344C25.9118 20.8727 26.9243 20.4531 28.0001 20.4531C29.0758 20.4531 30.0883 20.8727 30.8501 21.6344C31.6118 22.3961 32.0313 23.4086 32.0313 24.4844C32.0313 25.5602 31.6118 26.5727 30.8501 27.3344C30.0883 28.0961 29.0758 28.5156 28.0001 28.5156Z"
                fill="#4D585F"
              />
            </svg>

            <div>
              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">
                Recommendations
              </p>
              <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">32</h5>
            </div>
          </div>
          <div className="item d-flex">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#FFC9C9"
              />
              <path
                d="M28.3438 26.3852V28.375H26.3633C26.2672 28.375 26.1875 28.4477 26.1875 28.5391V29.5234C26.1875 29.6125 26.2672 29.6875 26.3633 29.6875H28.3438V31.6773C28.3438 31.7688 28.4187 31.8438 28.5078 31.8438H29.4922C29.5836 31.8438 29.6562 31.7688 29.6562 31.6773V29.6875H31.6367C31.7328 29.6875 31.8125 29.6125 31.8125 29.5234V28.5391C31.8125 28.4477 31.7328 28.375 31.6367 28.375H29.6562V26.3852C29.6562 26.2938 29.5836 26.2188 29.4922 26.2188H28.5078C28.4187 26.2188 28.3438 26.2938 28.3438 26.3852ZM37.625 22.9937H29.2109L26.4617 20.3641C26.4267 20.3313 26.3807 20.3129 26.3328 20.3125H20.375C19.9602 20.3125 19.625 20.6477 19.625 21.0625V34.9375C19.625 35.3523 19.9602 35.6875 20.375 35.6875H37.625C38.0398 35.6875 38.375 35.3523 38.375 34.9375V23.7437C38.375 23.3289 38.0398 22.9937 37.625 22.9937ZM36.6875 34H21.3125V22H25.7305L28.5336 24.6812H36.6875V34Z"
                fill="#4D585F"
              />
            </svg>

            <div>
              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">
                Trading Post
              </p>
              <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">67</h5>
            </div>
          </div>
          <div className="item d-flex">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#E1DEFF"
              />
              <path
                d="M24.8085 24.6667C25.4186 23.372 27.0649 22.4444 29.0001 22.4444C31.4547 22.4444 33.4445 23.9368 33.4445 25.7778C33.4445 27.3327 32.0249 28.639 30.1047 29.0073C29.5021 29.1229 29.0001 29.6086 29.0001 30.2222M29 33.5556H29.0111M39 28C39 33.5228 34.5228 38 29 38C23.4772 38 19 33.5228 19 28C19 22.4772 23.4772 18 29 18C34.5228 18 39 22.4772 39 28Z"
                stroke="#4D585F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>
              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">Challenges</p>
              <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">18</h5>
            </div>
          </div>
          <div className="item d-flex">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#EBE49B"
              />
              <path
                d="M38.2831 24.2746L32.3323 23.4098L29.6722 18.0168C29.5995 17.8691 29.48 17.7496 29.3323 17.677C28.962 17.4941 28.512 17.6465 28.3268 18.0168L25.6667 23.4098L19.7159 24.2746C19.5518 24.2981 19.4018 24.3754 19.287 24.4926C19.1482 24.6353 19.0716 24.8273 19.0743 25.0264C19.0769 25.2254 19.1585 25.4153 19.3011 25.5543L23.6065 29.752L22.5893 35.6793C22.5655 35.8172 22.5807 35.959 22.6334 36.0886C22.686 36.2183 22.7739 36.3306 22.8872 36.4128C23.0004 36.4951 23.1344 36.5439 23.2739 36.5539C23.4135 36.5638 23.5531 36.5345 23.6768 36.4692L28.9995 33.6707L34.3222 36.4692C34.4675 36.5465 34.6362 36.5723 34.7979 36.5441C35.2057 36.4738 35.48 36.0871 35.4097 35.6793L34.3925 29.752L38.6979 25.5543C38.8151 25.4395 38.8925 25.2895 38.9159 25.1254C38.9792 24.7152 38.6932 24.3356 38.2831 24.2746ZM32.5807 29.1613L33.4268 34.0902L28.9995 31.7652L24.5722 34.0926L25.4182 29.1637L21.837 25.6715L26.787 24.952L28.9995 20.4684L31.212 24.952L36.162 25.6715L32.5807 29.1613Z"
                fill="#4D585F"
              />
            </svg>

            <div>
              <p className="mb-1 fs-14 ff-inter text-clr-dark-2">Reviews</p>
              <h5 className="mb-0 fs-30 ff-inter text-clr-dark-1">240</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyItemsHeader;

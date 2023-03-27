// import React, { useState, useEffect } from "react";
// import moment from "moment";

// export default function CountdownTimer() {
//   const [countdown, setCountdown] = useState("");

//   useEffect(() => {
//     const saleEndsAt = moment("2023-04-30T23:59:59+00:00");
//     const intervalId = setInterval(() => {
//       const now = moment();
//       const diff = moment.duration(saleEndsAt.diff(now));

//       // Calculate the percentage discount
//       const discountPercentage = 60;
//       const originalPrice = 100;
//       const salePrice =
//         originalPrice - (originalPrice * discountPercentage) / 100;

//       // Format the remaining time
//       const days = diff.days();
//       const hours = diff.hours();
//       const minutes = diff.minutes();
//       const seconds = diff.seconds();

//       const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//       if (diff.asSeconds() < 0) {
//         clearInterval(intervalId);
//         setCountdown(`Sale has ended. Original price: $${originalPrice}`);
//       } else if (diff.asSeconds() < 86400) {
//         setCountdown(
//           `Hurry! Sale ends in: ${countdownString}. Sale price: $${salePrice}`
//         );
//       } else {
//         setCountdown(
//           `Get 60% off! Sale ends in: ${countdownString}. Sale price: $${salePrice}`
//         );
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className=" text-black py-2 px-4 rounded-lg">
//       {countdown !== "" && <p>{countdown}</p>}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

 

function Count() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div>
      <p>The current date and time is:</p>
      <p>{date.getMinutes()}</p>
    </div>
  );
}



export default Count

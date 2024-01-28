import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <p className="font-bold dark:text-white">
        {time.toLocaleTimeString("en-GB", { timeZone: "Asia/Bangkok" })}
      </p>
      <p className="mx-1 font-light text-red dark:text-blue">
        •{" "}
        <a
          href={
            "https://maps.apple.com/place?q=Bangkok&auid=11435960156529778241&ll=13.753253,100.501641&lsp=7618&address=Bangkok,%20Bangkok,%20Thailand"
          }
          target={"_blank"}
        >
          Bangkok, Thailand
        </a>
      </p>
    </div>
  );
}

export default CurrentTime;

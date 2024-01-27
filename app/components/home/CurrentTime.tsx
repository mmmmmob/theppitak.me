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
      <p className="mx-1 text-red dark:text-blue">
        •{" "}
        <a href={"https://en.wikipedia.org/wiki/Bangkok"} target={"_blank"}>
          Bangkok, Thailand
        </a>
      </p>
    </div>
  );
}

export default CurrentTime;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";

const NavBar = ({ open, setOpen, classNames }) => {
  const [logoWords, setLogoWords] = useState("Peace Through Code");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const words = ["NXW", "Software", "Peace as Code"];
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count > 2) {
        setCount(0);
      } else {
        setLogoWords(words[count]);
        setCount(count + 1);
      }
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/">
          <h1>{logoWords}</h1>
        </Link>
      </div>
      <div className="right">
        <div className="menu-button">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full bg-sky-950 p-2 text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useEffect } from "react";
import { navData } from "../../lib/navData1";
import Expandicon from "../../lib/icons/Sidebaricons/Expandicon";
import Expandiconback from "../../lib/icons/Sidebaricons/Expandiconback";
import { useState } from "react";
import Link from "next/link";

export default function Sidenav() {
  const [Expanded, setExpanded] = useState(false);

  return (
    // Checking if sidebar is expanded and if so switch classes
    <nav className="nav-container">
      <div className={`expandeffect ${Expanded ? "sidebar" : "short"}`}>
        <div className="sidebartop">
          <button
            className="menuexpand"
            onClick={() => {
              setExpanded(!Expanded);
            }}
          >
            {Expanded ? <Expandiconback /> : <Expandicon />}
          </button>
        </div>
        <div className="separator"></div>
        <div className="sidebarmiddle">
          {navData.map(({ link, icon: Icon, title }, key) => {
            return (
              <Link
                href="/"
                to={link}
                key={key}
                className={({ isActive }) => {
                  if (isActive) return "active-nav";
                  return "inactive-nav";
                }}
                end
              >
                <div className="row">
                  <span>
                    <Icon />
                  </span>
                  {Expanded ? title : undefined}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

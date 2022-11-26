import React from "react";
import Homeicon from "./icons/Sidebaricons/Homeicon";
import Drafticon from "./icons/Sidebaricons/Drafticon";
import Cpqicon from "./icons/Sidebaricons/Cpqicon";
import Calendaricon from "./icons/Sidebaricons/Calendaricon";
import Invoiceicon from "./icons/Sidebaricons/Invoiceicon";
import Settingsicon from "./icons/Sidebaricons/Settingsicon";
import Logouticon from "./icons/Sidebaricons/Logouticon";

export const navData = [
  {
    id: 1,
    href: "/",
    title: "Home",
    icon: () => <Homeicon />,
  },
  {
    id: 2,
    href: "/draft",
    title: "Draft",
    icon: () => <Drafticon />,
  },
  {
    id: 3,
    href: "/cpq",
    title: "Cpq",
    icon: () => <Cpqicon />,
  },
  {
    id: 4,
    href: "/calendar",
    title: "Calendar",
    icon: () => <Calendaricon />,
  },
  {
    id: 5,
    href: "/invoice",
    title: "Invoice",
    icon: () => <Invoiceicon />,
  },
];

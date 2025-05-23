import "./globals.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Chip from "@mui/material/Chip";
import PersonIcon from "@mui/icons-material/Person";

export const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
    pattern: "orders{/:orderId}*",
  },
  {
    segment: "contacts",
    title: "Contacts",
    icon: <PersonIcon />,
    action: <Chip label={7} color="primary" size="small" />,
  },
  {
    segment: "calls",
    title: "Calls",
    icon: <CallIcon />,
    children: [
      {
        segment: "made",
        title: "Made",
        icon: <CallMadeIcon />,
        action: <Chip label={12} color="success" size="small" />,
      },
      {
        segment: "received",
        title: "Received",
        icon: <CallReceivedIcon />,
        action: <Chip label={4} color="error" size="small" />,
      },
    ],
  },
];

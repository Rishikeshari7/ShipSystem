import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaSatellite } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
 export const NavIcon = [
    {
      name: "Dashboard",
      to: "/",
      icon: RiDashboardHorizontalFill,
    },
    {
      name: "Realtime Map",
      to: "/map",
      icon: FaMapLocationDot,
    },
    {
      name: "Alert",
      to: "/alert",
      icon: TbAlertTriangleFilled,
    },
    {
      name: "Satellite Image",
      to: "/satellite",
      icon: FaSatellite,
    },
    {
      name: "Records",
      to: "/records",
      icon: FaFileAlt,
    },
    {
      name: "Setting",
      to: "/setting",
      icon: IoSettings,
    },
  ];
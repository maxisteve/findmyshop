import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Enquiry from "@/pages/Enquiry.vue";
import StudentDetails from "@/pages/StudentDetails.vue";
import Bill from "@/pages/Bill.vue";
import RoomMaster from "@/pages/RoomMaster.vue";
import FloorMaster from "@/pages/FloorMaster.vue";
import BlockMaster from "@/pages/BlockMaster.vue";
import HostelSetup from "@/pages/HostelSetup.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "hostelsetup",
        name: "Hostel Setup",
        component: HostelSetup,
      },
      {
        path: "roommaster",
        name: "Room Master",
        component: RoomMaster,
      },
      {
        path: "studentdetails",
        name: "Student Details",
        component: StudentDetails,
      },
      {
        path: "bill",
        name: "Bill",
        component: Bill,
      },
      {
        path: "floormaster",
        name: "Floor Master",
        component: FloorMaster,
      },
      {
        path: "enquiry",
        name: "Enquiry",
        component: Enquiry,
      },
      {
        path: "blockmaster",
        name: "Block Master",
        component: BlockMaster,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "upgradeToPro",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;

import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import Signout from "components/Signout";
import Test from "components/Test";
import ChatBot from "components/ChatBot";
import Arlearning from "components/Arlearning";
import Attendence from "components/Attendence";
import ChattingRoom from "components/ChattingRoom"; // Correct import
import TrackingPosture from "components/TrackingPosture";

const questions = [
  'What is the national animal of India?',
  'Who wrote the Indian national anthem, "Jana Gana Mana"?',
  'Which river is known as the "Ganga" in India?',
  'What is the currency of India?',
  'Who was the first Prime Minister of India?',
  'Which festival is celebrated to mark the victory of good over evil and the return of Lord Rama to Ayodhya?',
];

const options = [
  ['Tiger', 'Lion', 'Elephant', 'Leopard'],
  ['Rabindranath Tagore', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose'],
  ['Yamuna', 'Brahmaputra', 'Indus', 'Ganges'],
  ['Dollar', 'Rupee', 'Yen', 'Euro'],
  ['Jawaharlal Nehru', 'Indira Gandhi', 'Lal Bahadur Shastri', 'Rajiv Gandhi'],
  ['Diwali', 'Holi', 'Eid', 'Christmas'],
];

const correctAnswers = ['optionA', 'optionA', 'optionD', 'optionB', 'optionA', 'optionA'];

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "CLASS data",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Test",
    key: "Test",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/Test",
    component: <Test questions={questions} options={options} correctAnswers={correctAnswers} />,
  },
  {
    type: "collapse",
    name: "Attendance", // Corrected spelling
    key: "attendance",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/attendance", // Adjusted route for consistency
    component: <Attendence />,
  },
  {
    type: "collapse",
    name: "Chatting Room", // Set a proper name
    key: "chatting-room",
    icon: <Icon fontSize="small">chat</Icon>, // Changed icon to represent chatting
    route: "/chatting-room",
    component: <ChattingRoom />, // Ensure this matches the import
  },
  {
    type: "collapse",
    name: "AI Chatbot Assistant",
    key: "chatbot",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/chatbot",
    component: <ChatBot />,
  },
  {
    type: "collapse",
    name: "AR LEARNING GAMES",
    key: "arlearning",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/arlearning",
    component: <Arlearning />,
  },
  {
    type: "collapse",
    name: "VIRTUAL CLASS",
    key: "opencv",
    icon: <Icon fontSize="small">Tracking</Icon>,
    route: "/trackpos",
    component: <TrackingPosture />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-out",
    component: <Signout />,
  },
];

export default routes;

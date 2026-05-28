import {
  ApproveIcon, RewardIcon, DisciplineIcon, LearningIcon, TaskIcon,
  FptCareIcon, FptDatingIcon, PayslipIcon, NewsIcon,
  ProfileIcon, SettingsIcon, SupportIcon, FaqIcon, AdminIcon, LogoutIcon,
  BirthdayIcon, EventIcon, StarAveIcon, SurveyIcon, EmployeeInfoIcon, GameIcon,
} from '../components/index';

export const SETTINGS_OPTIONS = [
  { id: 'profile',  title: 'My Profile', Icon: ProfileIcon },
  { id: 'settings', title: 'Settings',   Icon: SettingsIcon },
  { id: 'support',  title: 'Support',    Icon: SupportIcon },
  { id: 'faq',      title: 'FAQ',        Icon: FaqIcon },
  { id: 'admin',    title: 'Admin',      Icon: AdminIcon },
  { id: 'logout',   title: 'Logout',     Icon: LogoutIcon },
];

export const APP_CATEGORIES = [
  {
    id: 'work',
    title: 'WORK',
    sections: [
      { id: 'approve',    title: 'Approve Now', subtitle: 'Notify managers of pending requests and allow managers to approve/reject requests from internal tools', Icon: ApproveIcon },
      { id: 'reward',     title: 'Reward',      subtitle: 'Send colleagues a thank you note or reward Gold for exceptional contribution', Icon: RewardIcon },
      { id: 'discipline', title: 'Discipline',  subtitle: 'Send a discipline warning to subordinates for violation of codes of conduct', Icon: DisciplineIcon },
      { id: 'learning',   title: 'Learning',    subtitle: 'View mandatory, registered and suggested learning courses; check-in and send feedback for each course', Icon: LearningIcon },
      { id: 'tasks',      title: 'My Tasks',    subtitle: '', Icon: TaskIcon },
    ],
  },
  {
    id: 'utilities',
    title: 'UTILITIES',
    sections: [
      { id: 'fpt-care',  title: 'FPT Care',   subtitle: 'FPT Care',                                                                          Icon: FptCareIcon },
      { id: 'events',    title: 'Events',      subtitle: 'Register, check-in, check-out, send feedback to company events and programs',        Icon: EventIcon },
      { id: 'survey',    title: 'Survey',      subtitle: 'Conduct and collect responses for company-wide or department-wide survey',           Icon: SurveyIcon },
      { id: 'fptdating', title: 'FPT Dating',  subtitle: 'Dating feature',                                                                    Icon: FptDatingIcon },
      { id: 'payslips',  title: 'Payslips',    subtitle: 'Payslips',                                                                          Icon: PayslipIcon },
      { id: 'birthday',  title: 'Birthday',    subtitle: 'Your birthday is a very special moment. Colleagues can send you birthday wishes on myFPT.', Icon: BirthdayIcon },
    ],
  },
  {
    id: 'news',
    title: 'NEWS',
    sections: [
      { id: 'company-news', title: 'News',     subtitle: 'A collection of latest news and notable events around the company', Icon: NewsIcon },
      { id: 'star-ave',     title: 'Star Ave', subtitle: 'Recognise notable achievements within a business unit or within FPT', Icon: StarAveIcon },
    ],
  },
  {
    id: 'wiki',
    title: 'WIKI',
    sections: [
      { id: 'employee-info', title: 'Employee Info', subtitle: 'Basic, non-confidential employee information (name, gender, department, etc.)', Icon: EmployeeInfoIcon },
    ],
  },
  {
    id: 'game',
    title: 'GAME',
    sections: [
      { id: 'game-center', title: 'Game', subtitle: 'Community-engaging games with Gold as rewards', Icon: GameIcon },
    ],
  },
];

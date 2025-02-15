"use client";

import {
  BarChart3,
  Bot,
  FileEdit,
  Briefcase,
  GraduationCap,
  Search,
  UserCircle,
  Users2,
  FileText,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

// This is sample data.
const data = {
  teams: [
    {
      name: "Personal Profile",
      logo: UserCircle,
      plan: "Free",
    },
    {
      name: "Job Seeker Pro",
      logo: Briefcase,
      plan: "Premium",
    },
    {
      name: "Career Coach",
      logo: GraduationCap,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Job Search",
      url: "/search",
      icon: Search,
      isActive: true,
      items: [
        {
          title: "All Jobs",
          url: "/search/all",
        },
        {
          title: "Saved Jobs",
          url: "/search/saved",
        },
        {
          title: "Applied Jobs",
          url: "/search/applied",
        },
        {
          title: "Job Alerts",
          url: "/search/alerts",
        },
      ],
    },
    {
      title: "AI Features",
      url: "/ai",
      icon: Bot,
      items: [
        {
          title: "Skills Matching",
          url: "/ai/skills-match",
        },
        {
          title: "Resume Scanner",
          url: "/ai/resume-scan",
        },
        {
          title: "Interview Prep",
          url: "/ai/interview",
        },
      ],
    },
    {
      title: "Profile",
      url: "/profile",
      icon: UserCircle,
      items: [
        {
          title: "Experience",
          url: "/profile/experience",
        },
        {
          title: "Skills",
          url: "/profile/skills",
        },
        {
          title: "Education",
          url: "/profile/education",
        },
        {
          title: "Documents",
          url: "/profile/documents",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      items: [
        {
          title: "Application Tracker",
          url: "/analytics/tracker",
        },
        {
          title: "Success Rate",
          url: "/analytics/success-rate",
        },
        {
          title: "Market Insights",
          url: "/analytics/insights",
        },
        {
          title: "Salary Data",
          url: "/analytics/salary",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Resume Builder",
      url: "/tools/resume",
      icon: FileText,
    },
    {
      name: "Cover Letter",
      url: "/tools/cover-letter",
      icon: FileEdit,
    },
    {
      name: "Network",
      url: "/tools/network",
      icon: Users2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const userData = {
    email: user?.emailAddresses[0].emailAddress || "GH",
    name: user?.fullName || "Israel Israeli",
    avatar: user?.imageUrl || "",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

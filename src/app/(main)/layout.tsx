"use client";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {
  DashboardLayout,
  SidebarFooterProps,
} from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeSwitcher } from "@toolpad/core/DashboardLayout";

function SidebarFooter({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini ? "© MUI" : `© ${new Date().getFullYear()} Made with love by MUI`}
    </Typography>
  );
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}

function CustomAppTitle() {
  return (
    <div className="flex flex-none items-center gap-4">
      {/* <Link href="https://rndapps.indianoil.in">
        <Image
          src=""
          alt=""
          priority
          height={}
          width={}
        />
      </Link> */}

      <div className="hover:dark:cyan-red-400 whitespace-nowrap bg-gradient-to-b from-cyan-500 to-violet-700 bg-clip-text font-poppins text-3xl font-bold text-transparent hover:from-cyan-600 hover:to-violet-800 dark:from-cyan-200 dark:to-violet-200 dark:hover:from-cyan-200 dark:hover:to-violet-300">
        <Link href="/">Next SMART Kit</Link>
      </div>
    </div>
  );
}

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout
      slots={{
        appTitle: CustomAppTitle,
        toolbarActions: ToolbarActionsSearch,
        sidebarFooter: SidebarFooter,
      }}
      defaultSidebarCollapsed
    >
      <PageContainer>{children}</PageContainer>
    </DashboardLayout>
  );
}

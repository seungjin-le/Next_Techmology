"use client";
import { PageLayoutProps } from "lodash";
import { Container, ThemeProvider } from "@mui/material";
import MuiTheme from "components/styles/MuiTheme";

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Container className={"p-0 h-full w-full"}>{children}</Container>
    </ThemeProvider>
  );
};

export default PageLayout;

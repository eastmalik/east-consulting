import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import AboutUs from "./pages/AboutUs";
import Book from "./pages/Book";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/what-we-do"} component={WhatWeDo} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/book"} component={Book} />
      <Route path={"/resources"}>{() => <ComingSoon title="Resources" />}</Route>
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      {/* Old addresses that people or search engines may still use */}
      <Route path={"/contact"}><Redirect to="/" /></Route>
      <Route path={"/terms-of-service"}><Redirect to="/terms-and-conditions" /></Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

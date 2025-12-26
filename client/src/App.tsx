import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import MathematicsExploration from "@/pages/MathematicsExploration";
import NotFound from "@/pages/not-found";
import { Sidebar } from "@/components/Sidebar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explorations-mathematiques" component={MathematicsExploration} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

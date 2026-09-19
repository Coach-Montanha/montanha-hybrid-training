import { useEffect, useRef } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { LayoutDashboard, Dumbbell, Users, Mountain, LogOut, ClipboardList, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useCoach } from "@/hooks/use-coach";
import { useQueryClient } from "@tanstack/react-query";
import { ThemeToggle } from "@/components/theme-toggle";

const items = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard, exact: true },
  { title: "Exercícios", url: "/app/exercicios", icon: Dumbbell, exact: false },
  { title: "Treinos", url: "/app/treinos", icon: ClipboardList, exact: false },
  { title: "Alunos", url: "/app/alunos", icon: Users, exact: false },
  { title: "Configurações", url: "/app/configuracoes", icon: Settings, exact: false },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const path = useRouterState({ select: (r) => r.location.pathname });
  const { data: coach } = useCoach();
  const navigate = useNavigate();
  const qc = useQueryClient();

  // Microkit SpotlightIndicator Refs & Effect
  const spotlightNavRef = useRef<HTMLUListElement>(null);
  const spotlightBarRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nav = spotlightNavRef.current;
    const bar = spotlightBarRef.current;
    if (!nav || !bar) return;
    const activeItem = nav.querySelector<HTMLElement>("[data-sidebar-active='true']");
    if (!activeItem) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    bar.style.top = `${itemRect.top - navRect.top + 2}px`;
    bar.style.height = `${itemRect.height - 4}px`;
  }, [path, collapsed]);

  const isActive = (url: string, exact: boolean) =>
    exact ? path === url : path.startsWith(url);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Mountain className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">Montanha Hybrid Training</div>
              <div className="truncate text-xs text-muted-foreground">
                Plataforma de Alta Performance, Endurance & Periodização de Treino
              </div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Programação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu ref={spotlightNavRef} className="relative">
              <span ref={spotlightBarRef} className="pointer-events-none absolute left-0.5 w-1 rounded-sm bg-primary shadow-[2px_0_5px_rgba(249,115,22,.8),4px_0_11px_rgba(249,115,22,.45)] transition-[top,height] duration-300 ease-[cubic-bezier(.4,0,.2,1)]" />
              {items.map((item) => (
                <SidebarMenuItem key={item.url} data-sidebar-active={isActive(item.url, item.exact)}>
                  <SidebarMenuButton asChild isActive={isActive(item.url, item.exact)}>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {!collapsed && (
          <div className="flex justify-center px-2 pb-1">
            <ThemeToggle />
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={signOut} className="justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          {!collapsed && "Sair"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { themeInitScript } from "@/lib/theme";
import { registerServiceWorker } from "@/lib/pwa";
import { ImpersonationBanner } from "@/components/ImpersonationBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Montanha Hybrid Training — Plataforma de Alta Performance, Endurance & Periodização de Treino" },
      {
        name: "description",
        content:
          "Plataforma de Alta Performance, Endurance & Periodização de Treino.",
      },
      { name: "author", content: "Coach Montanha" },
      { name: "theme-color", content: "#0F1115" },
      { name: "visual-theme", content: "padrao" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Montanha Hybrid Training" },
      { name: "mobile-web-app-capable", content: "yes" },
      { property: "og:title", content: "Montanha Hybrid Training — Plataforma de Alta Performance, Endurance & Periodização de Treino" },
      {
        property: "og:description",
        content: "Plataforma de Alta Performance, Endurance & Periodização de Treino.",
      },
      { property: "og:url", content: "https://montanha-hybrid-training.vercel.app/" },
      { property: "og:site_name", content: "Montanha Hybrid Training" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://montanha-hybrid-training.vercel.app/icon-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Montanha Hybrid Training — Plataforma de Alta Performance, Endurance & Periodização de Treino" },
      { name: "twitter:description", content: "Plataforma de Alta Performance, Endurance & Periodização de Treino." },
      { name: "twitter:image", content: "https://montanha-hybrid-training.vercel.app/icon-512.png" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "google-site-verification", content: "GSC_VERIFICATION_PLACEHOLDER" },
    ],
    links: [
      { rel: "canonical", href: "https://montanha-hybrid-training.vercel.app/" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap",
      },
    ],
    scripts: [
      { children: themeInitScript },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Montanha Hybrid Training",
          headline: "Plataforma de Alta Performance, Endurance & Periodização de Treino",
          operatingSystem: "Web, iOS, Android",
          applicationCategory: "SportsApplication",
          description: "Plataforma de Alta Performance, Endurance & Periodização de Treino.",
          url: "https://montanha-hybrid-training.vercel.app/",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
          },
          author: {
            "@type": "Organization",
            name: "Ecossistema Montanha",
            url: "https://montanha-hybrid-training.vercel.app/",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #app-preloader {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: 999999;
                background-color: #0f1115;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                transition: opacity 0.4s ease, visibility 0.4s ease;
              }
              #app-preloader.preloader-hidden {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                display: none !important;
              }
              .preloader-emblem-wrap {
                position: relative;
                width: 96px;
                height: 96px;
                border-radius: 28px;
                background: linear-gradient(135deg, #082f49 0%, #0f172a 100%);
                border: 2px solid rgba(6, 182, 212, 0.4);
                box-shadow: 0 0 35px rgba(6, 182, 212, 0.3), inset 0 0 15px rgba(6, 182, 212, 0.15);
                display: flex;
                align-items: center;
                justify-content: center;
                animation: preloaderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .preloader-aura-ring {
                position: absolute;
                inset: -6px;
                border-radius: 34px;
                border: 1.5px solid rgba(6, 182, 212, 0.25);
                animation: auraExpand 2.5s linear infinite;
              }
              .preloader-title {
                margin-top: 22px;
                font-size: 22px;
                font-weight: 900;
                letter-spacing: -0.02em;
                color: #f8fafc;
                text-align: center;
              }
              .preloader-title span {
                color: #06b6d4;
              }
              .preloader-subtitle {
                margin-top: 6px;
                font-size: 13px;
                font-weight: 500;
                color: #94a3b8;
                text-align: center;
                max-width: 350px;
                padding: 0 16px;
              }
              .preloader-spinner {
                margin-top: 24px;
                width: 26px;
                height: 26px;
                border: 3px solid rgba(6, 182, 212, 0.15);
                border-top-color: #06b6d4;
                border-radius: 50%;
                animation: preloaderSpin 0.75s linear infinite;
              }
              .preloader-progress-track {
                margin-top: 20px;
                width: 160px;
                height: 4px;
                background: rgba(255, 255, 255, 0.08);
                border-radius: 99px;
                overflow: hidden;
              }
              .preloader-progress-bar {
                height: 100%;
                width: 60%;
                background: linear-gradient(90deg, #06b6d4, #38bdf8);
                border-radius: 99px;
                animation: progressMove 1.5s ease-in-out infinite alternate;
              }
              @keyframes preloaderPulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 35px rgba(6, 182, 212, 0.3); }
                50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(6, 182, 212, 0.5); }
              }
              @keyframes auraExpand {
                0% { opacity: 0.8; transform: scale(0.95); }
                100% { opacity: 0; transform: scale(1.2); }
              }
              @keyframes preloaderSpin {
                to { transform: rotate(360deg); }
              }
              @keyframes progressMove {
                0% { transform: translateX(-40%); }
                100% { transform: translateX(100%); }
              }
            `,
          }}
        />
      </head>
      <body>
        <div id="app-preloader" aria-label="Carregando Montanha Hybrid Training...">
          <div className="preloader-emblem-wrap">
            <div className="preloader-aura-ring"></div>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
          </div>
          <div className="preloader-title">Montanha <span>Hybrid Training</span></div>
          <div className="preloader-subtitle">Plataforma de Alta Performance, Endurance & Periodização de Treino</div>
          <div className="preloader-spinner"></div>
          <div className="preloader-progress-track">
            <div className="preloader-progress-bar"></div>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              function dismiss(){
                var p = document.getElementById('app-preloader');
                if(p){
                  p.classList.add('preloader-hidden');
                  p.style.display = 'none';
                }
              }
              if (document.readyState === 'complete') {
                setTimeout(dismiss, 50);
              } else {
                window.addEventListener('load', function(){ setTimeout(dismiss, 50); });
                setTimeout(dismiss, 500);
              }
            })();`,
          }}
        />

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  useEffect(() => {
    registerServiceWorker();
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => sub.subscription.unsubscribe();
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <ImpersonationBanner />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}

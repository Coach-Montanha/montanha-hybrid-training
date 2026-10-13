import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/app/sessoes/nova")({
  beforeLoad: () => {
    throw redirect({ to: "/app/treinos", search: { aba: "nova", ia: false } });
  },
});
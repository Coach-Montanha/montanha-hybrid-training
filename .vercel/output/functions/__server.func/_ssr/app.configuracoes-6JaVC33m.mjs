import { v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.configuracoes-6JaVC33m.js
var $$splitComponentImporter = () => import("./app.configuracoes-CJNJ83Cr.mjs");
var Route = createFileRoute("/_authenticated/app/configuracoes")({
	validateSearch: (search) => ({ section: typeof search.section === "string" ? search.section : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

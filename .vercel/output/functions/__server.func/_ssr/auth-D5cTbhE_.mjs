import { v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as object, r as _enum } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-D5cTbhE_.js
var $$splitComponentImporter = () => import("./auth-DtjbYFLn.mjs");
var searchSchema = object({ modo: _enum(["login", "cadastro"]).optional() });
var Route = createFileRoute("/auth")({
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

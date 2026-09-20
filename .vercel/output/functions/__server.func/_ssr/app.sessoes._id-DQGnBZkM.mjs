import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { SessionBuilder } from "./SessionBuilder-DAuRtaAi.mjs";
import { t as Route } from "./app.sessoes._id-rznymWVi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.sessoes._id-DQGnBZkM.js
var import_jsx_runtime = require_jsx_runtime();
function SessionEdit() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionBuilder, { sessionId: id });
}
//#endregion
export { SessionEdit as component };

import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-C4REE9V2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var themeInitScript = `
  (function() {
    try {
      var visualTheme = localStorage.getItem('visual-theme') || 'padrao';
      document.documentElement.setAttribute('data-tema', visualTheme);
      
      var theme = localStorage.getItem('theme') || 'system';
      var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (visualTheme === 'pulse' || visualTheme === 'midnight' || isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;
function getStoredTheme() {
	if (typeof window === "undefined") return "padrao";
	return localStorage.getItem("visual-theme") || "padrao";
}
function setStoredTheme(theme) {
	if (typeof window === "undefined") return;
	localStorage.setItem("visual-theme", theme);
	document.documentElement.setAttribute("data-tema", theme);
	const uiTheme = localStorage.getItem("theme") || "system";
	const isDark = uiTheme === "dark" || uiTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	if (theme === "pulse" || theme === "midnight" || isDark) document.documentElement.classList.add("dark");
	else document.documentElement.classList.remove("dark");
}
function useTheme() {
	const [theme, setThemeState] = (0, import_react.useState)("system");
	(0, import_react.useEffect)(() => {
		setThemeState(localStorage.getItem("theme") || "system");
	}, []);
	const setTheme = (t) => {
		setThemeState(t);
		localStorage.setItem("theme", t);
		const visualTheme = getStoredTheme();
		const isDark = t === "dark" || t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (visualTheme === "pulse" || visualTheme === "midnight" || isDark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	};
	return {
		theme,
		setTheme
	};
}
//#endregion
export { useTheme as i, setStoredTheme as n, themeInitScript as r, getStoredTheme as t };

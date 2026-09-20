import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pwa-CO9oSDi1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Detecta se o aplicativo já está rodando em modo nativo / standalone (instalado)
*/
function isStandalone() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true || document.referrer.includes("android-app://");
}
/**
* Detecta se o dispositivo é iOS / iPadOS
*/
function isIOS() {
	if (typeof window === "undefined") return false;
	const ua = window.navigator.userAgent;
	return /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
}
/**
* Registra o Service Worker do Coach Montanha em produção
*/
function registerServiceWorker() {
	if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/sw.js").then((reg) => {
			reg.addEventListener("updatefound", () => {
				const installingWorker = reg.installing;
				if (installingWorker) installingWorker.addEventListener("statechange", () => {
					if (installingWorker.state === "installed" && navigator.serviceWorker.controller) console.log("[PWA] Nova versão do Coach Montanha disponível.");
				});
			});
		}).catch((err) => {
			console.warn("[PWA] Falha ao registrar Service Worker:", err);
		});
	});
}
/**
* Hook para controlar a instalação do PWA
*/
function usePwaInstall() {
	const [deferredPrompt, setDeferredPrompt] = (0, import_react.useState)(null);
	const [isInstalled, setIsInstalled] = (0, import_react.useState)(false);
	const [iosDevice, setIosDevice] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsInstalled(isStandalone());
		setIosDevice(isIOS());
		const handleBeforeInstallPrompt = (e) => {
			e.preventDefault();
			setDeferredPrompt(e);
		};
		const handleAppInstalled = () => {
			setIsInstalled(true);
			setDeferredPrompt(null);
		};
		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		window.addEventListener("appinstalled", handleAppInstalled);
		return () => {
			window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
			window.removeEventListener("appinstalled", handleAppInstalled);
		};
	}, []);
	const promptInstall = (0, import_react.useCallback)(async () => {
		if (deferredPrompt) try {
			await deferredPrompt.prompt();
			const choice = await deferredPrompt.userChoice;
			setDeferredPrompt(null);
			if (choice.outcome === "accepted") setIsInstalled(true);
			return { outcome: choice.outcome };
		} catch (err) {
			console.error("[PWA] Erro ao disparar prompt de instalação:", err);
			return { outcome: "unavailable" };
		}
		if (iosDevice && !isInstalled) return { outcome: "ios_instructions" };
		return { outcome: "unavailable" };
	}, [
		deferredPrompt,
		iosDevice,
		isInstalled
	]);
	return {
		canInstall: !isInstalled && (deferredPrompt !== null || iosDevice),
		isInstalled,
		isIOS: iosDevice,
		hasNativePrompt: deferredPrompt !== null,
		promptInstall
	};
}
//#endregion
export { usePwaInstall as n, registerServiceWorker as t };

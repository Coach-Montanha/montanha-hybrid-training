import { u as createServerFn } from "./esm-BJY6H9OB.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CHOPR5bi.mjs";
import { t as createServerRpc } from "./server-rpc-DWINvzj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/students.functions-xlTl8L92.js
function randomPassword() {
	const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
	let out = "";
	for (let i = 0; i < 12; i++) out += chars[Math.floor(Math.random() * 54)];
	return out;
}
var inviteStudent_createServerFn_handler = createServerRpc({
	id: "cb2bc7b71619bc7f5ab8988b41e90b0f1ef5e11e204b79be7d4323fd8cb8a016",
	name: "inviteStudent",
	filename: "src/lib/students.functions.ts"
}, (opts) => inviteStudent.__executeServer(opts));
var inviteStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(inviteStudent_createServerFn_handler, async ({ data, context }) => {
	const email = data.email.trim().toLowerCase();
	const { data: coach, error: coachErr } = await context.supabase.from("coaches").select("id").eq("auth_user_id", context.userId).maybeSingle();
	if (coachErr) throw coachErr;
	if (!coach) throw new Error("Coach não encontrado para o usuário atual");
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	let authUserId = null;
	const tempPassword = randomPassword();
	let alreadyExisted = false;
	const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
		email,
		password: tempPassword,
		email_confirm: true,
		user_metadata: {
			nome: data.nome,
			role: "student"
		}
	});
	if (createErr) {
		const { data: list, error: listErr } = await supabaseAdmin.auth.admin.listUsers({
			page: 1,
			perPage: 1,
			filter: `email.eq.${email}`
		});
		const found = list?.users.find((u) => u.email?.toLowerCase() === email);
		if (listErr || !found) throw new Error("Não foi possível convidar este e-mail. Verifique e tente novamente.");
		const { data: coachOwner } = await supabaseAdmin.from("coaches").select("id").eq("auth_user_id", found.id).maybeSingle();
		if (coachOwner) throw new Error("Este e-mail pertence a um coach e não pode ser adicionado como aluno.");
		const { data: otherStudent } = await supabaseAdmin.from("students").select("id, coach_id").eq("auth_user_id", found.id).neq("coach_id", coach.id).maybeSingle();
		if (otherStudent) throw new Error("Este e-mail já é aluno de outro coach.");
		authUserId = found.id;
		alreadyExisted = true;
	} else authUserId = created.user.id;
	const { data: student, error: sErr } = await supabaseAdmin.from("students").upsert({
		coach_id: coach.id,
		nome: data.nome,
		email,
		telefone: data.telefone ?? null,
		auth_user_id: authUserId,
		status: "ativo",
		senha_temporaria: true
	}, { onConflict: "coach_id,email" }).select().single();
	if (sErr) throw sErr;
	return {
		student,
		tempPassword: alreadyExisted ? null : tempPassword,
		alreadyExisted
	};
});
var deleteStudent_createServerFn_handler = createServerRpc({
	id: "b8a9b83624769d32f6ff879d69c7123bb5a0ec48a60b89c6401b89e21dfaffcf",
	name: "deleteStudent",
	filename: "src/lib/students.functions.ts"
}, (opts) => deleteStudent.__executeServer(opts));
var deleteStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(deleteStudent_createServerFn_handler, async ({ data, context }) => {
	const { error } = await context.supabase.from("students").delete().eq("id", data.id);
	if (error) throw error;
	return { ok: true };
});
var assignSessionToStudent_createServerFn_handler = createServerRpc({
	id: "9dae41e4450e7d225a95f54de0a9f4215cd968978c40aaa1a6f2bd34b245df21",
	name: "assignSessionToStudent",
	filename: "src/lib/students.functions.ts"
}, (opts) => assignSessionToStudent.__executeServer(opts));
var assignSessionToStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(assignSessionToStudent_createServerFn_handler, async ({ data, context }) => {
	const { data: coach } = await context.supabase.from("coaches").select("id").eq("auth_user_id", context.userId).maybeSingle();
	if (!coach) throw new Error("Coach não encontrado");
	const { error } = await context.supabase.from("assignments").insert({
		coach_id: coach.id,
		session_id: data.session_id,
		student_id: data.student_id
	});
	if (error) throw error;
	return { ok: true };
});
var assignProgramToStudent_createServerFn_handler = createServerRpc({
	id: "fbe9257f66fc24e9303909130388b83f464dfda6f22008648015fba87b3fead0",
	name: "assignProgramToStudent",
	filename: "src/lib/students.functions.ts"
}, (opts) => assignProgramToStudent.__executeServer(opts));
var assignProgramToStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(assignProgramToStudent_createServerFn_handler, async ({ data, context }) => {
	const { data: coach } = await context.supabase.from("coaches").select("id").eq("auth_user_id", context.userId).maybeSingle();
	if (!coach) throw new Error("Coach não encontrado");
	const { error } = await context.supabase.from("assignments").insert({
		coach_id: coach.id,
		program_id: data.program_id,
		student_id: data.student_id
	});
	if (error) throw error;
	return { ok: true };
});
var unassign_createServerFn_handler = createServerRpc({
	id: "37e094e60a295214e1a09ccd583d3009d1f7ac9cba3f6232597b275841d5012f",
	name: "unassign",
	filename: "src/lib/students.functions.ts"
}, (opts) => unassign.__executeServer(opts));
var unassign = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(unassign_createServerFn_handler, async ({ data, context }) => {
	const { error } = await context.supabase.from("assignments").delete().eq("id", data.id);
	if (error) throw error;
	return { ok: true };
});
var updateStudentMemory_createServerFn_handler = createServerRpc({
	id: "7ee1dc61dd380910b20451a74ed6d39b3bfd45dd56b89d2caab135301e3bff22",
	name: "updateStudentMemory",
	filename: "src/lib/students.functions.ts"
}, (opts) => updateStudentMemory.__executeServer(opts));
var updateStudentMemory = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(updateStudentMemory_createServerFn_handler, async ({ data, context }) => {
	const serialized = typeof data.memory === "string" ? data.memory : JSON.stringify(data.memory);
	const { error } = await context.supabase.from("students").update({ observacoes: serialized }).eq("id", data.student_id);
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { assignProgramToStudent_createServerFn_handler, assignSessionToStudent_createServerFn_handler, deleteStudent_createServerFn_handler, inviteStudent_createServerFn_handler, unassign_createServerFn_handler, updateStudentMemory_createServerFn_handler };

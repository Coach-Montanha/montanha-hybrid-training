import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/auth/primeiro-acesso")({
  component: PrimeiroAcesso,
});

function PrimeiroAcesso() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"login" | "nova">("login");
  const [email, setEmail] = useState("");
  const [tempPw, setTempPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [loading, setLoading] = useState(false);

  async function loginTemp(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\d{10}$/.test(tempPw)) {
      return toast.error("A senha temporária deve conter exatamente 10 dígitos numéricos.");
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password: tempPw });
    setLoading(false);
    if (error) return toast.error(error.message);
    setStep("nova");
  }

  async function trocar(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\d{10}$/.test(newPw)) {
      return toast.error("A nova senha deve conter exatamente 10 dígitos numéricos.");
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPw });
    if (error) {
      setLoading(false);
      return toast.error(error.message);
    }
    // linka students.auth_user_id + marca senha_temporaria=false
    const { data: u } = await supabase.auth.getUser();
    if (u.user) {
      await supabase
        .from("students")
        .update({ auth_user_id: u.user.id, senha_temporaria: false, status: "ativo" })
        .eq("email", u.user.email!);
    }
    setLoading(false);
    toast.success("Senha atualizada com sucesso!");
    navigate({ to: "/aluno" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 font-sans">
      <div className="w-full max-w-md">
        <Card className="p-6 border border-cyan-500/30 bg-slate-950/90 shadow-xl backdrop-blur-xl rounded-2xl">
          <h1 className="text-xl font-bold text-white">Primeiro acesso do aluno</h1>
          <p className="mt-1 text-sm text-slate-400">
            {step === "login"
              ? "Use o e-mail e a senha temporária de 10 números que seu treinador enviou."
              : "Defina sua nova senha de 10 números."}
          </p>
          {step === "login" ? (
            <form onSubmit={loginTemp} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="pa-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">E-mail</Label>
                <Input id="pa-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu.email@exemplo.com" className="mt-1 bg-slate-900 border-slate-800 text-white rounded-xl" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="pa-tp" className="text-xs font-bold uppercase tracking-wider text-slate-300">Senha temporária</Label>
                  <span className="text-[10px] text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">10 números</span>
                </div>
                <Input id="pa-tp" type="password" inputMode="numeric" pattern="[0-9]*" maxLength={10} required value={tempPw} onChange={(e) => setTempPw(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="•••••••••• (10 dígitos)" className="mt-1 font-mono tracking-widest bg-slate-900 border-slate-800 text-white rounded-xl" />
              </div>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl h-10" type="submit" disabled={loading}>Continuar</Button>
            </form>
          ) : (
            <form onSubmit={trocar} className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="pa-np" className="text-xs font-bold uppercase tracking-wider text-slate-300">Nova senha</Label>
                  <span className="text-[10px] text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">10 números</span>
                </div>
                <Input id="pa-np" type="password" inputMode="numeric" pattern="[0-9]*" maxLength={10} minLength={10} required value={newPw} onChange={(e) => setNewPw(e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="•••••••••• (10 dígitos)" className="mt-1 font-mono tracking-widest bg-slate-900 border-slate-800 text-white rounded-xl" />
                <p className="mt-1 text-xs text-slate-400">Exatamente 10 dígitos numéricos (0 a 9).</p>
              </div>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl h-10" type="submit" disabled={loading}>Salvar</Button>
            </form>
          )}
          <p className="mt-4 text-center text-sm">
            <Link to="/auth" className="text-primary underline">Voltar</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Plus, 
  X,
  AlertTriangle,
} from "lucide-react";
import { soundEffects } from "@/lib/audio-beeps";
import { cn } from "@/lib/utils";
import { SlideToConfirmWorkout } from "@/components/ui/SlideToConfirmWorkout";

type TimerMode = "emom" | "amrap" | "tabata" | "stopwatch";

interface WorkoutTimerDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  defaultMode?: TimerMode;
}

export function WorkoutTimerDialog({
  open,
  onOpenChange,
  trigger,
  defaultMode = "emom",
}: WorkoutTimerDialogProps) {
  const [mode, setMode] = React.useState<TimerMode>(defaultMode);
  const [isRunning, setIsRunning] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [finishSliderReset, setFinishSliderReset] = React.useState(0);

  // 2x para fechar confirmation state
  const [confirmClose, setConfirmClose] = React.useState(false);
  const closeTimeoutRef = React.useRef<number | undefined>(undefined);

  // EMOM / E2MOM / E{N}MOM State
  const [emomIntervalMinutes, setEmomIntervalMinutes] = React.useState(1); // 1 = EMOM, 2 = E2MOM, etc.
  const [emomMinutes, setEmomMinutes] = React.useState(10);
  const [emomCurrentBlock, setEmomCurrentBlock] = React.useState(1);
  const [emomSecondsLeft, setEmomSecondsLeft] = React.useState(60);

  // AMRAP State
  const [amrapMinutes, setAmrapMinutes] = React.useState(12);
  const [amrapSecondsLeft, setAmrapSecondsLeft] = React.useState(12 * 60);
  const [amrapRounds, setAmrapRounds] = React.useState(0);

  // Tabata State
  const [tabataWork, setTabataWork] = React.useState(20);
  const [tabataRest, setTabataRest] = React.useState(10);
  const [tabataRounds, setTabataRounds] = React.useState(8);
  const [tabataCurrentRound, setTabataCurrentRound] = React.useState(1);
  const [tabataPhase, setTabataPhase] = React.useState<"work" | "rest">("work");
  const [tabataSecondsLeft, setTabataSecondsLeft] = React.useState(20);

  // Stopwatch State
  const [stopwatchSeconds, setStopwatchSeconds] = React.useState(0);

  // Computed total blocks for EMOM
  const emomTotalBlocks = Math.max(1, Math.ceil(emomMinutes / emomIntervalMinutes));
  const emomModeLabel = emomIntervalMinutes === 1 ? "EMOM" : `E${emomIntervalMinutes}MOM`;

  // Close handler requiring double confirmation
  const handleRequestClose = React.useCallback(() => {
    if (confirmClose) {
      if (closeTimeoutRef.current !== undefined) window.clearTimeout(closeTimeoutRef.current);
      setConfirmClose(false);
      onOpenChange?.(false);
    } else {
      setConfirmClose(true);
      if (closeTimeoutRef.current !== undefined) window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = window.setTimeout(() => {
        setConfirmClose(false);
      }, 3000);
    }
  }, [confirmClose, onOpenChange]);

  // Clean timeout on unmount
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== undefined) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Reset function
  const handleReset = React.useCallback(() => {
    setIsRunning(false);
    setFinishSliderReset((value) => value + 1);
    // Reset EMOM
    setEmomCurrentBlock(1);
    setEmomSecondsLeft(emomIntervalMinutes * 60);
    // Reset AMRAP
    setAmrapSecondsLeft(amrapMinutes * 60);
    setAmrapRounds(0);
    // Reset Tabata
    setTabataCurrentRound(1);
    setTabataPhase("work");
    setTabataSecondsLeft(tabataWork);
    // Reset Stopwatch
    setStopwatchSeconds(0);
  }, [emomIntervalMinutes, amrapMinutes, tabataWork]);

  // Reset when interval changes
  React.useEffect(() => {
    setEmomSecondsLeft(emomIntervalMinutes * 60);
    setEmomCurrentBlock(1);
  }, [emomIntervalMinutes]);

  // Main ticker effect
  React.useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        if (mode === "emom") {
          setEmomSecondsLeft((prev) => {
            if (prev <= 4 && prev > 1 && !muted) {
              soundEffects.playCountdownBeep();
            }
            if (prev <= 1) {
              if (emomCurrentBlock >= emomTotalBlocks) {
                setIsRunning(false);
                if (!muted) soundEffects.playRestCompleteBeep();
                return 0;
              }
              setEmomCurrentBlock((m) => m + 1);
              if (!muted) soundEffects.playStartBeep();
              return emomIntervalMinutes * 60;
            }
            return prev - 1;
          });
        } else if (mode === "amrap") {
          setAmrapSecondsLeft((prev) => {
            if (prev <= 4 && prev > 1 && !muted) {
              soundEffects.playCountdownBeep();
            }
            if (prev <= 1) {
              setIsRunning(false);
              if (!muted) soundEffects.playRestCompleteBeep();
              return 0;
            }
            return prev - 1;
          });
        } else if (mode === "tabata") {
          setTabataSecondsLeft((prev) => {
            if (prev <= 4 && prev > 1 && !muted) {
              soundEffects.playCountdownBeep();
            }
            if (prev <= 1) {
              if (tabataPhase === "work") {
                setTabataPhase("rest");
                if (!muted) soundEffects.playRestCompleteBeep();
                return tabataRest;
              } else {
                if (tabataCurrentRound >= tabataRounds) {
                  setIsRunning(false);
                  if (!muted) soundEffects.playRestCompleteBeep();
                  return 0;
                }
                setTabataCurrentRound((r) => r + 1);
                setTabataPhase("work");
                if (!muted) soundEffects.playStartBeep();
                return tabataWork;
              }
            }
            return prev - 1;
          });
        } else if (mode === "stopwatch") {
          setStopwatchSeconds((prev) => prev + 1);
        }
      }, 1000);
    }
    return () => {
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [
    isRunning,
    mode,
    muted,
    emomCurrentBlock,
    emomTotalBlocks,
    emomIntervalMinutes,
    tabataPhase,
    tabataCurrentRound,
    tabataRounds,
    tabataRest,
    tabataWork,
  ]);

  // Format MM:SS helper
  const fmt = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <Dialog 
      open={open} 
      onOpenChange={(next) => {
        if (!next) {
          handleRequestClose();
        } else {
          onOpenChange?.(true);
        }
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent 
        onPointerDownOutside={(e) => {
          e.preventDefault();
          handleRequestClose();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          handleRequestClose();
        }}
        className="max-w-md"
      >
        {/* Double click warning banner */}
        {confirmClose && (
          <div className="flex items-center justify-between rounded-lg bg-destructive/15 border border-destructive/30 px-3 py-2 text-xs font-semibold text-destructive animate-in fade-in slide-in-from-top-1">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              <span>Toque 2x para fechar o cronômetro</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setConfirmClose(false);
                onOpenChange?.(false);
              }}
              className="rounded bg-destructive px-2 py-0.5 text-[10px] font-bold text-destructive-foreground hover:opacity-90 transition-opacity"
            >
              Sair agora
            </button>
          </div>
        )}

        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10">
                <Timer className="h-4 w-4 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold">Timer de Treino</DialogTitle>
                <div className="text-[11px] text-muted-foreground font-medium">
                  {mode === "emom" ? `${emomModeLabel} • Bloco ${emomCurrentBlock}/${emomTotalBlocks}` : mode.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground"
                onClick={() => setMuted(!muted)}
                title={muted ? "Ativar som" : "Desativar som"}
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleRequestClose}
                title={confirmClose ? "Clique novamente para fechar" : "Fechar (requer 2 cliques)"}
                className={cn(
                  "h-8 px-2 text-xs font-semibold transition-all",
                  confirmClose
                    ? "bg-destructive/20 text-destructive border border-destructive/40"
                    : "text-muted-foreground"
                )}
              >
                <X className="h-4 w-4" />
                {confirmClose && <span>Confirmar</span>}
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {/* Mode Switcher */}
          <Tabs
            value={mode}
            onValueChange={(v) => {
              setIsRunning(false);
              setMode(v as TimerMode);
            }}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 w-full h-9">
              <TabsTrigger value="emom" className="text-xs">
                EMOM
              </TabsTrigger>
              <TabsTrigger value="amrap" className="text-xs">
                AMRAP
              </TabsTrigger>
              <TabsTrigger value="tabata" className="text-xs">
                Tabata
              </TabsTrigger>
              <TabsTrigger value="stopwatch" className="text-xs">
                Livre
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Clock Display Card */}
          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all",
              mode === "tabata" && tabataPhase === "work" && "bg-rose-500/10 border-rose-500/40",
              mode === "tabata" &&
                tabataPhase === "rest" &&
                "bg-emerald-500/10 border-emerald-500/40",
              mode !== "tabata" && "bg-gradient-to-b from-card to-muted/40 border-border",
            )}
          >
            {/* Subtitle / Status indicator */}
            <div className="mb-1 flex items-center gap-2">
              {mode === "emom" && (
                <Badge variant="secondary" className="text-xs">
                  {emomIntervalMinutes === 1
                    ? `Minuto ${emomCurrentBlock} de ${emomTotalBlocks}`
                    : `Bloco ${emomCurrentBlock} de ${emomTotalBlocks} (${emomModeLabel})`}
                </Badge>
              )}
              {mode === "amrap" && (
                <Badge variant="secondary" className="text-xs">
                  {amrapRounds} round{amrapRounds === 1 ? "" : "s"} completos
                </Badge>
              )}
              {mode === "tabata" && (
                <Badge
                  variant={tabataPhase === "work" ? "destructive" : "default"}
                  className="text-xs uppercase font-bold"
                >
                  {tabataPhase === "work" ? "Trabalho" : "Descanso"} · Round {tabataCurrentRound}/
                  {tabataRounds}
                </Badge>
              )}
              {mode === "stopwatch" && (
                <Badge variant="outline" className="text-xs">
                  Cronômetro Livre
                </Badge>
              )}
            </div>

            {/* Big Digits */}
            <div className="font-mono text-6xl font-black tracking-tight text-foreground my-2">
              {mode === "emom" && fmt(emomSecondsLeft)}
              {mode === "amrap" && fmt(amrapSecondsLeft)}
              {mode === "tabata" && fmt(tabataSecondsLeft)}
              {mode === "stopwatch" && fmt(stopwatchSeconds)}
            </div>

            {/* Extra Action (e.g. +1 Round for AMRAP) */}
            {mode === "amrap" && isRunning && (
              <Button
                size="sm"
                variant="outline"
                className="mt-2 gap-1.5 font-semibold text-xs cursor-pointer border-primary/50"
                onClick={() => setAmrapRounds((r) => r + 1)}
              >
                <Plus className="h-3.5 w-3.5" /> Concluir Round (+1)
              </Button>
            )}
          </div>

          {/* Configuration Inputs (Visible when not running) */}
          {!isRunning && (
            <div className="rounded-lg border bg-muted/20 p-3 space-y-3 text-xs">
              {mode === "emom" && (
                <div className="space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                      <Label className="text-xs font-medium">Intervalo por Bloco:</Label>
                      <span className="font-mono font-bold text-primary">{emomModeLabel} ({emomIntervalMinutes} min)</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {[1, 2, 3, 4, 5].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => {
                            setEmomIntervalMinutes(m);
                            if (emomMinutes < m) {
                              setEmomMinutes(m * 5);
                            }
                          }}
                          className={cn(
                            "h-8 rounded-md text-xs font-bold transition-all select-none border",
                            emomIntervalMinutes === m
                              ? "bg-primary text-primary-foreground border-primary shadow-xs"
                              : "bg-background border-border text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {m === 1 ? "1m" : `E${m}M`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/60 pt-2.5">
                    <div>
                      <Label className="text-xs font-medium block">Duração total:</Label>
                      <span className="text-[11px] text-muted-foreground">
                        {emomTotalBlocks} {emomTotalBlocks === 1 ? "bloco" : "blocos"} de {emomIntervalMinutes} min
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Input
                        type="number"
                        min={emomIntervalMinutes}
                        max={180}
                        step={emomIntervalMinutes}
                        value={emomMinutes}
                        onChange={(e) => {
                          const v = Math.max(1, Number(e.target.value) || 1);
                          setEmomMinutes(v);
                        }}
                        className="w-20 h-8 text-center"
                      />
                      <span className="text-xs text-muted-foreground font-medium">min</span>
                    </div>
                  </div>
                </div>
              )}

              {mode === "amrap" && (
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium">Tempo limite (minutos):</Label>
                  <Input
                    type="number"
                    min={1}
                    max={60}
                    value={amrapMinutes}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setAmrapMinutes(v);
                      setAmrapSecondsLeft(v * 60);
                    }}
                    className="w-20 h-8 text-center"
                  />
                </div>
              )}

              {mode === "tabata" && (
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label className="text-[11px] text-muted-foreground">Trabalho (s)</Label>
                    <Input
                      type="number"
                      min={5}
                      max={300}
                      value={tabataWork}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        setTabataWork(v);
                        if (tabataPhase === "work") setTabataSecondsLeft(v);
                      }}
                      className="h-8 text-center mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] text-muted-foreground">Descanso (s)</Label>
                    <Input
                      type="number"
                      min={5}
                      max={300}
                      value={tabataRest}
                      onChange={(e) => setTabataRest(Number(e.target.value))}
                      className="h-8 text-center mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-[11px] text-muted-foreground">Rounds</Label>
                    <Input
                      type="number"
                      min={1}
                      max={50}
                      value={tabataRounds}
                      onChange={(e) => setTabataRounds(Number(e.target.value))}
                      className="h-8 text-center mt-1"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bencho UI Slide-to-Confirm Workout Completion */}
          <div className="py-1">
            <SlideToConfirmWorkout
              resetSignal={finishSliderReset}
              onConfirm={() => {
                setIsRunning(false);
                if (!muted) soundEffects.playRestCompleteBeep();
              }}
              text="Deslize para Concluir Treino"
              confirmedText="Treino Finalizado!"
              className="w-full"
            />
          </div>

          {/* Primary Controls */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 gap-2 cursor-pointer"
              onClick={handleReset}
            >
              <RotateCcw className="h-4 w-4" /> Reiniciar
            </Button>
            <Button
              type="button"
              className={cn(
                "flex-1 gap-2 cursor-pointer font-bold",
                isRunning ? "bg-amber-600 hover:bg-amber-700" : "bg-primary",
              )}
              onClick={() => {
                if (!isRunning && !muted) {
                  soundEffects.playStartBeep();
                }
                setIsRunning(!isRunning);
              }}
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4" /> Pausar
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" /> Iniciar
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

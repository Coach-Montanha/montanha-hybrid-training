import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Flame, Check, ChevronRight } from 'lucide-react';

interface SlideToConfirmWorkoutProps {
  onConfirm: () => void;
  text?: string;
  confirmedText?: string;
  className?: string;
  resetSignal?: number;
}

export const SlideToConfirmWorkout: React.FC<SlideToConfirmWorkoutProps> = ({
  onConfirm,
  text = 'Deslize para Concluir Treino',
  confirmedText = 'Treino Finalizado!',
  className = '',
  resetSignal = 0,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [containerWidth, setContainerWidth] = useState(280);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDragging(false);
    setDragProgress(0);
    setIsConfirmed(false);
  }, [resetSignal]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => setContainerWidth(container.getBoundingClientRect().width);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleStart = () => {
    if (isConfirmed) return;
    setIsDragging(true);
  };

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || isConfirmed || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const handleWidth = 52;
      const maxDrag = rect.width - handleWidth;
      const currentDrag = Math.max(0, Math.min(clientX - rect.left - handleWidth / 2, maxDrag));
      const progress = currentDrag / maxDrag;
      setDragProgress(progress);

      if (progress >= 0.9) {
        setIsConfirmed(true);
        setIsDragging(false);
        setDragProgress(1);
        onConfirm();
      }
    },
    [isDragging, isConfirmed, onConfirm]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging || isConfirmed) return;
    setIsDragging(false);
    if (dragProgress < 0.9) {
      setDragProgress(0);
    }
  }, [isDragging, isConfirmed, dragProgress]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div
      ref={containerRef}
      className={`relative h-14 w-full rounded-2xl bg-zinc-950 border border-amber-500/40 p-1.5 select-none overflow-hidden transition-all duration-300 shadow-xl ${className}`}
    >
      {/* Background Track Fill */}
      <div
        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 rounded-xl transition-all duration-75"
        style={{ width: `${52 + dragProgress * Math.max(0, containerWidth - 52)}px`, opacity: isConfirmed ? 1 : 0.85 }}
      />

      {/* Text Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-black uppercase tracking-wider text-amber-200 drop-shadow-md">
        {isConfirmed ? (
          <span className="text-white flex items-center gap-2 animate-bounce">
            <Check className="w-5 h-5" /> {confirmedText}
          </span>
        ) : (
          <span style={{ opacity: 1 - dragProgress * 1.2 }}>{text}</span>
        )}
      </div>

      {/* Drag Thumb */}
      <div
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        className={`relative z-10 h-11 w-11 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing shadow-2xl transition-transform duration-75 ${
          isConfirmed
            ? 'bg-white text-emerald-600 pointer-events-none'
            : 'bg-amber-400 text-black hover:scale-105'
        }`}
        style={{
          transform: `translateX(${dragProgress * Math.max(0, containerWidth - 52)}px)`,
        }}
      >
        {isConfirmed ? <Check className="w-6 h-6 stroke-[3]" /> : <Flame className="w-6 h-6 animate-pulse" />}
      </div>
    </div>
  );
};

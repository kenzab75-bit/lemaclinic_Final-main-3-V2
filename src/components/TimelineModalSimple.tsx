import { useEffect } from "react";
import type { TimelineStep } from "@/data/timelineSteps";

interface TimelineModalSimpleProps {
  activeStep: TimelineStep | null;
  onClose: () => void;
}

const TimelineModalSimple = ({ activeStep, onClose }: TimelineModalSimpleProps) => {
  useEffect(() => {
    if (!activeStep) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeStep, onClose]);

  if (!activeStep) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c2c3f] via-[#132233] to-[#0b141f] p-8 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              {activeStep.stepNumber}
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">{activeStep.modalTitle}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>

        <div className="mt-6 space-y-8 text-white/80">
          <p className="text-lg leading-relaxed text-white/85">{activeStep.modalDescription}</p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Détails de l’étape</h3>
            <ul className="mt-4 space-y-3">
              {activeStep.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Sources et preuves</h3>
            <div className="mt-4 space-y-4">
              {activeStep.sources.map((source) => (
                <div key={source.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{source.label}</p>
                  {source.description && (
                    <p className="mt-1 text-sm text-white/70">{source.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineModalSimple;

import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TimelineStep } from "@/data/timelineSteps";

interface TimelineModalProps {
  step: TimelineStep | null;
  onOpenChange: (open: boolean) => void;
}

const TimelineModal = ({ step, onOpenChange }: TimelineModalProps) => {
  if (!step) {
    return null;
  }

  return (
    <Dialog open={!!step} onOpenChange={onOpenChange}>
      <DialogContent className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#213245] to-[#0f1b29] border border-white/10 text-white shadow-2xl shadow-black/40 backdrop-blur-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-white/10">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(62,104,136,0.28),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(224,43,43,0.18),transparent_55%)]" />

        <div className="relative z-10 space-y-8">
          <DialogHeader className="relative pb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-[0.3em] uppercase border border-white/20">
              <span className="h-2 w-2 rounded-full bg-primary-red" />
              <span>{step.stepNumber}</span>
            </div>
            <DialogTitle className="text-4xl font-black mt-4 text-white">
              {step.modalTitle}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {step.modalDescription}
            </DialogDescription>
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-0 top-0 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fermer la modale"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>

          <div className="space-y-8">
            <p className="text-lg text-white/80 leading-relaxed">{step.modalDescription}</p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner shadow-black/30 backdrop-blur">
              <h4 className="text-2xl font-bold text-white mb-4">Détails de l’étape</h4>
              <ul className="space-y-3">
                {step.details.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner shadow-black/30 backdrop-blur">
              <h4 className="text-2xl font-bold text-white mb-4">Sources et preuves</h4>
              <div className="space-y-4">
                {step.sources.map((source) => (
                  <div key={source.label} className="p-4 rounded-xl border border-white/20 bg-white/5 text-white">
                    <p className="font-semibold text-white">{source.label}</p>
                    {source.description && (
                      <p className="text-sm text-white/70 mt-1">{source.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineModal;

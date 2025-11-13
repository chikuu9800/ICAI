import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={3500}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="
              font-poppins
              rounded-xl
              shadow-lg 
              border 
              border-border
              bg-background/95 
              backdrop-blur-md
              text-foreground
              flex items-start gap-4
              p-4
              w-full max-w-[90%] sm:max-w-[380px]
              animate-slide-in
            "
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="font-semibold text-foreground">
                  {title}
                </ToastTitle>
              )}

              {description && (
                <ToastDescription className="text-muted-foreground text-sm">
                  {description}
                </ToastDescription>
              )}
            </div>

            {action}

            <ToastClose className="text-muted-foreground hover:text-foreground" />
          </Toast>
        );
      })}

      <ToastViewport className="fixed top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-3 z-[99999]" />
    </ToastProvider>
  );
}

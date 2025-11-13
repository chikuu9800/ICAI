import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-right"
      richColors
      expand
      visibleToasts={3}
      className="font-poppins"
      toastOptions={{
        duration: 3500,
        classNames: {
          toast:
            "group toast w-full max-w-[90%] sm:max-w-[380px] p-4 rounded-xl shadow-lg border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border transition-all backdrop-blur-md",
          title:
            "text-foreground font-semibold tracking-wide",
          description:
            "text-muted-foreground text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground rounded-lg px-3 py-1 hover:bg-primary-light transition",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground rounded-lg px-3 py-1 hover:bg-muted/80 transition",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

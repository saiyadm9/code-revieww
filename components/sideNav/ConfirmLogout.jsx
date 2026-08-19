import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ConfirmLogout({handleCancelLogout}) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-xl bg-surface border border-border-gray shadow-card">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-400/10 text-red-500">
              <Icon icon="material-symbols:logout-rounded" width={22} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground"> Ready to Leave?? </h2>

              <p className="mt-1 text-sm text-muted">
                Click below if you are ready to end your current session.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-2">
            <Button
              onClick={handleCancelLogout}
              className="cursor-pointer"
            >
              Cancel
            </Button>

            <ButtonPrimary buttonType="danger">
              <Link href="/signup" className="text-inherit">
                Logout
              </Link>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  )
}

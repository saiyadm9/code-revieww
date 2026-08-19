import { LoaderCircle } from "lucide-react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export default function ResponseCard({ loading, apiResponse, fullUrl }) {
  return (
    <div className="xl:col-span-8 bg-surface rounded-lg border border-border-gray shadow-card overflow-hidden">
      <div className="px-5 py-4 bg-gray-500/10 border-b border-border-gray flex items-center justify-between gap-4">
        <div className="min-w-0 flex items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">
            Response
          </span>

          <span className="text-muted">|</span>

          <span className="font-medium text-primary">
            GET
          </span>

          <span className="text-muted truncate">
            {fullUrl}
          </span>
        </div>

        {loading && (
          <LoaderCircle
            className="text-primary animate-spin"
            size={18}
          />
        )}
      </div>

      <div className="p-5">
        {!loading && apiResponse && (
          <div className="rounded-md bg-gray-500/5 border border-border-gray p-4 overflow-x-auto">
            <JsonView
              data={apiResponse}
              shouldExpandNode={allExpanded}
              style={{
                ...defaultStyles,

                container: "text-sm leading-6",
                label: "text-cyan-500",
                stringValue: "text-emerald-500",
                numberValue: "text-amber-500",
                booleanValue: "text-primary",
                nullValue: "text-muted",
                otherValue: "text-muted",
                punctuation: "text-muted",
                collapseIcon: "text-muted hover:text-foreground",
                expandIcon: "text-muted hover:text-foreground",
                collapsedContent: "text-muted",
              }}
            />
          </div>
        )}

        {/* {!loading && !apiResponse && (
          <div className="py-10 text-center text-sm text-muted">
            No response data available.
          </div>
        )} */}
      </div>
    </div>
  );
}
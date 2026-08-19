import { Icon } from "@iconify/react";
import { Search, CircleHelp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FaqHeader({ setFaqQuery }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFaqQuery(searchValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [searchValue])
  

  return (
    <section className="shadow-card rounded-xl border border-border-gray bg-linear-to-r from-sky-300/10 to-cyan-200/10">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 py-8  lg:px-12">
        <div className="lg:max-w-124">
          <div className="inline-flex items-center gap-1 rounded-lg bg-surface p-2 shadow-xs border border-border-gray">
            <span className="bg-primary/80 rounded-full text-white size-4 flex justify-center items-center">
              <Icon icon={"streamline-plump:customer-support-3"} width={10} />
            </span>

            <span className="text-primary/90 text-xs font-bold">Need help?</span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted">
            Find answers to the most common questions about our APIs and
            services. Can't find what you're looking for? Contact us.
          </p>

          <div className="relative mt-6 lg:max-w-100">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search for question..."
              className="h-11 w-full rounded-lg border border-border-gray bg-surface/90 pl-14 pr-5  shadow-xs outline-none transition-all placeholder:text-muted focus:border-sky-200 "
            />
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center ">
          <img
            src="/assets/images/faq_illustration_3.png"
            alt="FAQ Illustration"
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
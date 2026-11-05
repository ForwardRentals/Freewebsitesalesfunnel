import { Link } from "react-router";

/* The asterisk behind every "$9.99/month" on the site. Keep the wording in
   sync with the Plans page and Hermes's knowledge file. */
export function PriceFootnote({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={
        "text-xs sm:text-sm leading-relaxed " +
        (dark ? "text-[#faf7f2]/60" : "text-[#6b675e]") +
        " " +
        className
      }
    >
      *$9.99/month for your first 3 months, then $13.99/month (Starter plan).{" "}
      <Link
        to="/custom"
        className={
          "font-semibold underline underline-offset-2 " +
          (dark ? "text-[#7fc8a4]" : "text-[#166b45]")
        }
      >
        Planning an online store or something bigger? Ask about a custom build.
      </Link>
    </p>
  );
}

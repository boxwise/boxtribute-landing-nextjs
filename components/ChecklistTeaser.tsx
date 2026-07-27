const checklistItems = [
  { label: "Situation awareness & assessment", boxtribute: false },
  { label: "Warehouse & storage setup", boxtribute: true },
  { label: "Supply & incoming goods", boxtribute: true },
  { label: "Beneficiary registration & targeting", boxtribute: true },
  { label: "Distribution & follow-up", boxtribute: true },
];

const ChecklistTeaser = () => {
  return (
    <section className="w-full px-4 md:px-16 max-w-[1200px] mx-auto my-8 md:my-16">
      <div
        className={
          "border border-gray-200 rounded-lg shadow-md p-6 md:p-10 " +
          "flex flex-col md:flex-row gap-8 md:gap-12"
        }
      >
        {/* Left: heading, description, CTA button */}
        <div className="flex-1 flex flex-col gap-4">
          <h5>Start before you even have an account.</h5>
          <p>
            A field-ready, early-stage crisis response checklist, drawn from UNHCR, Sphere and the
            Logistics Cluster, with the Boxtribute steps folded into each phase, so partners see
            exactly where the platform fits into the work they already know.
          </p>
          <div>
            <a href="/checklist.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-red px-4 py-2 text-white text-xl rounded-md">
                Download the checklist (PDF)
              </button>
            </a>
          </div>
        </div>

        {/* Right: checklist */}
        <div className="flex-1 flex flex-col divide-y divide-gray-200">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <span className="text-green-500 font-bold flex-shrink-0">✓</span>
              <span>
                {item.label}
                {item.boxtribute && (
                  <>
                    {" · "}
                    <strong className="text-red">Boxtribute</strong>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChecklistTeaser;

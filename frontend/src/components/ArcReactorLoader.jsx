export default function ArcReactorLoader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="arc-reactor">
        <div className="outer-ring" />
        <div className="segment-ring" />
        <div className="inner-core" />
      </div>

      <p className="mt-8 text-xs tracking-[0.3em] text-dark opacity-60 uppercase">
        {text}
      </p>
    </div>
  );
}

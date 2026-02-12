export default function ArcReactorLoader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="arc-reactor-teal">
        <div className="outer-ring" />
        <div className="segment-ring" />
        <div className="inner-core" />
      </div>

      <p className="mt-8 text-sm tracking-widest text-gray-400">
        {text}
      </p>
    </div>
  );
}

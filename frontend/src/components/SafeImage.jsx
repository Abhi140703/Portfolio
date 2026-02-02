export default function SafeImage({ src, alt, className }) {
  if (!src || !src.startsWith("http")) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

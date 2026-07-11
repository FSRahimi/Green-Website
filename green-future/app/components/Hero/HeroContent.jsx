import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      <span className="mb-6 inline-flex rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-green-300 backdrop-blur">
        🌿 Our Nature • Our Future
      </span>

      <h1 className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Protect
        <span className="block bg-gradient-to-r from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent">
          Nature.
        </span>
        Protect Life.
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-8 text-gray-200">
        Together we can protect Afghanistan's forests, wildlife, rivers, and
        mountains for future generations.
      </p>

      <HeroButtons />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="bg-white h-screen flex items-center justify-center">
        <div className="text-4xl font-bold text-black">Davide Marcoli</div>
      </div>
      <div className="h-screen flex flex-col my-8 max-w-4xl mx-auto">
        <div className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-lg md:text-xl text-gray-100 mb-3">
            Application Developer EFZ ≈ 5.6 Final Grade
          </p>
        </div>
        <div className="mb-8 pb-4 border-b-2 border-white">
          <p className="text-sm text-gray-300 mb-1">About Me</p>
          <p className="text-base leading-relaxed text-gray-100 mb-3">
            Hi, my name is Davide, I&apos;m a swiss developer based near Zurich. I&apos;m currently working at <a target="_blank" className="underline duration-500 hover:text-zinc-300" href="https://sixgroup.com">SIX</a> and studying computer science at the <a target="_blank" className="underline duration-500 hover:text-zinc-300" href="https://zhaw.ch">ZHAW</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

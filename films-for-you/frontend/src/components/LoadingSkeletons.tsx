import ContentLoader from "react-content-loader";

const FilmCardSkeleton = () => {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <ContentLoader
        speed={2}
        width={314}
        height={471}
        backgroundColor="#aaaaaa"
        animate={true}
      >
        {/* simulating the film card */}
        <rect x="0" y="0" rx="15" ry="15" width="314" height="471" />
      </ContentLoader>
    </div>
  );
};

export { FilmCardSkeleton };

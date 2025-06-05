import FilmCard from "../components/FilmCard";
import { filmInfo } from "../types/Types";
import { v4 as uuidv4 } from "uuid";
import { filmsApiEndpoint } from "../utils/ApiPaths";
import { ErrorToast } from "../components/toasts/Toasts";
import { useEffect, useState } from "react";
import { FilmCardSkeleton } from "../components/LoadingSkeletons";

const FilmGrid = () => {
  const [films, setFilms] = useState<filmInfo[] | null>(null);
  const [filmCardsLoading, setFilmCardsLoading] = useState<boolean>(true);

  const fetchFilmRecommendations = async () => {
    try {
      const response = await fetch(`${filmsApiEndpoint}recommendations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (!response.ok) {
        ErrorToast({ message: result.message });
        return;
      }
      setFilms(result.data);
    } catch (error) {
      console.error(error); // DEBUG
      ErrorToast({ message: "Couldn't fetch films. Try again" });
    }
  };

  const renderRecommendations = (films: filmInfo[] | null) => {
    if (!films) return;
    return films.map((film: filmInfo) => (
      <FilmCard
        key={uuidv4()} // uuid unique key
        coverUrl={`${film.coverUrl}`}
        title={`${film.title}`}
        released={`${film.released}`}
      />
    ));
  };

  const renderLoadingSkeletons = (filmLength: number) => {
    return Array.from({ length: filmLength }).map((_, index) => (
      <FilmCardSkeleton key={index} />
    ));
  };

  useEffect(() => {
    fetchFilmRecommendations();
  }, []);

  useEffect(() => {
    if (films !== null) {
      setTimeout(() => setFilmCardsLoading(false), 1000);
    }
  }, [films]);

  return (
    <div>
      <div className="relative mb-16 flex h-fit flex-col items-center justify-center py-6">
        <h1 className="absolute top-0 text-nowrap text-3xl font-semibold">
          Films for Ilef
        </h1>
        <div className="absolute bottom-0 h-[2px] w-full rounded-sm bg-orange-400 bg-opacity-70"></div>
      </div>
      <div className="xxl:grid-cols-6 grid w-full grid-cols-1 gap-x-10 gap-y-14 text-sky-900 sm:grid-cols-2 lg:grid-cols-3">
        {filmCardsLoading
          ? renderLoadingSkeletons(6)
          : renderRecommendations(films)}
      </div>
    </div>
  );
};

export default FilmGrid;

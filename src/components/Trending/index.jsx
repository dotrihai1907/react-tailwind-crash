import moviesData from "./moviesData";
import { BiTime } from "react-icons/bi";

function Trending() {
  return (
    <>
      <h3 className="text-3xl border-b border-primary mt-12 mb-6 pb-4">
        Trending
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 ">
        {moviesData.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.src} alt={movie.title} className="w-full" />
            <div className="p-4 text-white">
              <h4 className="text-2xl">{movie.title}</h4>
              <p>{movie.main}</p>
            </div>
            <div className="badge">
              <BiTime />
              <p>{movie.runtime}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">
          Load more
        </button>
      </div>
    </>
  );
}

export default Trending;

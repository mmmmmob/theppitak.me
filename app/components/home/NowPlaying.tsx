"use client";

import { SpotifyData } from "@/types/spotify";
import useSWR, { Fetcher, SWRConfiguration } from "swr";

const fetcher: Fetcher<SpotifyData> = (input: RequestInfo | URL) =>
  fetch(input, { next: { revalidate: 60 } }).then((res) => res.json());

const config: SWRConfiguration = {
  fallbackData: {
    SpotifyData: { title: "Offline", songUrl: "#" },
  },
  refreshInterval: 60000,
};

export default function NowPlaying() {
  const { data } = useSWR<SpotifyData>("/api/spotify/", fetcher, config);

  return data?.isPlaying ? (
    <div className="flex">
      <p className="mr-1 font-light text-red dark:text-blue">Now Listening •</p>
      <div className="flex content-baseline dark:text-white">
        <img
          src={data.albumImageUrl}
          className="mr-1 h-5 w-5 self-center rounded-md"
        ></img>
        <p className="font-bold">
          <a href={data.songUrl} target="_blank">
            {data.title}
          </a>
        </p>
        <p className="mx-1 font-light">by</p>
        <p className="font-bold"> {data.artist}</p>
      </div>
    </div>
  ) : (
    <div className="flex">
      <p className="mr-1 font-light text-red dark:text-blue">Now Listening •</p>
      <p className="font-bold dark:text-white">to silence</p>
    </div>
  );
}

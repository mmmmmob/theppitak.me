import { SpotifyData } from "@/types/spotify";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<SpotifyData> = (input: RequestInfo | URL) =>
  fetch(input).then((res) => res.json());

export default function NowPlaying() {
  const { data } = useSWR<SpotifyData>("/api/spotify/", fetcher);

  console.log("Data from API:", data);

  return data?.isPlaying ? (
    <div>
      {data.title} by {data.artist}
    </div>
  ) : (
    <div>Fail to load</div>
  );
}

import { SpotifyData } from "@/app/types/spotify";
import useSWR from "swr";

export default function NowPlaying() {
  const { data, error } = useSWR<SpotifyData>("/api/spotify");

  if (error) {
    console.error("Error fetching data:", error);
  }

  if (data) {
    console.log("Data from API:", data);
  }

  return data?.isPlaying ? (
    <div>
      {data.title} by {data.artist}
    </div>
  ) : (
    <div>Fail to load</div>
  );
}

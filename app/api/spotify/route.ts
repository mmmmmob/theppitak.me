import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

interface SpotifyData {
  status: number;
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getAccessToken = async () => {
  if (refresh_token === undefined) {
    throw new Error("refresh_token is undefined");
  }

  const params = {
    grant_type: "refresh_token",
    refresh_token,
  };

  const urlParams = new URLSearchParams(params).toString();

  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    urlParams,
    {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return res.data.access_token;
};

const getNowPlaying = async (): Promise<SpotifyData> => {
  const access_token = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error(`Error fetching now playing data: ${response.statusText}`);
  }

  const data = (await response.json()) as SpotifyData;
  return data;
};

export async function GET(req: Request, res: NextResponse) {
  console.log("GET has been called");

  const response = await getNowPlaying();

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.currently_playing_type !== "track"
  ) {
    return NextResponse.json({ isPlaying: false });
  }

  const data = {
    isPlaying: response.is_playing,
    title: response.item.name,
    album: response.item.album.name,
    artist: response.item.album.artists.map((artist) => artist.name).join(", "),
    albumImageUrl: response.item.album.images[0].url,
    songUrl: response.item.external_urls.spotify,
  };

  return NextResponse.json(data);
}

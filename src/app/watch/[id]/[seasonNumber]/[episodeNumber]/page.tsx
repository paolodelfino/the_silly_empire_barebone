import Icon from "@/components/Icon";
import Player from "@/components/Player";
import tmdb from "@/libs/tmdb";
import { vixsrcPlaylist } from "@/libs/vixsrc";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; seasonNumber: string; episodeNumber: string }>;
}) {
  const { id, seasonNumber, episodeNumber } = await params;

  const data = await Promise.all([
    tmdb.tvShows.details(Number(id)),
    tmdb.tvEpisode.details({
      tvShowID: Number(id),
      seasonNumber: Number(seasonNumber),
      episodeNumber: Number(episodeNumber),
    }),
    vixsrcPlaylist(Number(id), Number(seasonNumber), Number(episodeNumber)),
  ]);

  const title = data[0];
  const episode = data[1];

  const playlist = data[2];
  if (playlist == false) {
    return (
      <p className="text-red-600 block text-xs pt-8">
        <Icon name="xmark-large" /> Error: Episode not available to watch yet
        (or something unbelievable happened)
      </p>
    );
  }

  return (
    <div>
      <Player
        playlist={playlist}
        title={{
          id: id,
          name: title.name,
          imagePath:
            episode.still_path === null ? undefined : episode.still_path,
          episodeNumber: Number(episodeNumber),
          seasonNumber: Number(seasonNumber),
          episodeName: episode.name,
        }}
      />
    </div>
  );
}

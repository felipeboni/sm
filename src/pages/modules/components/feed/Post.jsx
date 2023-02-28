import { useState, useEffect } from "react";
import { Video } from "./Video";
import Image from "next/image";
import Link from "next/link";
import { IOSView } from "react-device-detect";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Post = ({ props, isPlaying, likedPost = false }) => {
  const { videoUri, comments, likes, author, description } = props;

  const [postStatus, setPostStatus] = useState({
    playing: isPlaying,
    liked: likedPost,
  });

  useEffect(() => {
    setPostStatus(() => {
      return {
        playing: isPlaying,
        liked: likedPost,
      };
    });
  }, [isPlaying, likedPost]);

  const handleLike = () => {
    setPostStatus({
      ...postStatus,
      liked: !postStatus.liked,
    });
  };

  const handlePause = () => {
    setPostStatus({
      ...postStatus,
      playing: !postStatus.playing,
    });
  };

  return (
    <div className="relative w-full h-full snap-start">
      {!postStatus.playing && (
        // <IOSView>
        <div className="absolute -mt-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <PlayArrowRoundedIcon className="w-32 h-32 text-white/50" />
        </div>
        // </IOSView>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 h-[70%] flex items-end after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-gradient-to-t after:from-black/75 after:z-[-1]">
        {/* <IOSView> */}
        <div className="grid w-full gap-3 px-4 mb-40 text-white">
          <div className="flex items-center gap-2">
            <Link href="#" className="flex gap-2 py-1">
              <h2 className="text-sm font-semibold">{author}</h2>
              <Image src="/img/verified.svg" width={12} height={12} />
            </Link>

            <button className="py-1.5 px-2 text-xs border z-50 border-white rounded-lg">
              Seguir
            </button>
          </div>

          <div className="flex justify-between w-full">
            <div className="grid gap-2">
              <h3 className="text-sm">
                {description.length > 60
                  ? `${description.substring(0, 60)}...`
                  : description}
              </h3>
              <h4 className="text-xs opacity-75">
                Curtido por <span className="font-semibold">{likes}</span>{" "}
                pessoas
              </h4>
            </div>

            <div className="grid gap-4">
              <button
                className="z-[999] flex flex-col items-center justify-center gap-2 p-2"
                onClick={() => handleLike()}
              >
                {postStatus.liked ? (
                  <FavoriteRoundedIcon />
                ) : (
                  <FavoriteBorderRoundedIcon className="scale-2"/>
                )}

                <span className="text-xs">{likes}</span>
              </button>
            </div>
          </div>
        </div>
        {/* </IOSView> */}
      </div>

      <Video
        videoUri={videoUri}
        isPlaying={postStatus.playing}
        onClick={() => handlePause()}
      />
    </div>
  );
};

export { Post };

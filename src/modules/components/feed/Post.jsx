import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { formatNumber } from "@/helpers/format/numberFormat";

import { IOSView } from "react-device-detect";
import { Video } from "./Video";

import { Heart, Play } from "react-swm-icon-pack";
import { AnimatePresence, motion } from "framer-motion";

const Post = ({ props, isPlaying, likedPost = false }) => {
  const { videoUri, comments, likes, author, description } = props;

  const [postStatus, setPostStatus] = useState({
    playing: isPlaying,
    liked: likedPost,
  });

  useEffect(() => {
    setPostStatus(() => {
      return {
        ...postStatus,
        playing: isPlaying,
      };
    });
  }, [isPlaying, likedPost]);

  const handleLike = (evt) => {
    evt.cancelBubble = true;
    evt.stopPropagation();

    setPostStatus({
      ...postStatus,
      liked: !postStatus.liked,
    });
  };

  const handlePause = (evt) => {
    evt.stopPropagation();
    setPostStatus({
      ...postStatus,
      playing: !postStatus.playing,
    });
  };

  return (
    <div
      className="relative w-full h-full snap-start"
      onClick={(evt) => handlePause(evt)}
    >
      {!postStatus.playing && (
        // <IOSView>
        <div className="absolute -mt-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Play
            set="curved"
            size="96"
            color="white"
            fill="white"
            strokeWidth="1"
          />
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
                Curtido por{" "}
                <span className="font-semibold">
                  {formatNumber(likes, { notation: "standard" })}
                </span>{" "}
                pessoas
              </h4>
            </div>

            <div className="grid gap-4">
              <button
                className="z-[999] flex flex-col items-center justify-center p-2 relative -mt-12"
                onClick={(evt) => handleLike(evt)}
              >
                <AnimatePresence>
                  {postStatus.liked ? (
                    <motion.span
                      key="heartFilled"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute"
                    >
                      <Heart
                        set="curved"
                        size="32"
                        color="rgb(239, 62, 91)"
                        fill="rgb(239, 62, 91)"
                        strokeWidth="1"
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="heartOutlined"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute"
                    >
                      <Heart
                        set="curved"
                        size="32"
                        color="white"
                        strokeWidth="1"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="pt-12 text-xs">
                  {formatNumber(likes, {
                    notation: "compact",
                    maximumSignificantDigits: 3,
                  })}
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* </IOSView> */}
      </div>

      <Video videoUri={videoUri} isPlaying={postStatus.playing} />
    </div>
  );
};

export { Post };

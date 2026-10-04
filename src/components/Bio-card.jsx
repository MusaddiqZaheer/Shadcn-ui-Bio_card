"use client";

import { useState } from "react";
import { Heart, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function BioCard() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((previous) => !previous);
  };

  return (
    <Card className="w-full max-w-[295px] rounded-[20px] border border-[#d5d5d5] bg-white p-[14px] shadow-[0_8px_25px_rgba(0,0,0,0.12)]">

      {/* Profile Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          {/* Profile Image */}
          <Avatar className="h-[42px] w-[42px] border border-gray-200">
            <AvatarImage
              src="/car.png"
              alt="Profile"
              className="object-cover"
            />

            <AvatarFallback>CA</AvatarFallback>
          </Avatar>

          {/* Name */}
          <div>
            <h2 className="text-[14px] font-semibold leading-5 text-[#171717]">
              Joseph Anderson
            </h2>

            <p className="text-[11px] text-gray-400">
              Posted 2h ago
            </p>
          </div>

        </div>

        {/* Heart Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleLike}
          aria-label={liked ? "Unlike post" : "Like post"}
          className="h-[31px] w-[31px] rounded-[9px] border-[#d2d2d2] bg-white hover:bg-gray-50"
        >
          <Heart
            className={`h-[17px] w-[17px] transition-all duration-200 ${
              liked
                ? "heart-liked fill-red-500 text-red-500"
                : "text-[#202020]"
            }`}
            strokeWidth={2.2}
          />
        </Button>

      </div>

      {/* Description */}
      <div className="mt-[16px]">

        <h1 className="text-[16px] font-medium leading-[21px] text-[#151515]">
          Looking for SM manager to create
          <br />
          posts across various platforms
        </h1>

        <p className="mt-[7px] truncate text-[12px] text-[#999999]">
          We're seeking a skilled Social Media Manager to...
        </p>

      </div>

      {/* Tags */}
      <div className="mt-[9px] flex flex-wrap gap-[5px]">

        <Badge
          className="rounded-[5px] bg-[#e9f0f8] px-[6px] py-[3px] text-[11px] font-normal text-[#34404b] hover:bg-[#e9f0f8]"
        >
          SMM
        </Badge>

        <Badge
          className="rounded-[5px] bg-[#e9f0f8] px-[6px] py-[3px] text-[11px] font-normal text-[#34404b] hover:bg-[#e9f0f8]"
        >
          Growth Strategy
        </Badge>

        <Badge
          className="rounded-[5px] bg-[#e9f0f8] px-[6px] py-[3px] text-[11px] font-normal text-[#34404b] hover:bg-[#e9f0f8]"
        >
          Startup
        </Badge>

        <Badge
          className="rounded-[5px] bg-[#e9f0f8] px-[6px] py-[3px] text-[11px] font-normal text-[#34404b] hover:bg-[#e9f0f8]"
        >
          Brand
        </Badge>

      </div>

      {/* Dashed Line */}
      <div className="my-[18px] border-t border-dashed border-[#d5d5d5]" />

      {/* Salary */}
      <div>

        <h2 className="text-[28px] font-medium leading-none tracking-[-0.7px] text-[#151515]">
          $150 – $200/h
        </h2>

        <p className="mt-[7px] text-[11px] text-[#999999]">
          Hourly rate • 100% Remote
        </p>

      </div>

      {/* Apply Button */}
      <Button
        type="button"
        className="mt-[20px] h-[56px] w-full rounded-[16px] bg-[#3d8df5] text-[16px] font-normal text-white shadow-none hover:bg-[#3183ed]"
      >
        <Zap
          className="mr-[7px] h-[18px] w-[18px] fill-white"
          strokeWidth={2}
        />

        Apply
      </Button>

    </Card>
  );
}
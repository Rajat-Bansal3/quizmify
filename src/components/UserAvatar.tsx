import { User } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";

type Props = {
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="w-full h-full aspect-square relative">
          <Image fill src={user.image} alt="pfp" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback>
            <span className="sr-only">{user.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;

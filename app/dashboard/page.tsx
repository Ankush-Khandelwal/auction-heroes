"use client";

import { useState } from "react";
import Input from "../components/common/Input";

type FormData = {
  auctionName: string;
  auctionDate: string;
  sportsType: string;
  pointsPerTeam: number;
  players: number;
  minimumBid: number;
  increaseFactor: number;
};

const initialState = {
  auctionName: "",
  auctionDate: "",
  sportsType: "",
  pointsPerTeam: 0,
  players: 0,
  minimumBid: 0,
  increaseFactor: 0,
};

export default function Dashboard() {
  const [formData, setFormData] = useState<FormData>(initialState);

  console.log(formData);

  return (
    <>
      <div className="p-8 flex justify-center">
        <form className="flex flex-col w-2/5">
          <Input
            label="Auction Name"
            type="text"
            value={formData.auctionName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, auctionName: e.target.value }))
            }
          />
          <Input
            label="Auction Date"
            type="text"
            value={formData.auctionDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, auctionDate: e.target.value }))
            }
          />
          <Input
            label="Sports type"
            type="text"
            value={formData.sportsType}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, sportsType: e.target.value }))
            }
          />
          <Input
            label="Points per team"
            type="number"
            value={formData.pointsPerTeam}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                pointsPerTeam: +e.target.value,
              }))
            }
          />
          <Input
            label="Players per team"
            type="number"
            value={formData.players}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                players: +e.target.value,
              }))
            }
          />
          <Input
            label="Minimum bid"
            type="number"
            value={formData.minimumBid}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                minimumBid: +e.target.value,
              }))
            }
          />
          <Input
            label="Bid Increase factor"
            type="number"
            value={formData.increaseFactor}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                increaseFactor: +e.target.value,
              }))
            }
          />
        </form>
      </div>
    </>
  );
}

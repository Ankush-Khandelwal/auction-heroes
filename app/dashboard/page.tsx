"use client";

import { useState } from "react";
import Input from "../components/common/Input";

type Auction = {
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
  const [formData, setFormData] = useState<Auction>(initialState);
  const [auctions, setAuctions] = useState<Auction[]>([]);

  const [showForm, setShowForm] = useState(false);

  const handleSave = () => {
    const state = [...auctions];
    state.push(formData);
    setAuctions(state);
    setFormData(initialState);
    setShowForm(false);
  };

  return (
    <>
      <div className="p-8 flex justify-center">
        {showForm ? (
          <>
            <form className="flex flex-col w-2/5 gap-2">
              <Input
                label="Auction Name"
                type="text"
                value={formData.auctionName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    auctionName: e.target.value,
                  }))
                }
              />
              <Input
                label="Auction Date"
                type="text"
                value={formData.auctionDate}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    auctionDate: e.target.value,
                  }))
                }
              />
              <Input
                label="Sports type"
                type="text"
                value={formData.sportsType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    sportsType: e.target.value,
                  }))
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

              <button
                className="bg-black p-2 text-white rounded-md mt-2"
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <button onClick={() => setShowForm(true)}>Add auction</button>
            <div>
              {auctions.length > 0 ? (
                <>
                  {auctions.map((auction) => (
                    <div>
                      <p>{auction.auctionName}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <p className="text-gray-500 text-xs">No auctions available</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

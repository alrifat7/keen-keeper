import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const singleFriend = data.find(f => f.id === parseInt(id));
        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-8 mt-10 min-h-screen ">
      <div className="max-w-6xl  mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className=" p-6   bg-gray-100 rounded-4xl shadow text-center">
          <img
            src={friend.picture}
            alt=""
            className="w-20 h-20 mx-auto rounded-full"
          />
          <h2 className="mt-3 font-semibold">{friend.name}</h2>

          <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
            {friend.status}
          </span>

          <div className="mt-2">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mr-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-3">{friend.bio}</p>

          <div className="mt-4 space-y-2">
            <button className='btn rounded-2xl w-[300px]'>Snooze 2 Weeks</button>
            <button className='btn rounded-2xl w-[300px]'>Archive</button>
            <button className='btn rounded-2xl w-[300px] text-red-600'>
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* TOP STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded shadow text-center">
              <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">{friend.goal}</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-sm font-semibold">
                {friend.next_due_date}
              </h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* GOAL SECTION */}
          <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="btn rounded-2xl p-6">Edit</button>
          </div>

          {/* QUICK ACTION */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-3 font-semibold">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="btn font-semibold p-7">📞 Call</button>
              <button className="btn font-semibold p-7">💬 Text</button>
              <button className="btn font-semibold p-7">🎥 Video</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
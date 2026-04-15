import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch('/data.json').then((res) => res.json());

const STATUS_STYLES = {
  'overdue':    'bg-red-100 text-red-800',
  'almost due': 'bg-amber-100 text-amber-800',
  'on-track':   'bg-green-100 text-green-800',
};

const STATUS_LABELS = {
  'overdue':    'Overdue',
  'almost due': 'Almost Due',
  'on-track':   'On-Track',
};

const TAG_STYLE = 'bg-blue-50 text-blue-800 text-[10px] px-2 py-0.5 rounded-full';

function FriendCard({ friend }) {
  const { name, picture, days_since_contact, status, tags } = friend;

  return (
    <Link to={`/friend/${friend.id}`} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 mt-4 text-center">
      <img
        src={picture}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />

      <p className="text-sm font-medium text-gray-900 leading-tight">{name}</p>
      <p className="text-xs text-gray-400">{days_since_contact}d ago</p>

      <div className="flex flex-wrap gap-1 justify-center">
        {tags.map((tag) => (
          <span key={tag} className={TAG_STYLE}>
            {tag}
          </span>
        ))}
      </div>

      <span className={`text-[11px] font-medium px-3 py-0.5 rounded-full ${STATUS_STYLES[status]}`}>
        {STATUS_LABELS[status]}
      </span>
    </Link>
  );
}

export default function YourFriends() {
  const friends = use(friendsPromise);

  return (
    <div className=" container mx-auto bg-gray-50 p-8  ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-7">Your Friends</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import faker from "faker";
import Suggest from "./Suggest";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between text-sm mb-5">
        <h2 className="text-sm font-bold text-gray-400">Suggestions for you</h2>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((profile) => (
        <Suggest
          key={profile.id}
          id={profile.id}
          dp={profile.avatar}
          username={profile.username}
          company={profile.company.name}
        />
      ))}
    </div>
  );
}

export default Suggestions;

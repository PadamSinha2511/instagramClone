import faker from "faker";
import { useState, useEffect } from "react";
import Story from "./Story";

function Stories() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestion(suggestion);
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-8 bg-white border-gray-300 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          dp={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;

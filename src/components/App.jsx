import React, { useState } from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Input from "./Input";

function createEntry(emoji) {
    return (
        <Entry key={emoji.id} emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
    );
}

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmojis = emojipedia.filter((emoji) => {
        const { name, emoji: emojiChar } = emoji;
        const query = searchQuery.toLowerCase();
        return name.toLowerCase().includes(query) || emojiChar.includes(query);
    });

    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <Input
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by name or emoji..."
            />
            <dl className="dictionary">
                {filteredEmojis.map(createEntry)}
            </dl>
        </div>
    );
}

export default App;

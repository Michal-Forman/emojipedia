import React, {useState} from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"
import Input from "./Input";


function createEntry(emoji) {
    return <Entry
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
    />
}

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        console.log('Input value:', e.target.value);
        setSearchQuery(e.target.value);
    };

    const filteredEmojis = emojipedia.filter(
        (emoji) =>
            emoji.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <Input
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search emojis..."
            />
            <dl className="dictionary">
                {filteredEmojis.map(createEntry)}
            </dl>
        </div>
    );
}

export default App;

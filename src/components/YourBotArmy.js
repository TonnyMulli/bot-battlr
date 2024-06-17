import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Render BotCards for each bot in the army
  const renderArmy = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={removeBot}
      deleteBot={deleteBot}
    />
  ));

  // Display a segmented inverted olive bot-army
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {renderArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
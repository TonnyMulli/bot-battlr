import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  // Render BotCards for each bot in the collection
  const renderBots = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={enlistBot}
      deleteBot={deleteBot}
    />
  ));

  // Display a grid of BotCards
  return (
    <div className="ui four column grid">
      <div className="row">
        {renderBots}
      </div>
    </div>
  );
}

export default BotCollection;
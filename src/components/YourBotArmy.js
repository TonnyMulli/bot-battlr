import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Using React.memo to prevent unnecessary re-renders
  const BotCardMemo = React.memo(BotCard);

  // Using React.Fragment for better performance
  const renderArmy = (
    <React.Fragment>
      {bots.map((bot) => (
        <BotCardMemo
          key={bot.id}
          bot={bot}
          clickEvent={removeBot}
          deleteBot={deleteBot}
        />
      ))}
    </React.Fragment>
  );

  // Returning JSX directly
  return (
    <>
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {renderArmy}
          </div>
        </div>
      </div>
    </>
  );
}

export default YourBotArmy;
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  const renderBots = React.useMemo(() => {
    return bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    ));
  }, [bots, enlistBot, deleteBot]);

  return (
    <div className="ui four column grid">
      {renderBots}
    </div>
  );
}

export default BotCollection;
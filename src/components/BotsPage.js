import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  // State variables to store bots and enlisted bots in the army
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetch bot data from the server on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch bot data from the server
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8002/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Enlist a bot into the army
  function enlistBot(bot) {
    if (!bot.isInArmy) {
      const updatedBots = bots.map((currentBot) =>
        currentBot.id === bot.id ? { ...currentBot, isInArmy: true } : currentBot
      );
      setBots(updatedBots);
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  }

  // Remove a bot from the army
  function removeBot(bot) {
    setYourBotArmy((prevArmy) =>
      prevArmy.filter((b) => b.id !== bot.id)
    );
    setBots((prevBots) =>
      prevBots.map((b) =>
        b.id === bot.id ? { ...b, army: false } : { ...b }
      )
    );
  }

  // Delete a bot both from the server and army
  async function deleteBot(bot) {
    try {
      const updatedYourBotArmy = yourBotArmy.filter((b) => b.id !== bot.id);
      const updatedBots = bots.filter((b) => b.id !== bot.id);
      setYourBotArmy(updatedYourBotArmy);
      setBots(updatedBots);
      await fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  }

  // Render YourBotArmy and BotCollection components
  return (
    <div>
      <YourBotArmy
        bots={yourBotArmy}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;
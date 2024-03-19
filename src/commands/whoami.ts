const whoamiObj = {
  "message" : [
    [
      "Within the kaleidoscope of existence,",
      "I find myself as a reflection questioning the enigma - "
    ],
    [
      "Amidst cosmic murmurs,",
      "I traverse the labyrinth of self-discovery,",
      "echoing the timeless refrain - "
    ],
    [
      "In the symphony of existence,",
      "I am a note exploring its unique melody,",
      "resonating with the universal inquiry - ",
    ],
    [
      "Like stardust pondering its journey,",
      "I contemplate the cosmic puzzle,",
      "silently pondering - ",
    ],
    [
      "In the intricate tapestry of reality,",
      "I am the thread of self-exploration,",
      "weaving through the perpetual question - "
    ]
    
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}

const modules = [
  {
    id: "kickoff",
    title: "Kick-off",
    coach: "Big sister briefing: learn the field before you charge into the breakdown.",
    cards: [
      {
        title: "What standing orders are for",
        body: "Standing orders are the rulebook for local authority meetings. They help meetings stay lawful, transparent, inclusive, and orderly.",
        facts: [
          "They apply to local authorities, committees, subcommittees, subordinate decision-making bodies, and local or community boards.",
          "All members must obey them.",
          "The chairperson rules on interpretation when the orders do not directly answer the issue."
        ],
        q: "Who makes a ruling if a question about interpretation comes up?",
        choices: ["The chairperson", "The public gallery", "The most senior councillor"],
        answer: 0
      },
      {
        title: "The core principles",
        body: "The rules are built around good governance: openness, accountability, informed decisions, community views, diversity, and lawful conduct.",
        facts: [
          "Meetings should be open, transparent, and democratically accountable.",
          "Decision-making should consider community views and diversity.",
          "Members should use meetings to make robust public decisions, not spring surprises."
        ],
        q: "Which value best captures the purpose of the standing orders?",
        choices: ["Transparent and lawful decision-making", "Faster meetings at any cost", "Private agreement before public meetings"],
        answer: 0
      }
    ]
  },
  {
    id: "notice",
    title: "Notice & Agendas",
    coach: "This is the lineout call. If notice and agendas are wrong, the whole play gets messy.",
    cards: [
      {
        title: "Ordinary meeting notice",
        body: "Ordinary meetings need public notice and member notice. The dates, times, and places must be clear.",
        facts: [
          "Following-month meetings are publicly notified not more than 14 days and not less than 5 days before the end of the current month.",
          "Meetings on or after the 21st can be publicly notified 10 to 5 working days before the meeting.",
          "Members get written notice at least 14 days before the meeting, unless a schedule has been adopted."
        ],
        q: "How much written notice do members normally get for an ordinary meeting?",
        choices: ["At least 14 days", "At least 24 hours", "Only when the agenda is ready"],
        answer: 0
      },
      {
        title: "Emergency meetings",
        body: "Emergency meetings exist when business must be dealt with sooner than extraordinary meeting notice allows.",
        facts: [
          "An emergency meeting may be called by the Mayor, or by the chief executive if the Mayor is unavailable.",
          "Notice must be given by reasonable means at least 24 hours before the meeting.",
          "The general nature of business must be publicly notified as soon as practicable."
        ],
        q: "What is the minimum member notice for an emergency meeting?",
        choices: ["24 hours", "2 working days", "14 days"],
        answer: 0
      },
      {
        title: "Agenda availability",
        body: "The chief executive prepares the agenda on behalf of the chairperson. The public gets access unless the item is legitimately public excluded.",
        facts: [
          "The public may inspect agendas and reports without a fee at least 2 working days before the meeting.",
          "A recommendation is not final until the meeting passes a formal resolution.",
          "Minor matters not on the agenda may be discussed, but no resolution, decision, or recommendation may be made."
        ],
        q: "When does an agenda recommendation become final?",
        choices: ["When resolved by the meeting", "When printed in the agenda", "When the chairperson likes it"],
        answer: 0
      }
    ]
  },
  {
    id: "meeting",
    title: "Meeting Play",
    coach: "Now we are in open play: quorum, attendance, public access, and the chair's whistle.",
    cards: [
      {
        title: "Quorum",
        body: "A meeting needs enough members physically present to be valid. Remote attendance has limits for quorum.",
        facts: [
          "For council meetings, quorum is half the members if the number is even, or a majority if odd.",
          "Members attending by audio or audiovisual link do not count as present for quorum.",
          "If no quorum is present, the meeting lapses."
        ],
        q: "Does a member on an audiovisual link count toward quorum?",
        choices: ["No", "Yes, always", "Only if they vote"],
        answer: 0
      },
      {
        title: "Public access",
        body: "Meetings are open to the public unless there are lawful grounds to exclude them.",
        facts: [
          "The public may be removed for disorder or misconduct.",
          "Public excluded sessions must follow LGOIMA grounds and proper motions.",
          "Council may record meetings, and the public may record if it does not disrupt proceedings."
        ],
        q: "What is the default status of local authority meetings?",
        choices: ["Open to the public", "Public excluded", "Members only until voting"],
        answer: 0
      },
      {
        title: "The chair's role",
        body: "The chair keeps order, prioritises speakers, rules on standing orders, and can require members to follow procedure.",
        facts: [
          "Members address the chairperson, not each other.",
          "The chairperson's rulings are final unless a specific process says otherwise.",
          "If the chair stands, members must sit down and stop speaking."
        ],
        q: "When the chairperson stands, what must members do?",
        choices: ["Sit down and stop speaking", "Finish the current sentence", "Vote immediately"],
        answer: 0
      }
    ]
  },
  {
    id: "public",
    title: "Public Voice",
    coach: "Governance officer superpower: knowing when the public can speak, ask, and petition.",
    cards: [
      {
        title: "Public forums",
        body: "Public forums are usually set aside near the start of a meeting for public input, but they do not replace formal decision-making.",
        facts: [
          "A speaker in public forum may speak for up to 5 minutes, unless the meeting resolves otherwise.",
          "Public forum time is normally limited to 30 minutes.",
          "No resolutions may be made on public forum matters unless the matter is already on the agenda."
        ],
        q: "Can a meeting normally pass a resolution on a new public forum matter?",
        choices: ["No", "Yes, if the speaker is persuasive", "Yes, if it takes under 5 minutes"],
        answer: 0
      },
      {
        title: "Deputations and petitions",
        body: "Deputations and petitions give structured ways for people to present views to the council.",
        facts: [
          "A deputation speaker may speak for up to 10 minutes, excluding questions.",
          "A petition is a request containing at least 20 signatures.",
          "Questions should clarify matters, not become a debate."
        ],
        q: "How many signatures does a petition need?",
        choices: ["At least 20", "At least 5", "A majority of ratepayers"],
        answer: 0
      }
    ]
  },
  {
    id: "vote",
    title: "Voting",
    coach: "Penalty kick time. The vote has to be visible, counted, and properly recorded.",
    cards: [
      {
        title: "Majority and open voting",
        body: "Decisions are made by majority vote of members present and voting unless legislation says otherwise.",
        facts: [
          "Voting is open and transparent. Secret ballots are excluded.",
          "The result of the vote must be announced immediately.",
          "The chairperson does not have a casting vote."
        ],
        q: "Does the chairperson have a casting vote under these standing orders?",
        choices: ["No", "Yes", "Only at committees"],
        answer: 0
      },
      {
        title: "Divisions and abstentions",
        body: "Members can ask for more formal vote recording, and they may abstain.",
        facts: [
          "A member may call for a division, which records how each member voted.",
          "A member may request that their vote or abstention be recorded.",
          "Open voting means observers can identify how members voted."
        ],
        q: "What does a division record?",
        choices: ["Each member's vote", "Only the total numbers", "The public's view"],
        answer: 0
      }
    ]
  },
  {
    id: "debate",
    title: "Debate",
    coach: "This is where meetings are won: relevance, speaking turns, amendments, and calm heads.",
    cards: [
      {
        title: "Speaking rules",
        body: "Debate keeps to the matter before the meeting. Members usually speak once to a motion at council meetings.",
        facts: [
          "Members must speak strictly to the motion or amendment.",
          "The mover of an original motion has a right of reply.",
          "A seconder may second without speaking and reserve their speech."
        ],
        q: "Who has the right of reply on an original motion?",
        choices: ["The mover", "The seconder", "Any member who disagrees"],
        answer: 0
      },
      {
        title: "Motions and amendments",
        body: "Motions and amendments need a seconder. Amendments must be relevant and must not be direct negatives.",
        facts: [
          "A motion should be moved and seconded before debate but after questions.",
          "Unseconded motions and amendments are not valid and should not be entered in the minutes.",
          "Only one amendment is disposed of before a new amendment is moved, though future amendments can be foreshadowed."
        ],
        q: "What happens to an amendment that is not seconded?",
        choices: ["It is not valid", "It is automatically carried", "It becomes a notice of motion"],
        answer: 0
      },
      {
        title: "Points of order",
        body: "A point of order is for possible breaches of procedure, not ordinary disagreement.",
        facts: [
          "When a point of order is raised, the current speaker must stop speaking and sit down if standing.",
          "Contradicting another speaker is not a point of order.",
          "The chairperson's ruling on a point of order is final."
        ],
        q: "Is simply disagreeing with a previous speaker a point of order?",
        choices: ["No", "Yes", "Only during voting"],
        answer: 0
      }
    ]
  },
  {
    id: "conduct",
    title: "Conduct",
    coach: "Calm, lawful, respectful. Governance is partly knowing when to blow the whistle.",
    cards: [
      {
        title: "Order and conduct",
        body: "Members must behave consistently with the Code of Conduct and the chair can manage disorder.",
        facts: [
          "The chairperson may call members to order.",
          "Disorderly conduct can lead to removal from the meeting.",
          "Contempt means disobedient or disrespectful conduct toward the chair, members, officers, or the public."
        ],
        q: "Who can call a member to order?",
        choices: ["The chairperson", "Any public attendee", "Only the chief executive"],
        answer: 0
      },
      {
        title: "Conflicts of interest",
        body: "Members must manage financial and non-financial conflicts so decisions stay legitimate.",
        facts: [
          "Pecuniary interests are covered by the Local Authorities (Members' Interests) Act 1968.",
          "Non-financial conflicts can include bias, predetermination, or roles in another body.",
          "Conflicted members should not influence debate or decision-making where the conflict applies."
        ],
        q: "Which is a possible non-financial conflict?",
        choices: ["Predetermination or bias", "A meeting lasting under six hours", "A public agenda"],
        answer: 0
      }
    ]
  },
  {
    id: "final",
    title: "Final Whistle",
    coach: "Last phase. Minutes and revocation are where good process becomes durable record.",
    cards: [
      {
        title: "Revoking decisions",
        body: "A previous resolution can be revoked or altered, but there are safeguards.",
        facts: [
          "Notice to revoke or alter must be given to the chief executive at least 5 working days before the meeting.",
          "A resolution made by a delegated body can only be revoked or amended by that body.",
          "At the same meeting, revocation or alteration needs fresh facts or information and 75% of members present and voting."
        ],
        q: "How much notice is normally required for revocation or alteration?",
        choices: ["At least 5 working days", "24 hours", "No notice if the mover is present"],
        answer: 0
      },
      {
        title: "Minutes and records",
        body: "Minutes are evidence of proceedings once confirmed. They record what happened, who was there, and what was decided.",
        facts: [
          "The chief executive keeps the minutes.",
          "Minutes record attendance, apologies, quorum failures, items, resolutions, movers, seconders, divisions, and public excluded permissions.",
          "At a later meeting, discussion of the minutes is limited to their correctness."
        ],
        q: "What is the only topic for discussion when confirming previous minutes?",
        choices: ["Their correctness", "Whether members now like the decision", "New public forum items"],
        answer: 0
      }
    ]
  }
];

const chapterMap = [
  "1 Intro", "2 Definitions", "3 Standing orders", "4 Meetings",
  "5 Appointments", "6 Delegations", "7 Committees", "8 Notice",
  "9 Agenda", "10 Opening", "11 Quorum", "12 Public access",
  "13 Attendance", "14 Chair", "15 Public forums", "16 Deputations",
  "17 Petitions", "18 Public excluded", "19 Voting", "20 Conduct",
  "21 Debate", "22 Speaking options", "23 Motions", "24 Revocation",
  "25 Procedural motions", "26 Points of order", "27 Notices of motion",
  "28 Minutes", "29 Records", "Appendices"
];

const andyStages = [
  "assets/andy-rookie.png",
  "assets/andy-cup-1.png",
  "assets/andy-cup-2.png",
  "assets/andy-cup-3.png",
  "assets/andy-champion.png"
];

const state = JSON.parse(localStorage.getItem("andrew-standing-orders") || "{}");
state.moduleIndex ??= 0;
state.cardIndex ??= 0;
state.mode ??= "learn";
state.quizIndex ??= 0;
state.quizOrder ??= [];
state.moduleCorrect ??= 0;
state.xp ??= 0;
state.streak ??= 0;
state.correctCards ??= {};
state.weak ??= {};

const els = {
  xp: document.querySelector("#xp"),
  streak: document.querySelector("#streak"),
  caps: document.querySelector("#caps"),
  ball: document.querySelector("#ball"),
  andyArt: document.querySelector("#andyArt"),
  coachText: document.querySelector("#coachText"),
  moduleNav: document.querySelector("#moduleNav"),
  moduleTag: document.querySelector("#moduleTag"),
  cardCounter: document.querySelector("#cardCounter"),
  cardTitle: document.querySelector("#cardTitle"),
  cardBody: document.querySelector("#cardBody"),
  factList: document.querySelector("#factList"),
  stageLabel: document.querySelector("#stageLabel"),
  quizStatus: document.querySelector("#quizStatus"),
  questionPanel: document.querySelector("#questionPanel"),
  knowBtn: document.querySelector("#knowBtn"),
  quizBtn: document.querySelector("#quizBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  reviewPrompt: document.querySelector("#reviewPrompt"),
  chapterMap: document.querySelector("#chapterMap")
};

function save() {
  localStorage.setItem("andrew-standing-orders", JSON.stringify(state));
}

function currentCard() {
  if (state.mode === "quiz") {
    return modules[state.moduleIndex].cards[state.quizOrder[state.quizIndex]];
  }
  return modules[state.moduleIndex].cards[state.cardIndex];
}

function cardKey(moduleIndex = state.moduleIndex, cardIndex = state.cardIndex) {
  return `${modules[moduleIndex].id}:${cardIndex}`;
}

function completedModuleCount() {
  return modules.filter((module) =>
    module.cards.every((_, index) => state.correctCards[`${module.id}:${index}`])
  ).length;
}

function renderNav() {
  if (!els.moduleNav) return;
  els.moduleNav.innerHTML = "";
  modules.forEach((module, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-chip${index === state.moduleIndex ? " active" : ""}`;
    button.textContent = module.title;
    button.addEventListener("click", () => {
      state.moduleIndex = index;
      state.cardIndex = 0;
      state.mode = "learn";
      render();
    });
    els.moduleNav.append(button);
  });
}

function render() {
  const module = modules[state.moduleIndex];
  const card = currentCard();
  const isQuiz = state.mode === "quiz";
  document.body.dataset.mode = state.mode;
  els.xp.textContent = state.xp;
  els.streak.textContent = state.streak;
  els.caps.textContent = `${completedModuleCount()}/${modules.length}`;
  els.ball.style.transform = `translateX(${Math.min(390, state.xp * 2.1)}px) rotate(${state.xp * 7}deg)`;
  renderPlayer();
  renderBadges();
  els.coachText.textContent = module.coach;
  els.moduleTag.textContent = module.title;
  els.cardCounter.textContent = isQuiz
    ? `Question ${state.quizIndex + 1} / ${module.cards.length}`
    : `Flashcard ${state.cardIndex + 1} / ${module.cards.length}`;
  els.stageLabel.textContent = isQuiz
    ? `Recall test: ${state.moduleCorrect}/${module.cards.length} right`
    : "Flashcard warm-up";
  els.cardTitle.textContent = isQuiz ? "Recall test" : card.title;
  els.cardBody.textContent = isQuiz ? "" : card.body;
  els.factList.innerHTML = isQuiz ? "" : card.facts.map((fact) => `<li>${fact}</li>`).join("");
  els.questionPanel.className = "question-panel";
  els.questionPanel.innerHTML = "";
  els.quizStatus.className = "quiz-status";
  els.quizStatus.textContent = "";
  els.quizBtn.textContent = isQuiz
    ? "Choose an answer"
    : state.cardIndex === module.cards.length - 1 ? "Start recall" : "I remember this";
  els.quizBtn.disabled = isQuiz;
  els.knowBtn.textContent = isQuiz ? "Back to card" : "Previous";
  els.knowBtn.disabled = !isQuiz && state.cardIndex === 0;
  if (isQuiz) showQuestion();
  if (els.reviewPrompt) {
    els.reviewPrompt.textContent = completedModuleCount() === modules.length
      ? "Final whistle reached. Review weak spots to keep it sharp."
      : "Study the flashcards, then win caps in the recall test.";
  }
  renderNav();
  renderChapterMap();
  save();
}

function renderPlayer() {
  const capCount = completedModuleCount();
  const level = Math.min(5, Math.floor(state.xp / 45) + capCount);
  const stage = Math.min(andyStages.length - 1, Math.floor(level / 1.25));
  els.andyArt.src = andyStages[stage];
  els.andyArt.style.setProperty("--andy-scale", String(0.86 + level * 0.035));
}

function renderBadges() {
  const capCount = completedModuleCount();
  if (capCount >= 6) {
    els.coachText.textContent = "Andrew is looking like a decorated test starter now.";
  }
}

function renderChapterMap() {
  if (!els.chapterMap) return;
  const done = Math.ceil((completedModuleCount() / modules.length) * chapterMap.length);
  els.chapterMap.innerHTML = chapterMap.map((chapter, index) =>
    `<span class="chapter-pill${index < done ? " done" : ""}">${chapter}</span>`
  ).join("");
}

function showQuestion() {
  const card = currentCard();
  els.questionPanel.className = "question-panel active";
  els.questionPanel.innerHTML = `<p class="question-text"><strong>${card.q}</strong></p>`;
  shuffleChoices(card).forEach(({ choice, originalIndex }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice;
    button.dataset.index = originalIndex;
    button.addEventListener("click", () => answer(originalIndex, button));
    els.questionPanel.append(button);
  });
}

function shuffleChoices(card) {
  const choices = card.choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  const seed = `${state.moduleIndex}-${state.quizIndex}-${state.xp}`.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return choices
    .map((item, index) => ({ item, sort: Math.sin(seed + index * 37) }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function answer(index, button) {
  const card = currentCard();
  const realCardIndex = state.quizOrder[state.quizIndex];
  const key = cardKey(state.moduleIndex, realCardIndex);
  const buttons = [...els.questionPanel.querySelectorAll(".choice")];
  buttons.forEach((choice) => {
    choice.disabled = true;
    if (Number(choice.dataset.index) === card.answer) choice.classList.add("correct");
  });
  if (index === card.answer) {
    state.xp += 12 + Math.min(state.streak, 5);
    state.streak += 1;
    state.moduleCorrect += 1;
    state.correctCards[key] = true;
    delete state.weak[key];
    els.quizStatus.className = "quiz-status active good";
    els.quizStatus.textContent = `Correct. Score: ${state.moduleCorrect}/${modules[state.moduleIndex].cards.length}.`;
    els.coachText.textContent = "Yes. Clean catch, strong carry. That rule is sticking.";
  } else {
    button.classList.add("wrong");
    state.streak = 0;
    state.weak[key] = true;
    els.quizStatus.className = "quiz-status active bad";
    els.quizStatus.textContent = `Not quite. Correct answer: ${card.choices[card.answer]}. Score: ${state.moduleCorrect}/${modules[state.moduleIndex].cards.length}.`;
    els.coachText.textContent = "Good miss to learn from. Red shows the slip; green shows the law.";
  }
  els.quizBtn.disabled = false;
  els.quizBtn.textContent = state.quizIndex === modules[state.moduleIndex].cards.length - 1 ? "Finish test" : "Next question";
  save();
  renderScoreOnly();
}

function renderScoreOnly() {
  els.xp.textContent = state.xp;
  els.streak.textContent = state.streak;
  els.caps.textContent = `${completedModuleCount()}/${modules.length}`;
  els.ball.style.transform = `translateX(${Math.min(390, state.xp * 2.1)}px) rotate(${state.xp * 7}deg)`;
  renderPlayer();
  renderBadges();
}

function nextFlashcard() {
  const module = modules[state.moduleIndex];
  if (state.cardIndex < module.cards.length - 1) {
    state.cardIndex += 1;
  } else {
    startQuiz();
  }
  render();
}

function previousFlashcard() {
  if (state.cardIndex > 0) {
    state.cardIndex -= 1;
    render();
  }
}

function startQuiz() {
  const module = modules[state.moduleIndex];
  state.mode = "quiz";
  state.quizIndex = 0;
  state.moduleCorrect = 0;
  state.quizOrder = module.cards.map((_, index) => index);
  els.coachText.textContent = "Recall round. No peeking at the cards now.";
}

function finishOrNextQuestion() {
  const module = modules[state.moduleIndex];
  if (state.quizIndex < module.cards.length - 1) {
    state.quizIndex += 1;
    render();
    return;
  }
  const passed = state.moduleCorrect === module.cards.length;
  if (passed) {
    els.coachText.textContent = "Full marks. Andrew earns another cap on the jersey.";
  } else {
    els.coachText.textContent = `Good shift: ${state.moduleCorrect}/${module.cards.length}. Review the red bits and replay this module.`;
  }
  state.mode = "learn";
  state.cardIndex = 0;
  state.quizIndex = 0;
  state.moduleCorrect = 0;
  if (passed) {
    state.moduleIndex = (state.moduleIndex + 1) % modules.length;
  }
  render();
}

function reviewWeakSpot() {
  const weakKey = Object.keys(state.weak)[0];
  if (!weakKey) {
    els.coachText.textContent = "No weak spots logged. Lovely work. Pick any module and keep the tempo high.";
    return;
  }
  const [moduleId, index] = weakKey.split(":");
  state.moduleIndex = modules.findIndex((module) => module.id === moduleId);
  state.cardIndex = Number(index);
  state.mode = "learn";
  render();
}

els.quizBtn.addEventListener("click", () => {
  if (state.mode === "quiz") finishOrNextQuestion();
  else nextFlashcard();
});

els.knowBtn.addEventListener("click", () => {
  if (state.mode === "quiz") {
    state.mode = "learn";
    render();
  } else {
    previousFlashcard();
  }
});
els.resetBtn.addEventListener("click", () => {
  localStorage.removeItem("andrew-standing-orders");
  Object.assign(state, { moduleIndex: 0, cardIndex: 0, mode: "learn", quizIndex: 0, quizOrder: [], moduleCorrect: 0, xp: 0, streak: 0, correctCards: {}, weak: {} });
  render();
});

render();

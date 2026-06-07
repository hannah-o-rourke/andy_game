const modules = [
  { id: "s01", title: "1. Introduction", coach: "Start with the why: lawful, transparent, inclusive meetings.", cards: [{ title: "Why standing orders exist", body: "Standing orders are the rulebook for local authority meetings. They turn legislation and good governance principles into a practical meeting process.", facts: ["They support open, transparent and democratically accountable decision-making.", "They help councils consider community views, diversity and lawful process.", "The appendix and guide help implementation, but are not themselves part of the Standing Orders."], q: "A councillor says standing orders are just etiquette and can be ignored if everyone is in a hurry. What is Hannah's call?", choices: ["No: they support lawful transparent decision-making", "Yes: etiquette rules are optional", "Only the Mayor has to follow them"], answer: 0 }] },
  { id: "s02", title: "2. Definitions", coach: "Definitions are the studs on the boots. Small words, big consequences.", cards: [{ title: "Key meeting vocabulary", body: "Defined terms control how the rules work. Watch especially for quorum, clear working days, public notice, public excluded, conflict of interest, and meeting.", facts: ["Clear working days exclude the meeting date and the date notice is served.", "A petition contains at least 20 signatures.", "Workshops and working parties are not meetings for these Standing Orders unless specifically included."], q: "A workshop gathers elected members to discuss important matters but makes no decisions. Do the Standing Orders automatically apply?", choices: ["No, not unless required or included", "Yes, every gathering is a meeting", "Only if the media attends"], answer: 0 }] },
  { id: "s03", title: "3. Standing Orders", coach: "This is the formal whistle: adoption, obedience and suspension.", cards: [{ title: "Adopt, obey, suspend carefully", body: "Councils and boards must adopt standing orders, members must obey them, and statutory requirements keep applying even if some standing orders are suspended.", facts: ["Adoption or amendment requires at least 75% of members present.", "All members of councils, committees and subcommittees must obey them.", "Temporary suspension must specify the standing orders and the reason."], q: "The meeting suspends standing orders. Can it also ignore statutory quorum requirements?", choices: ["No, statutory provisions still apply", "Yes, suspension removes every rule", "Only if the vote is unanimous"], answer: 0 }] },
  { id: "s04", title: "4. Meetings", coach: "Know the match clock and the opening kick-off rules.", cards: [{ title: "Holding meetings", body: "Meetings must be called and conducted under LGA 2002, LGOIMA and the Standing Orders. Duration and first-meeting rules matter.", facts: ["Meetings are held for the good government of the city, district or region.", "Meetings cannot continue beyond six hours or after 10.30pm unless resolved.", "The first meeting after an election is called by the chief executive with at least 7 days' notice, unless emergency timing applies."], q: "It is 10.30pm and business remains. What happens unless the meeting resolves to continue?", choices: ["Remaining business is adjourned or transferred", "The chair can keep going alone", "All remaining items are automatically approved"], answer: 0 }] },
  { id: "s05", title: "5. Appointments", coach: "Who wears which armband? Mayor, council and voting systems.", cards: [{ title: "Appointments and elections", body: "The Mayor can appoint the deputy Mayor, committee chairs and committee members, but council retains powers to discharge or elect where required.", facts: ["Mayoral appointments must be tabled at the first council meeting after they are made.", "Council must choose System A or System B for certain elections.", "System A seeks majority support; System B elects whoever has the most votes, with ties resolved by lot."], q: "The Mayor appoints a deputy Mayor. Can council ever remove that deputy Mayor?", choices: ["Yes, using the proper statutory process", "No, mayoral appointments can never be discharged", "Only at the next election"], answer: 0 }] },
  { id: "s06", title: "6. Delegations", coach: "Delegations are power passes. Some passes are not allowed.", cards: [{ title: "What can and cannot be delegated", body: "Delegation improves efficiency, but some core council powers cannot be delegated unless legislation clearly allows it.", facts: ["Councils must consider delegations to community boards where it helps them perform their role.", "Powers such as making rates, bylaws, borrowing outside plans, adopting plans or appointing a chief executive cannot generally be delegated.", "A lawful delegated decision cannot be rescinded by another body through Standing Orders."], q: "A committee lawfully makes a delegated decision. Can the full council simply rescind that decision under Standing Orders?", choices: ["No, not if it was lawfully made under delegation", "Yes, council can always undo it immediately", "Only if the public requests it"], answer: 0 }] },
  { id: "s07", title: "7. Committees", coach: "Build the team sheet: committees, subcommittees and joint committees.", cards: [{ title: "Committee membership and status", body: "Councils can create, reconstitute and discharge committees and subcommittees. Joint committees require agreement between the participating bodies.", facts: ["Committee members do not have to be elected members if the appointing body considers they have useful skills or knowledge.", "The Mayor is a member of every committee unless specific legislation provides otherwise.", "A decision is not invalid just because a vacancy or appointment defect is later found."], q: "A non-elected expert is appointed to a committee because of specialist knowledge. Is that allowed?", choices: ["Yes, if the council or committee considers the expertise useful", "No, only elected members may sit on committees", "Only if they chair the committee"], answer: 0 }] },
  { id: "s08", title: "8. Notice", coach: "Notice rules are the lineout call. Miss them and the set-piece wobbles.", cards: [{ title: "Ordinary, extraordinary and emergency notice", body: "Different meeting types have different notice routes. Public and member notice are both important.", facts: ["Ordinary meetings normally require written member notice at least 14 days before the meeting.", "Emergency meetings may be called by the Mayor, or chief executive if the Mayor is unavailable, with at least 24 hours' reasonable notice.", "Extraordinary meeting resolutions must be publicly notified unless exceptions apply."], q: "Urgent business cannot wait for extraordinary meeting notice and the Mayor is available. Who can call the emergency meeting?", choices: ["The Mayor", "Any member of the public", "Only one third of councillors"], answer: 0 }] },
  { id: "s09", title: "9. Agenda", coach: "The agenda is the playbook. No ambush tries.", cards: [{ title: "Agenda preparation and public access", body: "The chief executive prepares the agenda on behalf of the chairperson. Public availability protects transparency.", facts: ["The public may inspect agendas and reports without a fee at least 2 working days before a meeting.", "Agenda recommendations are not final until resolved by the meeting.", "Major non-agenda items need a resolution and chair explanation about why the item was not listed and cannot wait."], q: "A major item is not on the agenda but cannot be delayed. What must happen before it is dealt with?", choices: ["The meeting resolves and the chair explains why it was omitted and cannot wait", "The chair quietly adds it after public forum", "Members vote by email afterwards"], answer: 0 }] },
  { id: "s10", title: "10. Opening", coach: "Open and close cleanly. The meeting needs a proper start and finish.", cards: [{ title: "Opening and closing", body: "Opening and closing provisions set the formal frame for the meeting, including practices such as karakia where used.", facts: ["The meeting starts under the chair's authority and follows the order of business.", "Opening and closing practices should fit the authority's adopted procedure.", "The chair manages the transition into business and the close of proceedings."], q: "Why does the opening matter in governance practice?", choices: ["It formally frames the meeting and the chair's control of business", "It lets members vote before agenda items", "It replaces quorum requirements"], answer: 0 }] },
  { id: "s11", title: "11. Quorum", coach: "No quorum, no scrum. Count who is physically there.", cards: [{ title: "Quorum and lapsed meetings", body: "A valid meeting needs quorum. For quorum, being physically present matters.", facts: ["Council quorum is half the members if even, or a majority if odd.", "Members attending by audio or audiovisual link do not count as present for quorum.", "If a quorum is not present, the meeting lapses and business is dealt with later."], q: "A member joins by video link and the room is one person short of quorum. Can the meeting proceed?", choices: ["No, remote attendance does not count for quorum", "Yes, video attendance always counts", "Only if the member speaks first"], answer: 0 }] },
  { id: "s12", title: "12. Public Access", coach: "Default setting: open to the public.", cards: [{ title: "Open meetings and recording", body: "Meetings are open to the public unless lawful grounds exist to exclude them. Recording is allowed if it does not disrupt proceedings.", facts: ["The public may be removed for disorder or misconduct.", "Council may record meetings.", "The public may record meetings if doing so does not interrupt or disrupt the meeting."], q: "Someone in the public gallery records quietly on a phone and does not disrupt. What is the best response?", choices: ["Allow it", "Remove them immediately", "Stop the meeting until they delete it"], answer: 0 }] },
  { id: "s13", title: "13. Attendance", coach: "Who is in the room, who is remote, who is absent?", cards: [{ title: "Attendance, links and apologies", body: "Attendance rules cover rights to attend, apologies, leave of absence and remote participation.", facts: ["Members have a right to attend meetings unless lawfully excluded.", "Remote members do not count for quorum but may vote if conditions are met.", "Link failure can affect participation and must be handled under the rules."], q: "A remote member's link fails during debate. What should the chair focus on?", choices: ["Managing participation under the link-failure and attendance rules", "Counting them for quorum anyway", "Letting them vote by text message"], answer: 0 }] },
  { id: "s14", title: "14. Chair Role", coach: "Hannah's whistle lesson: the chair keeps the game playable.", cards: [{ title: "Chairperson authority", body: "The chairperson keeps order, prioritises speakers and rules on interpretation or application of standing orders.", facts: ["Members address the chairperson, not each other.", "The chairperson's rulings are final where the Standing Orders say so.", "When the chairperson stands, members must sit and be silent."], q: "A member keeps speaking after the chair stands. What should happen?", choices: ["The member must sit down and be silent", "The member may finish their speech", "The public decides whether they continue"], answer: 0 }] },
  { id: "s15", title: "15. Public Forums", coach: "Public input is valuable, but it is not a shortcut to decisions.", cards: [{ title: "Public forum limits", body: "Public forums allow public input, usually near the start of a meeting, but they have limits.", facts: ["A speaker may speak for up to 5 minutes unless the meeting resolves otherwise.", "Public forum time is normally limited to 30 minutes.", "No resolutions may be made on public forum matters unless the matter is already on the agenda."], q: "A resident raises a brand-new issue in public forum and asks council to decide immediately. What is correct?", choices: ["No resolution unless the matter is already on the agenda", "Vote immediately if the public applauds", "The chief executive decides alone"], answer: 0 }] },
  { id: "s16", title: "16. Deputations", coach: "Deputations are structured, not free-for-all debate.", cards: [{ title: "Deputation timing and questions", body: "Deputations let people present to the meeting by appointment, with clearer structure than open public forum.", facts: ["A deputation speaker may speak for up to 10 minutes, excluding questions.", "Questions are for information or clarification.", "Deputation restrictions prevent debate from becoming disorderly or outside scope."], q: "Members begin debating with a deputation speaker instead of asking clarifying questions. What should the chair do?", choices: ["Bring it back to questions for clarification", "Allow a full debate with the speaker", "Put the deputation to a public vote"], answer: 0 }] },
  { id: "s17", title: "17. Petitions", coach: "A petition is a formal pass from the public.", cards: [{ title: "Petition basics", body: "Petitions are formal requests to the local authority and can be presented by a petitioner or a member.", facts: ["A petition must contain at least 20 signatures.", "A petition may be presented by the petitioner.", "A member may present a petition on behalf of petitioners."], q: "A document has 14 signatures and asks council to act. Is it a petition under these definitions?", choices: ["No, it needs at least 20 signatures", "Yes, any signed request is a petition", "Only if the Mayor signs it too"], answer: 0 }] },
  { id: "s18", title: "18. Public Excluded", coach: "Going confidential needs lawful grounds, not vibes.", cards: [{ title: "Excluding the public", body: "Public excluded sessions must use proper motions, reasons and LGOIMA grounds. People may remain only where justified.", facts: ["The motion must identify the general subject, reason and grounds for exclusion.", "Specified people may remain because their knowledge will assist the matter.", "Release of public excluded information must be handled properly."], q: "Council wants to discuss commercially sensitive information in public excluded. What must the resolution include?", choices: ["The subject, reason and specific legal grounds", "Only the words 'commercially sensitive'", "Nothing if members agree informally"], answer: 0 }] },
  { id: "s19", title: "19. Voting", coach: "Scoreboard time: votes must be open and counted.", cards: [{ title: "Open voting and divisions", body: "Decisions are made by majority vote of members present and voting unless legislation says otherwise.", facts: ["Voting is open and transparent. Secret ballots are excluded.", "The result must be announced immediately.", "The chairperson does not have a casting vote."], q: "The vote is tied. Does the chairperson break the tie with a casting vote?", choices: ["No, the chair has no casting vote", "Yes, always", "Only in public excluded"], answer: 0 }] },
  { id: "s20", title: "20. Conduct", coach: "Governance officer radar: order, respect, conflicts.", cards: [{ title: "Conduct and conflicts", body: "Members must behave consistently with the Code of Conduct and manage financial and non-financial conflicts.", facts: ["The chair may call members to order.", "Disorderly conduct can lead to removal.", "Conflicts include pecuniary interests and non-financial issues such as bias or predetermination."], q: "A member has already publicly committed to a fixed outcome before hearing evidence. What risk is most relevant?", choices: ["A non-financial conflict such as predetermination", "A quorum failure", "A secret ballot problem"], answer: 0 }] },
  { id: "s21", title: "21. Debate", coach: "Keep debate on the ball: relevance, turns and right of reply.", cards: [{ title: "General debate rules", body: "Debate must stay relevant to the matter before the meeting and follow speaking limits.", facts: ["Members must speak strictly to the motion or amendment.", "The mover of an original motion has a right of reply.", "A closure motion is accepted only where the rules allow."], q: "A member spends their speech attacking an old unrelated decision. What is the chair's best ruling?", choices: ["Bring them back to the motion or amendment", "Let it run because they have the floor", "Treat it as a division"], answer: 0 }] },
  { id: "s22", title: "22. Speaking Options", coach: "Option A, B or C changes who can move amendments.", cards: [{ title: "Options for speaking and moving", body: "The Standing Orders include options A, B and C for speaking and moving motions and amendments.", facts: ["Option A is the most restrictive about who can move or second amendments.", "Option B allows any member except the mover and seconder of the motion to move or second an amendment, with limits after lost amendments.", "Option C is the most flexible, allowing any member to move or second amendments."], q: "If council wants the most flexible amendment process, which option fits best?", choices: ["Option C", "Option A", "No option is needed"], answer: 0 }] },
  { id: "s23", title: "23. Motions", coach: "Motions need shape: moved, seconded, relevant.", cards: [{ title: "Motions and amendments", body: "Motions and amendments must be seconded, may be required in writing, and amendments must be relevant and not direct negatives.", facts: ["A motion should be moved and seconded before debate but after questions.", "Unseconded motions and amendments are not valid and should not be entered in the minutes.", "A motion expressed in parts can be decided part by part."], q: "An amendment simply says 'do not adopt the motion'. What is the problem?", choices: ["It is a direct negative, not a valid amendment", "It needs no seconder", "It automatically becomes the motion"], answer: 0 }] },
  { id: "s24", title: "24. Revocation", coach: "Changing a past decision needs safeguards.", cards: [{ title: "Revoking or altering resolutions", body: "Members can seek revocation or alteration of previous resolutions, but notice and decision-making information are required.", facts: ["Notice must be given to the chief executive at least 5 working days before the meeting.", "Only the body responsible for a delegated decision can revoke or alter it.", "At the same meeting, fresh facts or information and 75% support are required."], q: "A member wants to revoke a previous resolution at next week's meeting. What must they normally give?", choices: ["A notice of motion to the chief executive at least 5 working days before", "A verbal request during apologies", "A social media post"], answer: 0 }] },
  { id: "s25", title: "25. Procedural Motions", coach: "Procedural motions control the game clock.", cards: [{ title: "Close, adjourn, refer", body: "Procedural motions to close or adjourn debate take precedence and are voted on immediately if seconded.", facts: ["They are taken immediately without discussion or debate.", "They generally require a majority of members present and voting.", "If lost, another close/adjourn procedural motion cannot be moved for 15 minutes."], q: "A closure motion is seconded. What happens next?", choices: ["The chair puts it to the vote immediately without debate", "Members debate whether to debate it", "It waits until general business"], answer: 0 }] },
  { id: "s26", title: "26. Points of Order", coach: "Point of order is a procedure whistle, not disagreement.", cards: [{ title: "Using points of order", body: "A point of order is raised when a member believes Standing Orders have been breached.", facts: ["The member must state the subject precisely.", "Contradicting a previous speaker is not a point of order.", "The chairperson's ruling on a point of order is final."], q: "A member says 'point of order' only because they disagree with another member's opinion. Valid?", choices: ["No, contradiction is not a point of order", "Yes, disagreement is always a point of order", "Only during public forum"], answer: 0 }] },
  { id: "s27", title: "27. Notices of Motion", coach: "Advance motions need clean drafting and proper scope.", cards: [{ title: "Notice requirements", body: "Notices of motion must be in writing, signed, and delivered to the chief executive in time for the agenda process.", facts: ["The notice must state the meeting where it will be considered.", "The chair may direct refusal for offensive, ambiguous, out-of-scope or already-covered matters.", "A notice cannot proceed without the mover unless another member is authorised in writing."], q: "A notice of motion is offensive and outside the authority's functions. What can happen?", choices: ["The chair may direct the chief executive to refuse it", "It must be debated unchanged", "It becomes public forum"], answer: 0 }] },
  { id: "s28", title: "28. Minutes", coach: "Minutes are the official match report.", cards: [{ title: "What minutes record", body: "Minutes are evidence of proceedings once confirmed and must capture key meeting facts and decisions.", facts: ["The chief executive keeps the minutes.", "Minutes record attendance, apologies, quorum failures, external speakers, items, resolutions, movers, seconders, divisions and public excluded permissions.", "At confirmation, discussion is limited to correctness."], q: "At the next meeting, a member wants to re-debate the decision while confirming minutes. What is allowed?", choices: ["Only discussion about whether the minutes are correct", "A full re-debate of the decision", "A new vote without notice"], answer: 0 }] },
  { id: "s29", title: "29. Records", coach: "Good records make governance defensible later.", cards: [{ title: "Keeping and accessing records", body: "The authority must create and maintain full and accurate records in accessible form, including public excluded records.", facts: ["Records must be maintained in line with prudent business practice.", "Electronic minute repositories must preserve integrity and accessibility.", "Requests for public excluded minutes are treated as official information requests under LGOIMA."], q: "Someone requests minutes from a public excluded item. How should the chief executive treat it?", choices: ["As an official information request under LGOIMA", "Reject it automatically forever", "Release it without considering withholding grounds"], answer: 0 }] }
];

modules.forEach((module) => {
  if (module.cards.length !== 1) return;
  const source = module.cards[0];
  module.cards = [
    {
      title: source.title,
      body: source.body,
      facts: source.facts,
      q: source.q,
      choices: source.choices,
      answer: source.answer
    },
    ...source.facts.map((fact, index) => ({
      title: `Key rule ${index + 1}`,
      body: fact,
      facts: ["Read it once, then say it back without looking.", "In the recall test, choose the option that preserves lawful meeting process."],
      q: `Which statement best matches ${module.title}?`,
      choices: [
        fact,
        "The chair or members can ignore this if the meeting is busy.",
        "This only matters if the public is excluded."
      ],
      answer: 0
    }))
  ];
});

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
  "assets/andy-stage-0.png",
  "assets/andy-stage-1.png",
  "assets/andy-stage-2.png",
  "assets/andy-stage-3.png",
  "assets/andy-stage-4.png",
  "assets/andy-stage-5.png",
  "assets/andy-stage-6.png"
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
  const maxStage = andyStages.length - 1;
  const maxCaps = Math.max(1, modules.length - 1);
  const stage = Math.min(maxStage, Math.floor((capCount / maxCaps) * maxStage));
  els.andyArt.src = andyStages[stage];
  els.andyArt.style.setProperty("--andy-scale", String(0.9 + stage * 0.025));
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

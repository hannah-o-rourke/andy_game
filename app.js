const modules = [
  { id: "s01", title: "1. Introduction", coach: "Start with the why: lawful, transparent, inclusive meetings.", cards: [{ title: "Why standing orders exist", body: "Standing orders are the rulebook for local authority meetings. They turn legislation and good governance principles into a practical meeting process.", facts: ["They support open, transparent and democratically accountable decision-making.", "They help councils consider community views, diversity and lawful process.", "The appendix and guide help implementation, but are not themselves part of the Standing Orders."], q: "What is the main purpose of standing orders?", choices: ["To support lawful, transparent and accountable meeting decisions", "To let meetings ignore process when everyone is busy", "To give only the Mayor meeting rules"], answer: 0 }] },
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

const extraCardsById = {
  s01: [{ title: "Mandatory words matter", body: "Where the Standing Orders use 'must', it usually signals a mandatory legislative requirement rather than optional guidance.", facts: ["Statutory provisions apply throughout a meeting.", "They still apply even if non-statutory standing orders are suspended.", "The guide and appendix assist use, but do not replace the Standing Orders."], q: "In the Standing Orders, what does 'must' usually indicate?", choices: ["A mandatory legislative requirement", "A suggested preference only", "A rule that applies only to workshops"], answer: 0 }],
  s02: [{ title: "Clear working days", body: "Clear working days are counted by excluding both the date notice is served and the date of the meeting.", facts: ["Weekends and specified public holidays are not working days.", "20 December to 10 January is excluded from working days.", "This matters for notices and revocation timing."], q: "When counting clear working days for notice, which days are excluded?", choices: ["The date notice is served and the date of the meeting", "Only Saturdays and Sundays", "Only the meeting day"], answer: 0 }],
  s03: [{ title: "Suspension needs a reason", body: "A member may move to suspend specified standing orders at a meeting of which they are a member, but the motion must include the reason.", facts: ["The motion must specify which standing orders are suspended.", "It must include why suspension is sought.", "Statutory requirements keep applying."], q: "A member moves to suspend 'the rules' without saying which rules or why. What is missing?", choices: ["The specified standing orders and the reason", "A public petition", "A secret ballot"], answer: 0 }],
  s04: [{ title: "Language notice", body: "Members intending to address a meeting in New Zealand Sign Language or te reo Maori, where that is not the normal meeting language, must give prior notice.", facts: ["The notice period is not less than 2 working days before the meeting.", "The same principle applies if the meeting is normally in te reo Maori and a member intends to use English.", "This helps arrange interpretation or accessibility support."], q: "How much prior notice is needed to address a normally English meeting in NZSL or te reo Maori?", choices: ["At least 2 working days", "At least 24 hours", "No notice is ever needed"], answer: 0 }],
  s05: [{ title: "System A and System B", body: "System A requires majority support from those present and voting; System B elects the person with the most votes.", facts: ["System A may require rounds of voting.", "System B has one round.", "A System B tie is resolved by lot."], q: "Under System B, how is a tie for most votes resolved?", choices: ["By lot", "By the chair's casting vote", "By starting the meeting again"], answer: 0 }],
  s06: [{ title: "Delegated powers take effect", body: "A person or body with delegated authority may exercise that authority without confirmation by the body that made the delegation.", facts: ["Delegated powers have the same effect as if the local authority exercised them.", "Delegations can have conditions or limitations.", "The delegating body can amend or remove a delegation for the future."], q: "A committee acts within a valid delegation. Does its decision usually need later council confirmation?", choices: ["No, it may act without confirmation", "Yes, every delegated decision must be confirmed", "Only if the public attended"], answer: 0 }],
  s07: [{ title: "Joint committee agreement", body: "A joint committee requires agreement between the participating authorities or public bodies, including membership and terms of reference.", facts: ["The agreement specifies how many members each party may appoint.", "It specifies chair and deputy chair appointment arrangements.", "It specifies any responsibilities delegated to the joint committee."], q: "What must a joint committee agreement specify?", choices: ["Membership, chairing arrangements, terms of reference and delegations", "Only the meeting room", "Only the name of the chairperson"], answer: 0 }],
  s08: [{ title: "Non-receipt of notice", body: "A meeting is not automatically invalid because a member did not receive notice or did not receive it in time.", facts: ["Invalidity depends on bad faith or lack of reasonable care by the person giving notice.", "The member concerned must also not have attended.", "A member may waive the need to receive notice."], q: "A member misses a notice but the notice-giver acted with reasonable care and the member attends. Is the meeting invalid for that reason?", choices: ["No", "Yes, automatically", "Only if the item is public excluded"], answer: 0 }],
  s09: [{ title: "Minor non-agenda matters", body: "Minor non-agenda matters may be discussed if the chair explains this at the start of the meeting while it is open to the public.", facts: ["No resolution may be made on the minor matter.", "No decision or recommendation may be made.", "Major non-agenda items have a stricter process."], q: "A minor non-agenda matter is discussed. What can the meeting do with it?", choices: ["Discuss only; no resolution, decision or recommendation", "Make a binding decision immediately", "Exclude the public automatically"], answer: 0 }],
  s10: [{ title: "Opening does not override law", body: "Opening and closing practices frame the meeting, but they do not replace statutory meeting requirements.", facts: ["The chair controls the flow into agenda business.", "Quorum and notice requirements still matter.", "Closing formally ends proceedings."], q: "Do opening customs override quorum or statutory requirements?", choices: ["No", "Yes", "Only at an inaugural meeting"], answer: 0 }],
  s11: [{ title: "Business after a lapse", body: "If a meeting lapses for lack of quorum, business is dealt with later under the rules rather than informally decided.", facts: ["The chairperson may call a meeting for urgent remaining business.", "Otherwise business may move to a later meeting.", "No valid decisions are made without quorum."], q: "A meeting lapses because quorum is not present. Can members who remain make decisions informally?", choices: ["No, no valid decisions are made without quorum", "Yes, if everyone present agrees", "Only on agenda items already printed"], answer: 0 }],
  s12: [{ title: "Removing the public", body: "The public can be removed for disorder or misconduct, but public access remains the default.", facts: ["Removal is about maintaining order.", "Public excluded business is different and needs legal grounds.", "Recording by the public is allowed if it does not disrupt proceedings."], q: "A public attendee is repeatedly disrupting the meeting. What power is relevant?", choices: ["Removal for disorder or misconduct", "A secret ballot", "Automatic public excluded session"], answer: 0 }],
  s13: [{ title: "Remote voting status", body: "A member attending by audio or audiovisual link may be able to vote, but they do not count as physically present for quorum.", facts: ["Remote attendance requires conditions to be met.", "Confidentiality must be protected.", "The chair may terminate a link in some circumstances."], q: "Which statement about remote attendance is correct?", choices: ["It may allow voting if conditions are met, but does not count for quorum", "It always counts for quorum", "It means the member cannot vote under any circumstances"], answer: 0 }],
  s14: [{ title: "Members address the chair", body: "Members address the chairperson rather than debating directly with each other. This keeps control of the meeting with the chair.", facts: ["The chair may prioritise speakers.", "The chair rules on interpretation and procedure.", "The chair's rulings are not an invitation for side debate."], q: "Who should members address during debate?", choices: ["The chairperson", "Each other directly", "Only the chief executive"], answer: 0 }],
  s15: [{ title: "Questions in public forum", body: "Questions at public forum are for clarification. Public forum is not a decision-making substitute.", facts: ["A speaker normally has up to 5 minutes.", "The overall forum is normally limited to 30 minutes.", "No resolutions are made unless the matter is already on the agenda."], q: "What is the proper purpose of questions to a public forum speaker?", choices: ["To clarify information", "To cross-examine and debate the speaker", "To amend a motion immediately"], answer: 0 }],
  s16: [{ title: "Deputation time", body: "A deputation speaker normally has up to 10 minutes, excluding questions.", facts: ["Questions should seek information or clarification.", "Restrictions keep deputations relevant and orderly.", "The chair controls questions and process."], q: "What is the normal time limit for a deputation speaker, excluding questions?", choices: ["Up to 10 minutes", "Up to 5 minutes", "No time limit"], answer: 0 }],
  s17: [{ title: "Who presents a petition", body: "A petition may be presented by the petitioner or by a member on behalf of the petitioners.", facts: ["A petition is a request to the local authority.", "It must contain at least 20 signatures.", "Presentation does not itself determine the outcome."], q: "Who may present a petition?", choices: ["The petitioner or a member", "Only the Mayor", "Only the chief executive"], answer: 0 }],
  s18: [{ title: "Specified people may remain", body: "When the public is excluded, specified people may remain only because their knowledge will assist the matter being discussed.", facts: ["The resolution should identify who may remain.", "It should explain their relevant knowledge.", "This is not a general invitation to observers."], q: "A consultant is allowed to stay in public excluded. What should the resolution explain?", choices: ["The relevant knowledge they have and why it assists the matter", "That they are popular with members", "That they arrived before the doors closed"], answer: 0 }],
  s19: [{ title: "Recording votes", body: "A division records how each member voted. Members may also request that their vote or abstention be recorded.", facts: ["Voting is open and transparent.", "The result is announced immediately.", "Secret ballots are excluded."], q: "What does calling for a division achieve?", choices: ["It records how each member voted", "It excludes the public", "It gives the chair a casting vote"], answer: 0 }],
  s20: [{ title: "Retractions and apologies", body: "The chair may require a member to withdraw offensive or malicious expressions and apologise.", facts: ["Refusal can lead to being directed to withdraw from the meeting for a specified time.", "Gross disorder may be treated as contempt if the meeting resolves so.", "Conduct powers protect members, officers and the public."], q: "A member refuses to withdraw offensive words after the chair requires it. What may happen?", choices: ["They may be directed to withdraw from the meeting for a specified time", "The words must stay unchallenged", "The meeting automatically lapses"], answer: 0 }],
  s21: [{ title: "Right of reply", body: "The mover of an original motion has a right of reply, but the mover of an amendment does not.", facts: ["After the right of reply begins, no other member may speak.", "The reply must stay confined to the motion.", "The original mover can speak to amendments without losing the right of reply."], q: "Who has the right of reply on an original motion?", choices: ["The mover of the original motion", "The mover of an amendment", "Any member who has not spoken"], answer: 0 }],
  s22: [{ title: "Option A is restrictive", body: "Under Option A, the mover and seconder of a motion cannot move or second an amendment, and only members who have not spoken to the motion may move or second an amendment.", facts: ["Options affect who can move and second amendments.", "The chosen option changes meeting tactics.", "Members need to know the adopted option before advising the chair."], q: "Which speaking option is generally the most restrictive about amendments?", choices: ["Option A", "Option C", "System B"], answer: 0 }],
  s23: [{ title: "Foreshadowed amendments", body: "A new amendment cannot be moved until the current amendment is disposed of, but members may foreshadow future amendments.", facts: ["Foreshadowing signals an intention; it does not put the amendment before the meeting yet.", "Carried amendments become part of the substantive motion.", "Lost amendments do not replace the original motion."], q: "Can a new amendment be moved while another amendment is still before the meeting?", choices: ["No, the current amendment must be disposed of first", "Yes, unlimited amendments can be live at once", "Only if it is foreshadowed on social media"], answer: 0 }],
  s24: [{ title: "Same-meeting changes", body: "A meeting may revoke or alter a resolution made earlier in the same meeting only where fresh facts or information arise and 75% of members present and voting agree.", facts: ["This is a high threshold.", "It prevents casual re-litigation of decisions.", "It is different from a later notice of motion process."], q: "What is required to revoke a resolution at the same meeting?", choices: ["Fresh facts or information and 75% support of members present and voting", "A simple majority with no new information", "The chair's casting vote"], answer: 0 }],
  s25: [{ title: "Fifteen minute gap", body: "If a procedural motion to close or adjourn debate is lost, no member may move another such motion for 15 minutes.", facts: ["The rule prevents repeated interruption.", "Procedural motions cannot interrupt a member who is speaking.", "Points of order still take precedence."], q: "A closure motion is lost. When can another close or adjourn debate procedural motion be moved?", choices: ["After 15 minutes", "Immediately", "Only at the next meeting"], answer: 0 }],
  s26: [{ title: "Point of order subjects", body: "Points of order can cover disorder, language, irrelevance, misrepresentation, breach of standing order, and recording of words.", facts: ["The subject must be stated precisely.", "The chair may decide immediately or hear argument first.", "A point of order during a division needs the chair's permission."], q: "Which is a valid subject for a point of order?", choices: ["Irrelevance to the matter before the meeting", "A member simply holding a different opinion", "A request to skip the agenda permanently"], answer: 0 }],
  s27: [{ title: "Mover absence", body: "A notice of motion may not proceed in the mover's absence unless another member is authorised in writing by the mover.", facts: ["Notices must be written and signed.", "The meeting where it will be considered must be stated.", "Only the mover may alter it at the time it is moved, with majority agreement."], q: "The mover of a notice of motion is absent. When may it proceed?", choices: ["When another member is authorised in writing by the mover", "Always, because it is on the agenda", "Never, even with written authority"], answer: 0 }],
  s28: [{ title: "What minutes include", body: "Minutes capture the procedural record of the meeting, including who was present, what was considered, and what was resolved.", facts: ["They include movers and seconders.", "They include divisions and recorded votes where taken.", "They include names of people permitted to remain in public excluded."], q: "Should minutes record movers and seconders of resolutions and amendments?", choices: ["Yes", "No", "Only in public excluded"], answer: 0 }],
  s29: [{ title: "Electronic records", body: "Minutes may be kept electronically if the repository provides reliable integrity and ready accessibility for later reference.", facts: ["Records must be full and accurate.", "Records must remain usable for subsequent reference.", "Public records must be maintained in accessible form."], q: "What must an electronic minute repository provide?", choices: ["Reliable integrity and ready accessibility", "A private password known only to the chair", "Automatic deletion after confirmation"], answer: 0 }]
};

const thirdCardsById = {
  s01: [{ title: "Standing orders and trust", body: "The practical effect of standing orders is public confidence: people can see how decisions are made and whether the council followed a fair process.", facts: ["Good process protects democratic legitimacy.", "Transparency and accountability are core principles.", "Standing orders help officials and elected members apply statutory duties consistently."], q: "Why do standing orders support public confidence?", choices: ["They make decision-making transparent, accountable and consistent", "They let difficult decisions be hidden", "They remove the need for public agendas"], answer: 0 }],
  s02: [{ title: "Meeting versus workshop", body: "A meeting is convened under LGOIMA for local authority business. A workshop is a gathering for considering matters where no decisions are made.", facts: ["Standing Orders apply to meetings.", "Workshops do not automatically use Standing Orders.", "Terms of reference can specifically bring rules into scope."], q: "Which gathering is normally outside these Standing Orders?", choices: ["A workshop where no decisions are made", "An ordinary council meeting", "A committee meeting"], answer: 0 }],
  s03: [{ title: "Residential or business address", body: "Members must give the chief executive a physical residential or business address in the district or region, and may also give electronic or other addresses.", facts: ["The address must be provided within 5 working days of publication of election results.", "It is used for meeting notices and council business.", "Public access is subject to privacy law."], q: "When must members provide a physical address after election results are published?", choices: ["Within 5 working days", "Within 24 hours", "Only after the first meeting"], answer: 0 }],
  s04: [{ title: "Inaugural meeting business", body: "The first meeting after a general election includes formal declarations and the establishment of initial governance arrangements.", facts: ["The chief executive chairs until the chairperson has made and attested the declaration.", "Declarations required of the mayor and members are made.", "Standing orders may be adopted, though existing orders may continue if not amended."], q: "Who chairs the first meeting until the chairperson has made and attested the declaration?", choices: ["The chief executive or nominee", "The outgoing chairperson", "The youngest member"], answer: 0 }],
  s05: [{ title: "Mayor may appoint themselves", body: "The Mayor may appoint committee chairs and members, and may appoint themselves as a committee chair or member where the statutory power applies.", facts: ["The Mayor may establish committees of the territorial authority.", "The Mayor may appoint the deputy Mayor.", "Council retains discharge and reconstitution powers."], q: "Can the Mayor appoint themselves as chairperson of a committee under the mayoral appointment power?", choices: ["Yes", "No", "Only after a secret ballot"], answer: 0 }],
  s06: [{ title: "Limits protect core council functions", body: "Delegation rules preserve key democratic decisions for the council itself, such as rates, bylaws, major plans and chief executive appointment.", facts: ["The long-term plan, annual plan and annual report are protected decisions.", "Making a bylaw is generally not delegable.", "Delegations are for efficiency, not avoiding accountability."], q: "Which power is generally not delegable?", choices: ["The power to make a rate", "The power to request a staff report", "The power to ask a clarifying question"], answer: 0 }],
  s07: [{ title: "Committees after elections", body: "Unless council resolves otherwise or legislation says otherwise, committees and subordinate bodies are discharged when members elected at a subsequent triennial election come into office.", facts: ["Some statutory bodies are exceptions.", "Council may discharge or reconstitute committees.", "A committee may discharge or reconstitute a subcommittee."], q: "What usually happens to committees after a subsequent triennial election?", choices: ["They are discharged unless council resolves otherwise or legislation provides otherwise", "They continue forever automatically", "They become workshops"], answer: 0 }],
  s08: [{ title: "Meeting cancellations", body: "The chairperson of a scheduled meeting may cancel it after consulting the chief executive if cancellation is necessary.", facts: ["Reasons include lack of business.", "Reasons include lack of quorum.", "Reasons may include other necessity."], q: "Who may cancel a scheduled meeting after consulting the chief executive?", choices: ["The chairperson of the scheduled meeting", "Any public submitter", "Any single councillor"], answer: 0 }],
  s09: [{ title: "Status of agenda", body: "Items and recommendations in an agenda are proposals for the meeting. They are not final until formally resolved.", facts: ["The meeting determines agenda recommendations by resolution.", "Items can be withdrawn by the chief executive if justified.", "Public excluded agenda items must be identified appropriately."], q: "Are recommendations final just because they are printed in the agenda?", choices: ["No, they require a formal resolution", "Yes, printing makes them final", "Only if the chair wrote them"], answer: 0 }],
  s10: [{ title: "Formal close", body: "Closing a meeting matters because it marks the end of the meeting's formal proceedings and the chair's handling of that agenda.", facts: ["Business not dealt with may need adjournment or transfer under other rules.", "Closing practices do not alter decisions already made.", "The record should show the meeting's timing."], q: "What does formally closing the meeting mark?", choices: ["The end of the formal proceedings", "Automatic approval of remaining business", "The start of public forum"], answer: 0 }],
  s11: [{ title: "Committee quorum", body: "Committee and subcommittee quorum is usually set by the local authority or committee. If not set, quorum is half if even or majority if odd.", facts: ["The same physical-presence issue matters for quorum.", "A meeting must maintain quorum to conduct business.", "Failure of quorum is recorded in minutes."], q: "If committee quorum is not otherwise set, what is the default approach?", choices: ["Half the members if even, or a majority if odd", "One member only", "Everyone on the committee"], answer: 0 }],
  s12: [{ title: "Public excluded is not removal for disorder", body: "Removing a disruptive person and excluding the public from confidential business are different tools with different tests.", facts: ["Disorder removal protects order.", "Public excluded sessions need LGOIMA grounds.", "The default remains public access."], q: "Which requires LGOIMA grounds?", choices: ["Excluding the public for confidential business", "Removing a person for disorder", "Calling the meeting to order"], answer: 0 }],
  s13: [{ title: "Leave of absence and apologies", body: "Apologies and leave of absence should be recorded. Leave is pre-approved absence for a specified period consistent with council policy if one exists.", facts: ["Apologies are recorded in minutes.", "Absent without leave can have consequences.", "Members on leave may still receive information."], q: "Should apologies and leave of absence be recorded?", choices: ["Yes", "No", "Only if the meeting is extraordinary"], answer: 0 }],
  s14: [{ title: "Chair's ruling on gaps", body: "Where standing orders make no or insufficient provision, the chairperson decides the question and the ruling is final and not open to debate.", facts: ["This prevents procedural deadlock.", "The ruling should be tied to meeting order and lawful process.", "The chair also decides points of order."], q: "Who decides where the Standing Orders make insufficient provision?", choices: ["The chairperson", "The loudest member", "The public gallery"], answer: 0 }],
  s15: [{ title: "No resolutions from public forum", body: "Public forum input may inform future work, but the meeting cannot normally resolve on new public forum matters.", facts: ["The matter must already be on the agenda for a resolution.", "Questions should seek clarification.", "Time limits keep the forum manageable."], q: "When may a public forum matter lead to a resolution at that meeting?", choices: ["When the matter is already on the agenda", "Whenever the speaker asks", "Only if it has 20 signatures"], answer: 0 }],
  s16: [{ title: "Deputation restrictions", body: "Deputations may be refused or controlled where content is outside scope, repetitious, offensive, or otherwise unsuitable under the meeting's rules.", facts: ["The chair controls process.", "Questions should not become debate.", "Deputations are by appointment."], q: "What should questions to a deputation focus on?", choices: ["Information or clarification", "Debating the speaker", "Voting on the speaker"], answer: 0 }],
  s17: [{ title: "Petition effect", body: "Receiving a petition does not automatically grant the request. It brings the request formally before the local authority process.", facts: ["A petition must contain at least 20 signatures.", "It is a request, not a decision.", "The meeting may need a report or later decision-making process."], q: "Does presenting a valid petition automatically grant what it requests?", choices: ["No", "Yes", "Only if all signatures are local"], answer: 0 }],
  s18: [{ title: "Grounds are specific", body: "Common public excluded grounds include privacy, commercial prejudice, legal privilege, safety, negotiations, and preventing improper gain.", facts: ["Grounds must be tied to the actual item.", "Public interest may outweigh some withholding interests.", "The resolution should not be vague."], q: "Which is a recognised reason that may support excluding the public?", choices: ["Protecting legal professional privilege", "Avoiding ordinary political embarrassment", "Making the meeting shorter"], answer: 0 }],
  s19: [{ title: "Abstentions", body: "Members may abstain, and a member may request their vote or abstention be recorded.", facts: ["Decisions are by members present and voting.", "Abstentions are not votes for or against.", "The minutes can record requested votes or abstentions."], q: "May a member request that their abstention be recorded?", choices: ["Yes", "No", "Only in committee meetings"], answer: 0 }],
  s20: [{ title: "Contempt", body: "Contempt includes being disobedient or disrespectful to the chair, members, officers or public.", facts: ["Gross disorder can be treated seriously.", "The meeting may resolve to find contempt.", "That resolution must be recorded in minutes."], q: "If the meeting resolves that a member's gross disorder is contempt, what must happen?", choices: ["The resolution must be recorded in the minutes", "The vote must be secret", "The meeting automatically ends"], answer: 0 }],
  s21: [{ title: "Seconder may reserve speech", body: "A seconder may second a motion or amendment without speaking and reserve the right to speak later in debate.", facts: ["This helps debate order.", "Members must still speak only to relevant matters.", "The chair may restate motions on request."], q: "Can a seconder reserve their speech?", choices: ["Yes", "No", "Only on amendments"], answer: 0 }],
  s22: [{ title: "Option B middle ground", body: "Under Option B, any member except the mover and seconder of the motion may move or second an amendment, with restrictions after lost amendments.", facts: ["Members can speak to any amendment.", "A mover or seconder of a lost amendment cannot move or second a subsequent amendment.", "A carried amendment becomes the substantive motion."], q: "Under Option B, can the mover of the original motion move an amendment to it?", choices: ["No", "Yes, always", "Only after the public forum"], answer: 0 }],
  s23: [{ title: "Withdrawal after seconding", body: "Once a motion or amendment has been seconded, the mover cannot withdraw it without the agreement of the majority present and voting.", facts: ["Mover and seconder agreement is not enough by itself after seconding.", "The chair may require motions in writing.", "Parts of a motion may be decided separately."], q: "After a motion is seconded, what is needed for the mover to withdraw it?", choices: ["Agreement of the majority present and voting", "Only the mover's wish", "Only the seconder's wish"], answer: 0 }],
  s24: [{ title: "Notice contents", body: "A revocation or alteration notice must identify the resolution, the meeting date, any replacement motion, and enough decision-making information.", facts: ["Decision-making requirements under LGA Part 6 matter.", "Significant decisions may need a report.", "Notice protects process and fairness."], q: "What must a revocation notice identify?", choices: ["The resolution, meeting date, any replacement motion and sufficient decision-making information", "Only the member's name", "Only the preferred outcome"], answer: 0 }],
  s25: [{ title: "Referral procedural motion", body: "A procedural motion may refer or refer back an item to council, a committee, or a local/community board.", facts: ["If carried, the item is considered by the receiving body at its next meeting unless resolved otherwise.", "Amendments can only be about committee, timing or reporting details where allowed.", "It is a way to redirect business rather than decide it immediately."], q: "If an item is referred to a committee, when is it normally considered?", choices: ["At the committee's next meeting unless resolved otherwise", "Never", "Immediately by the public gallery"], answer: 0 }],
  s26: [{ title: "Chair's point of order decision", body: "The chair may decide a point of order immediately or hear further argument before deciding. The ruling is final.", facts: ["The previous speaker stops while the point is handled.", "The subject must be precise.", "If the point concerns the chair's performance, another appropriate member hears it."], q: "Is the chair's ruling on a point of order open to discussion?", choices: ["No", "Yes, always", "Only if the mover objects"], answer: 0 }],
  s27: [{ title: "Repeat notices", body: "Where a notice of motion has been adopted, another notice with the same effect may not be put while the original motion stands.", facts: ["This avoids repeated attempts to relitigate the same decision.", "The chairperson forms the opinion on same effect.", "Refusal reasons should be provided."], q: "Can a notice of motion with the same effect be put while the adopted original motion still stands?", choices: ["No", "Yes, every meeting", "Only if it is shorter"], answer: 0 }],
  s28: [{ title: "Last meeting before election", body: "The chief executive and relevant chairpersons must sign, or agree to digital signature insertion for, the minutes of the last meeting before the next election.", facts: ["Confirmed minutes are prima facie evidence of proceedings.", "Minutes may be kept hard copy or electronically.", "Correctness is the only confirmation discussion topic."], q: "Who signs or agrees digital signature insertion for minutes of the last meeting before an election?", choices: ["The chief executive and relevant chairpersons", "Every member of the public", "Only the incoming Mayor"], answer: 0 }],
  s29: [{ title: "Public excluded records", body: "Requests for public excluded minutes are assessed under official information law rather than treated as permanently sealed.", facts: ["The chief executive considers the request under LGOIMA.", "Withholding grounds may still apply.", "The existence of public excluded status is not an automatic permanent refusal."], q: "Are public excluded minutes automatically sealed forever?", choices: ["No, requests are considered under LGOIMA", "Yes, always", "Only if a councillor asks"], answer: 0 }]
};

const scenarioCardsById = {
  s18: [{ title: "Scenario: public excluded support", body: "A public excluded item needs specialist advice from a consultant who wrote the report.", facts: ["The resolution can permit a specified person to remain.", "It must explain the knowledge that will assist the matter.", "The permission should be tied to the relevant item."], q: "What is the best way to let the consultant stay?", choices: ["Name them in the resolution and explain why their knowledge assists", "Let them stay without recording why", "Let every consultant stay for the whole meeting"], answer: 0 }],
  s21: [{ title: "Scenario: closure motion", body: "Debate is long, but only one member has spoken for the motion and nobody has spoken against it.", facts: ["The chair may only accept a closure motion where the rule is satisfied or considers it reasonable.", "Generally at least two speakers for and two against should have spoken.", "The chair must put closure if there are no further speakers."], q: "What should the chair consider before accepting closure?", choices: ["Whether the speaker balance/rule is satisfied or closure is reasonable", "Whether the motion is popular", "Whether the public wants to leave"], answer: 0 }],
  s23: [{ title: "Scenario: unseconded motion", body: "A member moves a motion, no one seconds it, and the member asks for it to be recorded as lost.", facts: ["Motions must be seconded.", "Unseconded motions are not valid.", "They should not be entered in the minutes."], q: "How should an unseconded motion be treated?", choices: ["It is not valid and should not be entered in the minutes", "It is recorded as lost", "It is automatically adjourned"], answer: 0 }],
  s24: [{ title: "Scenario: delegated revocation", body: "Council dislikes a decision lawfully made by a subcommittee under delegation and wants to revoke that specific decision itself.", facts: ["Only the body responsible for the delegated decision may revoke or alter it.", "Council may change delegations for the future.", "Standing Orders do not allow unlawful rescission of delegated decisions."], q: "Who may revoke the lawfully delegated subcommittee decision?", choices: ["The subcommittee/body responsible for that decision", "The public forum", "Any single councillor"], answer: 0 }],
  s25: [{ title: "Scenario: repeated adjournment", body: "A procedural motion to adjourn debate has just been lost. Another member immediately tries the same tactic.", facts: ["A further close/adjourn debate procedural motion cannot be moved for 15 minutes.", "This prevents process from being used to stall debate.", "The mover must not interrupt a speaker."], q: "What should happen to the immediate second adjournment attempt?", choices: ["It should wait because 15 minutes have not passed", "It must be voted on immediately", "It automatically carries"], answer: 0 }],
  s26: [{ title: "Scenario: point during division", body: "A member tries to raise a point of order while a division is underway.", facts: ["A point of order during a division needs the chairperson's permission.", "Otherwise points of order generally take precedence.", "The chair's ruling is final."], q: "Can a point of order be raised during a division without the chair's permission?", choices: ["No", "Yes, always", "Only by the mover"], answer: 0 }],
  s27: [{ title: "Scenario: absent mover", body: "A notice of motion is on the agenda, but the mover is absent and has not authorised anyone in writing.", facts: ["The notice may not proceed in the mover's absence without written authority.", "Another member can move it only if authorised in writing by the mover.", "This protects the integrity of notices."], q: "Can the notice proceed?", choices: ["No, not without written authority from the mover", "Yes, because it is printed", "Only if the chair reads it"], answer: 0 }],
  s28: [{ title: "Scenario: correcting minutes", body: "At confirmation, a member says the minutes omit a division and asks for the record to be corrected.", facts: ["Correctness is the proper topic for confirmation.", "Divisions and vote records should be included where taken.", "This is different from re-debating the substantive decision."], q: "Is it appropriate to discuss whether the minutes omitted a division?", choices: ["Yes, that is about correctness", "No, minutes can never be corrected", "Only in public excluded"], answer: 0 }],
  s29: [{ title: "Scenario: old records", body: "A staff member wants to store minutes in a system where later users cannot reliably check whether records were altered.", facts: ["Electronic records need reliable integrity.", "They must be readily accessible for later reference.", "Public records must be maintained properly."], q: "What is the issue with that storage system?", choices: ["It may not assure integrity of the records", "It is too transparent", "It creates too many public forums"], answer: 0 }]
};

modules.forEach((module) => {
  module.cards.push(...(extraCardsById[module.id] || []));
  module.cards.push(...(thirdCardsById[module.id] || []));
  module.cards.push(...(scenarioCardsById[module.id] || []));
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

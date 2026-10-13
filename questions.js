window.HANDOFF_QUESTIONS = [
  {
    "id": "H-EDITION",
    "title": "Which editions did you actually play?",
    "question": "Which games did you play: Windows Thunderbolt, Mac Thunderbolt, Mac Firestorm, or more than one? Roughly when, and do you remember a version, computer, manual, or whether the character was newly created or imported?",
    "why": "Edition and character origin help us interpret every later recollection without treating Windows and Mac behavior as interchangeable.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-QUIET-REGIONS",
    "title": "The quiet early Firestorm regions",
    "question": "You remember roughly the first twelve Firestorm regions being quiet. Was this a new character or a Thunderbolt character carried forward? What difficulty, named region or warren depth do you remember? Were enemies absent immediately, or did they appear after waiting or returning?",
    "why": "Thunderbolt startup has a populated reference route. A release-wide twelve-empty-regions rule for Firestorm remains unproved; your context can narrow the comparison.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-FACILITIES",
    "title": "A visit to a facility",
    "question": "Pick one facility you remember: Bank, AutoDoc, Library, shop, or another. What did you do, what did it cost or require, and what changed afterward? Describe one visit from arrival to exit; approximate messages are welcome.",
    "why": "Claude C6 still rejects facility exits and facility-item interactions. Earlier Firestorm economy tests have narrower scopes than a complete visit.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-CONTAINERS",
    "title": "Taking something from a container",
    "question": "What happened when you opened or took items from a locker, crate, bag or other container? Did you choose an item or quantity, get everything, leave items behind, or see a trap warning? Which game?",
    "why": "Physical Firestorm acquisition is reviewed; Claude Thunderbolt C6 covers staged GET cases but still rejects GET from containers.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-BLAST",
    "title": "A failed disarm or explosion",
    "question": "Do you remember a failed disarm, landmine, or exploding container? What triggered it, what messages or sounds appeared, and did it damage walls, floors, nearby creatures or carried equipment? Describe one example rather than estimating a formula.",
    "why": "Successful natural Firestorm disarming is recovered. Natural failure/world-generation closure and Thunderbolt explosions remain open.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-TRAVEL",
    "title": "An unusual stair, hole or teleport trip",
    "question": "Do you remember collapsing stairs, falling through a hole, a drain pipe, a teleport square, or an android moving you? What happened to your position, injuries, equipment and the route back? Which game?",
    "why": "Claude C4/C6 cover declared travel cases. A concrete remembered exception can guide the remaining rope, ladder, explosive and arrival branches.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-CREATURE",
    "title": "One distinctive creature encounter",
    "question": "Pick a creature you remember. Did it chase, flee, steal, collect objects, fire at you, use doors, take stairs, or fight another creature? Describe what happened before and after, including any text or sound. If it seemed to mutter to itself, which creature was it, how far away was it, and what had you just done?",
    "why": "Claude has broad staged creature-call comparisons, with presentation masks. Your example helps prioritize whole player-facing encounters and sound checks.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-NAMES",
    "title": "Unidentified items and exact wording",
    "question": "Do you remember an item label before and after identification, especially a pill, badge, keycard, liquid or weapon mark? Was the appearance-to-effect connection stable between new characters? Which game?",
    "why": "Claude C6 reports naming comparisons. Recollections can check the displayed vocabulary and per-character identification experience without assigning an effect automatically.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-SAVES",
    "title": "What an original save restored",
    "question": "When you quit and reopened an original save, what stayed the same: location, creatures, floor items, equipment, messages or temporary effects? Do you remember a save failure, missing character, or a specific example?",
    "why": "Modern lossless runtime saves and original emulator Save/reopen are separate claims. Neither establishes complete original save compatibility across editions.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-ENDGAME",
    "title": "Leaving the facility and finishing a campaign",
    "question": "How did you leave the starting facility, reach a mission objective, finish a campaign, or continue into Firestorm? Describe the prompts, required objects, rewards and what happened to the character. Partial memories are useful.",
    "why": "Claude C6 still lists facility exit and the jaunt trigger as rejected. Whole campaigns and imported-character continuity remain open.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-PLAY-CHECK",
    "title": "Your original-game launcher check",
    "question": "If you have already tried Claude’s original-game launchers, which game launched successfully? Could you move, use inventory, save, quit and reopen? Describe any input or display problem and when it happened. If you have not tried them, say so; a new playthrough is optional.",
    "why": "Claude reports both launchers reaching Region 1 and reopening saves. A user play-check is still pending, especially given the earlier emulator input difficulty.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "H-PAPERWORK",
    "title": "What evidence can we locate later?",
    "question": "What manuals, charts, screenshots, old saves, notes, recordings or other-machine files do you already have? Give names or locations you know and which edition they belong to. Also name the three behaviors you most want the faithful remake to preserve.",
    "why": "An inventory and priorities can be prepared while credits refresh. You do not need to upload or replay anything now.",
    "evidencePrompt": "Answer from memory if convenient. Include the game/platform, approximate sequence, and how certain you are. “Unsure” and “never encountered it” are useful answers.",
    "existingKnowledge": "This is a user observation to compare later with edition-specific evidence. Claude’s retained checkpoint is dated 10 October. The 12 October closure review distinguishes rerun checks from remaining unsupported behaviors.",
    "category": "Credit-wait Q&A",
    "pictures": []
  },
  {
    "id": "V1",
    "title": "Green expanding ring",
    "question": "Do you remember an expanding green ring? Which item, action or event produced it, and did it appear around you, a target or the ground?",
    "why": "Connect the animation to the event that should display it.",
    "evidencePrompt": "Name the game edition and the action just before it appears. A short clip or remembered message helps.",
    "existingKnowledge": "The original artwork is available; its gameplay event is not yet identified.",
    "category": "Artwork",
    "pictures": [
      11008
    ]
  },
  {
    "id": "V2",
    "title": "Mechanical companions",
    "question": "Which mechanical companions do you remember—utility bots, support androids or mechs? What distinguished their appearance and behavior? If you have the local gallery open, identify PICT 6068 cells 4, 6 or 8.",
    "why": "Separate similar mechanical figures before assigning companion behavior.",
    "evidencePrompt": "Count cells from left to right, including blank cells; answer only those you recognize.",
    "existingKnowledge": "A player remembers several mechanical companions. Code checks establish selected android charging cases, not the identity or following rules of every figure.",
    "category": "Artwork",
    "pictures": [
      6068
    ]
  },
  {
    "id": "V3",
    "title": "Two green creature groups",
    "question": "Do you remember two different groups of green creatures, or a creature whose appearance changed state? Describe their names and behavior. With the local gallery open, compare PICT 16048 cells 1–4 with 5–8.",
    "why": "Distinguish creature identity from animation.",
    "evidencePrompt": "Give the game edition, cell numbers and any remembered on-screen name.",
    "existingKnowledge": "The two groups are visible in original artwork; their names and relationship remain unconfirmed.",
    "category": "Artwork",
    "pictures": [
      16048
    ]
  },
  {
    "id": "V4",
    "title": "Yellow and red striped figures",
    "question": "Do you remember yellow and red striped creatures? Were they different species, color variants or one creature changing state? If using the local gallery, compare PICT 16348 cells 1–4 with 5–8.",
    "why": "Avoid treating a palette difference as proof of a separate creature.",
    "evidencePrompt": "Name either group you recognize and describe what changed immediately before a color change, if observed.",
    "existingKnowledge": "The color groups are visible; their gameplay meaning remains unconfirmed.",
    "category": "Artwork",
    "pictures": [
      16348
    ]
  },
  {
    "id": "V5",
    "title": "Player poses",
    "question": "What made the player sprite change pose—turning, walking, waiting, attacking or using an item? Describe one example. If using the local gallery, point to a pose in PICT 8008 or 8009.",
    "why": "Map remaining poses to the right player actions.",
    "evidencePrompt": "Use the picture ID and cell number, counting from the left including blanks. Partial answers are welcome.",
    "existingKnowledge": "Earlier descriptions of webbing and weapon poses are recorded. This question concerns these two particular strips.",
    "category": "Artwork",
    "pictures": [
      8008,
      8009
    ]
  },
  {
    "id": "V6",
    "title": "Eight small creatures",
    "question": "Which small creatures do you remember clearly, and what did they look like or do? If using the local gallery, name any PICT 6008 cells, especially 4 or 5.",
    "why": "Complete creature labels without repeating the checked inventory names.",
    "evidencePrompt": "Count cells from the left including blanks; include the edition if you remember it.",
    "existingKnowledge": "These creature identities remain open; previously checked inventory labels are a separate set.",
    "category": "Artwork",
    "pictures": [
      6008
    ]
  },
  {
    "id": "Q1",
    "title": "A useful manual or help entry",
    "question": "Do you know a manual section or in-game Help entry that explains one of the unanswered mechanics here?",
    "why": "Use original documentation before asking players to repeat experiments.",
    "evidencePrompt": "Give the game edition/platform, section title and printed page if visible, or exact Help/menu text. A short relevant excerpt is enough; no full manual needed.",
    "existingKnowledge": "Both supplied guides already explain basic Search, Inspect, Disable and AutoSearch. The remaining questions concern particular outcomes or exceptions.",
    "category": "Manual or help",
    "pictures": []
  },
  {
    "id": "Q2",
    "title": "What switches AutoSearch off?",
    "question": "Which exact event switches AutoSearch off: an attack attempt, taking damage, another command, or something else?",
    "why": "Recover the cancellation rule separately from search timing.",
    "evidencePrompt": "If you have an example, report the command/event, whether HP changed, and the exact message or option indicator before and after.",
    "existingKnowledge": "Both original guides say AutoSearch adds one extra action to each movement step. A player recalls being hit switches it off; that trigger has not been established for every edition.",
    "category": "Commands",
    "pictures": []
  },
  {
    "id": "Q3",
    "title": "A failed container disarm",
    "question": "After a failed disarm of a crate or locker, what happens to the container, its contents and the trap?",
    "why": "Separate container failure outcomes from the already checked floor-trap example.",
    "evidencePrompt": "Name the container and tool, whether it was carried or on the floor, the message, HP change and whether the container could still be opened.",
    "existingKnowledge": "Both manuals distinguish disabling a trapped location from a trapped inventory item. A player recalls shocks or explosions. The checked gravity-well floor case does not establish container outcomes.",
    "category": "Traps and containers",
    "pictures": []
  },
  {
    "id": "Q4",
    "title": "Disarming beneath your feet",
    "question": "When disabling a trap on your own square, have you seen a different warning, restriction or result from an adjacent attempt?",
    "why": "Locate a possible position-specific rule.",
    "evidencePrompt": "Give the exact prompt/message, trap name, tool and whether the command targeted HERE or a direction. An existing example is sufficient.",
    "existingKnowledge": "A player recalls disarming while standing on a trap may be harder. Manuals describe adjacent locations and carried items; they do not settle this particular same-square case.",
    "category": "Traps and containers",
    "pictures": []
  },
  {
    "id": "Q5",
    "title": "Floating versus a gravity well",
    "question": "Have you observed a floating pill or active gravbelt fail against a gravity well, or let you escape one?",
    "why": "Distinguish preventing capture from escaping after capture, and identify any strength rule.",
    "evidencePrompt": "Give the edition, exact trap/device name, belt charge and worn/active state, load if known, and whether floating began before or after entering.",
    "existingKnowledge": "A player remembers stronger lift overcoming some wells. Checked normal-walking gravity-well cases exclude floating and active belts, so they cannot settle this.",
    "category": "Movement and terrain",
    "pictures": []
  },
  {
    "id": "Q6",
    "title": "Gravity-well implosion and falling",
    "question": "In an example where a gravity well imploded, did a hole remain, and did the character actually change area?",
    "why": "Separate the implosion message from floor destruction and a completed fall.",
    "evidencePrompt": "Name the Region or Warren if known, the command that caused it, and the messages and area name before/after. An explored map or existing save can help.",
    "existingKnowledge": "An original message names gravity-well implosion. A player recalls a hole and fall, and resistant Warren floors; those are separate outcomes still needing a specific example.",
    "category": "Movement and terrain",
    "pictures": []
  },
  {
    "id": "Q7",
    "title": "Radioactive terrain while floating",
    "question": "Which exact terrain near the radioactive swamp creature still harms or blocks a floating character?",
    "why": "Identify the remembered exception without guessing the terrain type.",
    "evidencePrompt": "Give its Inspect description or visible name, the floating source, and what happened on entry. Include a screenshot or map location if already available.",
    "existingKnowledge": "A player tentatively remembers a radioactive-swamp exception. No general floating-immunity rule or universal exception is established by that recollection.",
    "category": "Movement and terrain",
    "pictures": []
  },
  {
    "id": "Q8",
    "title": "What sends you back across a transport pair?",
    "question": "After arriving on the other local transport plate, does HERE send you back, or does it take a different action?",
    "why": "Determine arrival and repeat-trigger timing for paired transport.",
    "evidencePrompt": "If already near a pair, describe enter → arrive → HERE → step off, with the command and visible position after each step. State the edition and plate description.",
    "existingKnowledge": "A player remembers stable paired destinations and a next-tick return. Firestorm strings name Jaunt Plates and Floater Pads separately; appearance alone is not enough to identify the mechanism.",
    "category": "Travel",
    "pictures": []
  },
  {
    "id": "Q9",
    "title": "Who follows through an exit?",
    "question": "For one companion that followed through stairs or a Warren entrance, where was it standing and where did it appear afterward?",
    "why": "Recover transfer range and destination placement for a specific companion type.",
    "evidencePrompt": "Name the creature/unit, its friendly or command state, whether it was beside or diagonally beside you, the exit type, and whether other nearby companions stayed behind.",
    "existingKnowledge": "A player remembers nearby friendly mechanical units following some exits. Selected charging checks do not prove allegiance, following or transport-plate behavior.",
    "category": "Travel and companions",
    "pictures": []
  },
  {
    "id": "Q10",
    "title": "A Warren with two different exits",
    "question": "Can you identify a Warren whose exits connect to different Regions or to the other campaign area set?",
    "why": "Resolve a specific remembered connection without assigning Region numbers from resource IDs.",
    "evidencePrompt": "Give the edition and displayed names before entering, inside and after leaving; an explored map or save reference is useful.",
    "existingKnowledge": "A player recalls non-linear Warren links and a campaign bridge but is uncertain about its identity and edition. Region-number/resource-number equivalence is not assumed.",
    "category": "Travel",
    "pictures": []
  },
  {
    "id": "Q11",
    "title": "Bringing back a bug-eyed specimen",
    "question": "In a specimen return you remember, was the bug-eyed monster friendly, where was it standing, and what reward and return-to-play message appeared?",
    "why": "Separate specimen eligibility, reward and repeatability from ordinary mission completion.",
    "evidencePrompt": "State the edition, exact message if available, level/experience before and after, and whether this was the first specimen returned.",
    "existingKnowledge": "A player recalls an adjacent specimen yielding a level and allowing continued play. Those exact conditions are not established by the checked ordinary Thunderbolt objective-completion case.",
    "category": "Mission outcomes",
    "pictures": []
  },
  {
    "id": "Q12",
    "title": "Anything we have wrong or missed?",
    "question": "Is any description or picture label here wrong, or is there an important mechanic we have not asked about?",
    "why": "Capture corrections and new leads without forcing them into an existing question.",
    "evidencePrompt": "Name the question ID if relevant, the edition/platform, what you observed and how certain you are. Memory, manual text and recorded play are all useful when labeled.",
    "existingKnowledge": "Player memory, original documentation and checked code cases are kept distinct. Similar behavior across editions is not assumed.",
    "category": "Corrections",
    "pictures": []
  },
  {
    "id": "S1",
    "title": "A weapon firing sound",
    "question": "Which weapon goes with a sound or on-screen sound word you remember?",
    "why": "Weapon definitions contain sound IDs and written sound cues. A remembered example can help us verify the player-facing connection.",
    "evidencePrompt": "Give the weapon name, sound ID if you used the index, exact text if remembered, and game edition. Distinguish the firing sound from the impact.",
    "existingKnowledge": "",
    "category": "Sounds",
    "pictures": []
  },
  {
    "id": "S2",
    "title": "Throwing versus impact",
    "question": "When you throw an object, which sound happens on release and which happens when it hits or lands?",
    "why": "The throw command can reach several events. A single sound name does not prove which event played it.",
    "evidencePrompt": "Name the object and target, then describe the order of the sounds or messages. A miss is useful too.",
    "existingKnowledge": "",
    "category": "Sounds",
    "pictures": []
  },
  {
    "id": "S3",
    "title": "Creature voice versus death",
    "question": "Can you connect a creature to its ordinary call, attack sound or death sound?",
    "why": "Several creatures may share a sample. We need the event as well as the name.",
    "evidencePrompt": "Choose a creature and a sound from the index, describe the event, and say whether this is a recollection or a recording.",
    "existingKnowledge": "",
    "category": "Sounds",
    "pictures": []
  },
  {
    "id": "S4",
    "title": "Recognize a written sound",
    "question": "Do you remember a distinctive sound word, repeated noise or message whose cause is unclear?",
    "why": "The same event can have an audio sample and written feedback. Exact wording is a useful code-search anchor.",
    "evidencePrompt": "Approximate spelling is fine. Include what happened just before and after, and whether sound was enabled.",
    "existingKnowledge": "",
    "category": "Sounds",
    "pictures": []
  },
  {
    "id": "N-PILLS",
    "title": "Notes about pills and devices",
    "question": "Which pill or device changed your character, and what changed before and after using it? Include its name, game edition, and any message or number you remember.",
    "why": "Capture useful observations that do not fit a focused question.",
    "existingKnowledge": ""
  },
  {
    "id": "N-WEAPONS",
    "title": "Notes about weapons",
    "question": "Which weapon behavior should we recover next? Describe loading, firing, throwing or damage you remember, with the weapon name and game edition.",
    "why": "Capture useful observations that do not fit a focused question.",
    "existingKnowledge": ""
  },
  {
    "id": "N-CREATURES",
    "title": "Notes about creatures",
    "question": "Which creature behaved in a way we have not captured? Describe what it did, what you did next, and the game edition.",
    "why": "Capture useful observations that do not fit a focused question.",
    "existingKnowledge": ""
  },
  {
    "id": "N-OTHER",
    "title": "Other game observations",
    "question": "What other rule or event have we missed or described incorrectly? Give one example and the game edition.",
    "why": "Capture useful observations that do not fit a focused question.",
    "existingKnowledge": ""
  },
  {
    "id": "P-BEASTLINESS-EXACT",
    "title": "The exact Beastliness decrease",
    "question": "When you said Beastliness lowers the statistic one unit, did you mean an exact one-point change or simply that the displayed statistic goes down? If exact, was that one use or several, and do you remember the before/after values, statistic label, and game/version? Unsure is useful too.",
    "why": "The original Mac routine and preserved Windows branch support variable loss with a minimum of 1. A one-point event is compatible; an exact example helps check the remembered field and build.",
    "evidencePrompt": "A memory is enough. Please distinguish Windows Thunderbolt from Mac Firestorm; include a version only if you know it.",
    "existingKnowledge": "",
    "category": "Research follow-ups",
    "pictures": []
  },
  {
    "id": "W-GRENADE-ARMING",
    "title": "Activating a grenade and its fuse",
    "question": "What action or visible message told you a grenade was active? Did it explode when it landed, or after later turns? Which game and platform was this?",
    "why": "The verified throw tests begin with a grenade already active. The player's activation steps and multi-turn fuse still need to be connected to that path.",
    "evidencePrompt": "Approximate wording, a remembered sequence or an existing recording is welcome. There is no need to perform a new test.",
    "existingKnowledge": "",
    "category": "Research follow-ups",
    "pictures": []
  },
  {
    "id": "P-CHARISMA-RECOVERY",
    "title": "Recovery after beastliness",
    "question": "After beastliness, have you seen Charisma recover just by waiting, without glamor, a healing facility or another item? What action or message accompanied recovery?",
    "why": "Your recovery observation is recorded. Code paths that restore Charisma remain separate from natural waiting.",
    "evidencePrompt": "The game edition, displayed stat, before/after values and what you did in between would help.",
    "existingKnowledge": "",
    "category": "Research follow-ups",
    "pictures": []
  },
  {
    "id": "P-SPEED-OBSERVATION",
    "title": "A specific sped-up encounter",
    "question": "In a sped-up encounter, which creature was nearby, what was your numeric Speed, and was any speed-related equipment active?",
    "why": "A specific Dreadnought gate has now been checked. Passing that gate does not by itself guarantee movement.",
    "evidencePrompt": "A remembered sequence is welcome. Three or four turns is a useful observation, not a required exact count.",
    "existingKnowledge": "",
    "category": "Research follow-ups",
    "pictures": []
  },
  {
    "id": "P-ACUM-DISPLAY",
    "title": "Acumen property or character label?",
    "question": "Was the remembered Hacuum/acumen wording a pill property in a description, or a separate label on the character sheet?",
    "why": "The acumen property maps to Intelligence. The separately remembered display label remains uncertain.",
    "evidencePrompt": "Approximate wording and game edition are enough; no need to guess a spelling.",
    "existingKnowledge": "",
    "category": "Research follow-ups",
    "pictures": []
  },
  {
    "id": "V-BAT-RAT-POSES",
    "title": "Bat and rat poses",
    "question": "What makes a bat or rat change pose or facing during play—movement, turning, attack or something else? Describe one encounter. The local reference is PICT 16008.",
    "why": "The original selector connects each four-cell group to an ordinal but does not yet explain phase meaning or playback order.",
    "evidencePrompt": "Use cells 1–4 or5–8 and name the game edition if remembered. No new playthrough is needed.",
    "existingKnowledge": "",
    "category": "Artwork",
    "pictures": [
      16008
    ]
  },
  {
    "id": "V-TENTACULAR-MOTION",
    "title": "Tentacular creature in motion",
    "question": "What did the giant tentacular horror look like and do while moving or attacking? If using the local gallery, do PICT 16248 cells 1–4 match PICT 6068 cell 1?",
    "why": "Connect the player's recognized static creature with its separate four-cell resource without assuming animation behavior.",
    "evidencePrompt": "A partial memory is useful; distinguish the first and second groups and the edition if known.",
    "existingKnowledge": "",
    "category": "Artwork",
    "pictures": [
      16248,
      6068
    ]
  },
  {
    "id": "V-DREADNOUGHT-FIGURE",
    "title": "Which figure was the Dreadnought?",
    "question": "What did the Dreadnought from your sped-up encounter look like? Describe its shape, movement and attack. If using the local gallery, which PICT 6078 cell matches it?",
    "why": "Connect the speed observation to a visible creature, while preserving the uncertainty in remembered timing.",
    "evidencePrompt": "Count cells from the left. An approximate recognition is enough; no numeric Speed or new test is requested.",
    "existingKnowledge": "",
    "category": "Artwork",
    "pictures": [
      6078
    ]
  },
  {
    "id": "H-OVERBURDEN",
    "title": "Carrying too much on stairs",
    "question": "When carrying a heavy load, did the status window show an overburdened message before a stair fall? What were your Strength and load, and did opening the status window change anything?",
    "why": "A new isolated port recovers the flag from original instructions: load greater than nine times Strength is overburdened. The retained harness skips that routine, so original gameplay and display timing still need comparison.",
    "evidencePrompt": "Include game edition and confidence. Unsure or never encountered it is useful.",
    "category": "12 October follow-up",
    "pictures": []
  },
  {
    "id": "H-CONTAINER-STEPS",
    "title": "Opening versus taking from a container",
    "question": "When you took something from a crate, bag, locker or other container, what exact steps did you use? Did a quantity dialog appear, and did the container stay behind after you emptied it?",
    "why": "Thunderbolt floor GET is recovered in staged cases; container GET remains a separate unsupported call.",
    "evidencePrompt": "Include game edition and confidence. Unsure or never encountered it is useful.",
    "category": "12 October follow-up",
    "pictures": []
  },
  {
    "id": "H-JAUNT-TRIGGER",
    "title": "What triggered a jaunt?",
    "question": "What action, item or location caused a jaunt or campaign transition? What message appeared, and where did your character and possessions arrive?",
    "why": "The Thunderbolt jaunt trigger and facility exit still need source and original-execution closure.",
    "evidencePrompt": "Include game edition and confidence. Unsure or never encountered it is useful.",
    "category": "12 October follow-up",
    "pictures": []
  },
  {
    "id": "H-NEW-POPULATION",
    "title": "A new creature after waiting",
    "question": "After waiting in a quiet Firestorm area, did a bat or another creature appear? Where did it first appear relative to you, existing creatures and the globe, and did the globe dim on that turn?",
    "why": "The accepted 501-command globe route is recovered. The next population command requires complete creation, redraw, device and identity comparisons before its guard can be removed.",
    "evidencePrompt": "Include game edition and confidence. Unsure or never encountered it is useful.",
    "category": "12 October follow-up",
    "pictures": []
  }
];

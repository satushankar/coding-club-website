# Commit Quest - rules, scoring and timings

## How it runs

Six stages, opening **two per day** over four days, then the final Pull Request.
You cannot finish it in one sitting - that is deliberate. Each day gives you two
new Git commands to learn and a fresh pair of riddles.

All times IST.

| When | What opens |
|---|---|
| Fri 4 Sep, 7:00 pm | Live Git session (offline) |
| Fri 4 Sep, 8:00 pm | Setup hour - get Git, Python and GitHub working |
| **Fri 4 Sep, 9:00 pm** | **Stages 1 and 2** |
| **Sat 5 Sep, 12:00 pm** | **Stages 3 and 4** |
| **Sun 6 Sep, 12:00 pm** | **Stages 5 and 6** |
| **Mon 7 Sep, 12:00 pm** | **The final Pull Request** |
| **Mon 7 Sep, 9:00 pm** | **Hard deadline.** Nothing counts after this |
| Tue 8 Sep | Results and prizes |

Hints drop daily at 6:00 pm, aimed at whichever stage most people are stuck on.

## Getting each day's files

Your fork does not update by itself. When a stage unlocks:

**No commands:** open this repo on GitHub, go into `.quest`, click the new file,
**Download raw file**, and save it into the `.quest` folder in your own clone.

**Or with Git,** set this up once:

```
git remote add upstream https://github.com/satushankar/coding-club-website.git
```

then each day:

```
git pull upstream main
```

If the decoder says a file does not exist, that stage has not opened yet.

## Scoring

| | Points |
|---|---|
| Each stage cleared (6 stages, 10 each) | 60 |
| Final Pull Request, correct | 30 |
| Both of a day's stages cleared before midnight that day | +5 per day, up to 20 |
| Clean process | +10 |
| **Maximum** | **120** |

**The daily bonus is the real race.** Clear Saturday's two stages before
Saturday midnight and that is +5, whether you did it at 12:05 pm or 11:55 pm.
Showing up every day beats one heroic night.

**Stages 1-6** are scored from the form - submit each answer as you get it.

**The final Pull Request** is checked automatically by a bot within a couple of
minutes of you opening it.

**Clean process** is the +10 for working like someone people would want to
collaborate with: commit messages that say what you did, no committing junk
files, and an honest answer in the "which commands did you use" field. Guessing
your way through and admitting it scores better than pretending you deduced it.

## Prizes

- **Highest total score.** Top 3.
- **Furthest reached** - the best run that did not make it to the end. Getting to
  stage 4 in your first week of Git is genuinely good.
- **Best commit message or branch name.** Entirely subjective. Be funny.

Ties are broken by who opened their final Pull Request first.

## Rules

1. **Solo.** Talk about approaches, do not hand over answers.
2. **No spoilers in public.** Do not post keys, answers or the final phrase in
   any group, pull request title, or issue comment. This is the one rule that
   genuinely ruins the event for other people.
3. **Mentors help with Git, not riddles.** "How do I check out a branch" gets an
   answer. "What is the stage 4 answer" does not.
4. **One final Pull Request per person**, from your own fork, with a file named
   after your own GitHub account.
5. **Nothing counts after Mon 7 Sep, 9pm.**

## Hints

One drop a day at 6pm in the help channel, aimed at whichever stage most people
are stuck on. Using a hint costs you nothing - no penalty, no points lost. If
you are stuck, take it.

## Stuck, broken, or lost

Nothing you type can damage the original repository. The worst case is your own
fork getting into a confusing state, and the fix is always the same: delete the
folder, clone it again, keep going. You lose no progress, because your progress
is the answers you have written down, not the state of the folder.

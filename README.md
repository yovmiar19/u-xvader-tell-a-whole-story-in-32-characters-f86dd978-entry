# Tell a Whole Story in 32 Characters

One Wi-Fi network name of at most 32 characters that lands a joke and implies a whole story — my entry for the [make.fun bounty "Tell a Whole Story in 32 Characters"](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978).

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/yovmiar19/u-xvader-tell-a-whole-story-in-32-characters-f86dd978-entry/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/yovmiar19/u-xvader-tell-a-whole-story-in-32-characters-f86dd978-entry/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

## The entry

> Grandma's Ashes Were Not Sugar

A Wi-Fi name a passer-by screenshots and sends to their friends: six words, one dark little family story.

## How it works

`main.ts` (Node 22) writes exactly that line — 30 characters, inside the 1–32 gate — to `/output/entry.txt` and nothing else. It refuses to run if the line ever leaves the gate.

```sh
node main.ts
cat /output/entry.txt
```

# ATProto Starter Kit for Deno

This is a basic setup for interacting with Bluesky via the ATProtocol. It is written in TypeScript and uses the [Deno](https://deno.land/) runtime.

Deno speaks TypeScript natively (and comes with a `fetch()` implementation) so there's no need to compile your code before running it! Thanks to Deno's support for npm packages it uses [the same API wrapper](https://github.com/bluesky-social/atproto/tree/main/packages/api) that is used in Node.js and has full types support.

## Getting started

This is a GitHub template repository - click the "Use this template" button above to create a new repository based on this one.

You'll need your Bluesky handle (`*.bsky.social` or your custom domain if you've added one) and password. Alternatively you can [use an app password](https://staging.bsky.app/settings/app-passwords). I recommend this option! Just so you aren't copy pasting your password in random places.

Make a copy of the `.env.example` file and rename it to `.env`, then fill in your handle and password.

The `main.ts` file contains a basic example of how to setup and use the API client. You can run the script (with the minimal permissions set) by running `deno task run` in your terminal.

## Prior art

- [All credit goes to @aliceisjustplaying who pulled together a starter template for Node.js](https://github.com/aliceisjustplaying/atproto-starter-kit)! This is effectively a port of that to Deno.
- A shoutout to @emilyliu7321 as well for [including a tutorial with their Bluesky bot](https://github.com/emilyliu7321/bluesky-emoji-bot/blob/main/TUTORIAL.md)!

## License

MIT

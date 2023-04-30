// import dotenv
import { load } from "std/dotenv/mod.ts";
// import Bluesky agent
import api from "@atproto/api";
const { BskyAgent } = api; // RIP need module export

// load .env file
const env = await load({
  defaultsPath: null,
  restrictEnvAccessTo: ["BLUESKY_IDENTIFIER", "BLUESKY_PASSWORD"],
});

// get identifier and password from .env
const IDENTIFIER = env["BLUESKY_IDENTIFIER"];
const PASSWORD = env["BLUESKY_PASSWORD"];

// create an agent
const agent = new BskyAgent({
  service: "https://bsky.social",
});

// login to the client
await agent.login({
  identifier: IDENTIFIER,
  password: PASSWORD,
});

// it's you!
const me = await agent.getProfile({ actor: IDENTIFIER });
console.log(me.data);

// your most recent follower
const followers = await agent.getFollowers({ actor: IDENTIFIER, limit: 1 });
console.log(followers.data.followers);

// your invite codes
const codes = await agent.com.atproto.server.getAccountInviteCodes();
console.log(codes.data);

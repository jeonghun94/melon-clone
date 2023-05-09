import Song from "../models/Song";
import User from "../models/User";

const sampleSongs = [
  {
    title: "Superhero",
    artist: "Lauv",
    album: "I met you when I was 18",
    genre: "Pop",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2736ddde48f534d0404370e8791",
    releaseDate: new Date("2018-05-31"),
    streamCount: 129539361,
    lyrics: `Yeah, you can be the greatest, you can be the best
    You can be the King Kong bangin' on your chest
    You can beat the world, you can win the war
    You can talk to God, go bangin' on his door
    You can throw your hands up, you can beat the clock (yeah)
    You can move a mountain, you can break rocks
    You can be a master, don't wait for luck
    Dedicate yourself and you gon' find yourself
    Standing in the hall of fame (yeah)
    And the world's gonna know your name (yeah)
    'Cause you burn with the brightest flame (yeah)
    And the world's gonna know your name (yeah)
    And you'll be on the walls of the hall of fame`,
    mvLink: "https://www.youtube.com/watch?v=mw6E_TNgCsY",
    audioLink:
      "https://p.scdn.co/mp3-preview/1871d956d16f87ca647c2f1f7b04d271b928ced7?cid=2afe87a64b0042dabf51f37318616965",
  },
  {
    title: "Canada",
    artist: "Lauv",
    album: "I met you when I was 18",
    genre: "Pop",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2736ddde48f534d0404370e8791",
    releaseDate: new Date("2018-05-31"),
    streamCount: 60701170,
    lyrics: `She said "I'm fine"
    But it's hard to tell
    When you're lying all the time
    When you're lying all the time
    Can't you see
    I'm fading away
    Can't you see
    I'm not okay
    You tell me to breathe easy for a while
    But the world makes it hard to smile
    Living my life like everything's alright
    But it's not right, no, it's not right`,
    mvLink: "https://www.youtube.com/watch?v=U6f39mbPOOw",
    audioLink:
      "https://p.scdn.co/mp3-preview/2b9a41a06c0730caee85c16042af6b1e6a066c20?cid=2afe87a64b0042dabf51f37318616965",
  },
  {
    title: "I Like Me Better",
    artist: "Lauv",
    album: "I Like Me Better",
    genre: "Pop",
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27396167f75ed156b7e2e92d8a7",
    releaseDate: new Date(2017, 4, 19),
    streamCount: 1313639424,
    lyrics: "To be young and in love in New York City",
    mvLink: "https://www.youtube.com/watch?v=a7fzkqLozwA",
    audioLink:
      "https://p.scdn.co/mp3-preview/c48b64e9ac0256c3341dc438a47f5a5d5d5e5ca3?cid=5fe5c80e9f0146e1baf5dc38e6e7f944",
  },
];

export const home = async (req, res) => {
  // await Song.deleteMany({});
  // for (var i = 0; i < sampleSongs.length; i++) {
  //   await Song.create(sampleSongs[i]);
  // }

  // await Song.updateOne(
  //   { _id: "6459fafed798ac2e5dcd58f4" },
  //   { $inc: { count: 2 } }
  // );

  const songs = await Song.find({}).sort({ count: -1 });

  console.log(songs);

  return res.render("home", { pageTitle: "Home", siteName: "jhun", songs });
};

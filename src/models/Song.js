import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  albumCover: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  streamCount: {
    type: Number,
    required: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  mvLink: {
    type: String,
    required: true,
  },
  audioLink: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Song = mongoose.model("Song", songSchema);

export default Song;

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");
require("dotenv").config();

const USER = require("./models/users");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async function(accessToken, refreshToken, profile, done) {
  try {
    const existingUser = await USER.findOne({ email: profile.emails[0].value });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser = new USER({
      
      userName: profile.displayName,
      email: profile.emails[0].value,
      source:"Google",
      accessToken:accessToken,
      UptimeStart:"100 %",
      UptimeEnd:"30 %",
      BandwidthStart:"1000 Mbps",
      BandwidthEnd:"800 Mbps",
      LatencyStart:"100 ms",
      LatencyEnd:"50 ms",
      PacketStart:"500 packets",
      PacketEnd:"100 packets"
    });
    await newUser.save();
    

    

    return done(null, newUser);

    

  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/users");
const matches = require("./routes/matches");
const teams = require("./routes/teams");

// Match Model
const Match = require("./models/Match");
const match_finals = require("./routes/match_finals");
const moment = require("moment");

// MatchFinal Model
const MatchFinal = require("./models/MatchFinal");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config

require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

// Use Routes
// app.use('/api',(req,res,next) => {
//   res.json({"working":"yes"});
// });

app.use("/api/users", users);
app.use("/api/matches", matches);
app.use("/api/teams", teams);
app.use("/api/match_finals", match_finals);

// serv assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}




/*    -------------------------------------------------------------------------   */
const importMatchesBlokadaZdjacWRaziePotrzeby = async() => {

  const response = await Match.remove({});

  if(response){

    import_matches.forEach( item = async(item) => {

      // explode item line
      const elements = item["line"].split(";");

      // there is two hours summer one ouhr winter shifting
      const dateFormat = moment(
        `${elements[0]} ${elements[2]}`,
        "YYYY-MM-DD HH:mm:ss"
      ).add(1, 'hours').format();

      const newMatch = new Match({
        firstTeamName: elements[1],
        secondTeamName: elements[3],
        firstTeamFirstHalfGoals:0,
        firstTeamSecondHalfGoals:0,
        firstTeamOvertimeGoals:0,
        secondTeamFirstHalfGoals:0,
        secondTeamSecondHalfGoals:0,
        secondTeamOvertimeGoals:0,
        date: dateFormat,
        disabled: 0,
        closed: 0
      });

      await newMatch
        .save()
        .then(match => console.log('added match',match))
        .catch(err => console.log('error',err));

    });

  }

  
}
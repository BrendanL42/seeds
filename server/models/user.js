const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const { ObjectId } = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const userSchema = new mongoose.Schema(
  /// -------- login -------- ///
  {
    name: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      // required: true,
    },

    /// -------- profile -------- ///

    preferredName: {
      type: String,
      trim: true,
    },

    age: {
      type: String,
      trim: true,
    },
    height: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    diet: {
      type: String,
      trim: true,
    },
    veganSince: {
      type: String,
      trim: true,
    },
    exercise: {
      type: String,
      trim: true,
    },
    interestedIn: {
      type: String,
      trim: true,
    },

    lookingFor: {
      type: String,
      trim: true,
    },
    children: {
      type: String,
      trim: true,
    },
    pets: {
      type: String,
      trim: true,
    },

    profession: {
      type: String,
      trim: true,
    },

    education: {
      type: String,
      trim: true,
    },
    activism: {
      type: String,
      trim: true,
    },
    astrologySign: {
      type: String,
      trim: true,
    },
    politics: {
      type: String,
      trim: true,
    },
    religion: {
      type: String,
      trim: true,
    },

    // -------- AUTH -------- ///
    hashed_password: {
      type: String,
    },
    salt: String,
    created: {
      type: Date,
      default: Date.now,
    },
    updated: Date,
    newAccount: {
      type: Boolean,
      default: true,
    },
    // -------- END -------- ///
  },
  opts
);

/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind: virtual properties (password) don’t get persisted in the database.
 * They only exist logically and are not written to the document’s collection.
 */

// virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    // create temporary variable called _password
    this._password = password;
    // generate a timestamp
    this.salt = uuidv4();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "Please enter a password";
    try {
      const hash = crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");

      return hash;
    } catch (err) {
      return err;
    }
  },
};

module.exports = mongoose.model("User", userSchema);

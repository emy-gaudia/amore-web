const db = require('../../config/database/sequelize');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.user;
const Match = db.match;
const { Op } = require('sequelize'); 

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const userAllowed = await bcrypt.compare(req.body.password, user.password);

    if (userAllowed) {
      jwt.sign({ userId: user.id }, 'sekreto-ni-emy', {
        expiresIn: 604800,
      });
      return res.status(200).send({ userId: user.id });
    } else {
      return res.status(401).send("Invalid password");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};


exports.create = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = {
    id: req.body.id,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    email: req.body.email,
    department: req.body.department,
    course: req.body.course,
    password: hashedPassword,
    profileImage: req.body.profileImage,
    bio: req.body.bio,
    status: req.body.status ? req.body.status : false,
    gender: req.body.gender,
    interest: req.body.interest
  };

  await User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
};

exports.findAll = async (req, res) => {
  const currentUserId = req.params.id; 

  await User.findAll({
    where: {
      id: {
        [Op.not]: currentUserId,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users.',
      });
    });
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  await User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find the User with id ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving User with ID' + id,
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  await User.update(req.body, {
    where: { id: id },
  })
  .then((num) => {
    if (num == 1) {
      res.send({
        message: 'User was updated succesfully.',
      });
    } else {
        res.send({
          message: `Cannot update User with id ${id}, maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating User with id ' + id,
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  await User.destroy(
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted succesfully!',
        });
      } else {
        res.send({
          message: `Cannot delete User with id ${id}. Maybe User was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id' + id,
      });
    });
};

exports.findAllOnline = async (req, res) => {
  await User.findAll({ where: { status: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Users',
      });
    });
};


exports.matchWithUser = async (req, res) => {
  const currentUserId = req.params.id;
  const matchedUserId = req.body.matchedUserId;

  try {
    const existingMatch = await Match.findOne({
      where: {
        user_id: currentUserId,
        matched_user_id: matchedUserId,
      },
    });

    if (existingMatch) {
      return res.status(400).send("You have already matched with this user");
    }

    await Match.create({
      user_id: currentUserId,
      matched_user_id: matchedUserId,
    });

    return res.status(200).send("Match successful");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};



exports.viewMatches = async (req, res) => {
  const currentUserId = req.params.id;

  try {
    const mutualMatches = await Match.findAll({
      where: {
        [Op.and]: [
          {
            user_id: currentUserId,
          },
          {
            matched_user_id: {
              [Op.ne]: currentUserId,
            },
          },
        ],
      },
    });

    const matchedUserIds = mutualMatches.map((match) => match.matched_user_id);

    return res.status(200).send(mutualMatches);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};
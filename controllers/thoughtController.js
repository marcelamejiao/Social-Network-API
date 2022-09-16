const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find()
      .then(async (thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },

    // Get a single thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },

    // create a new thought
    createThought(req, res) {
      Thought.create(req.body)
      .then((thought) => {
        // Add the thought to the user's thought array
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } }
        )
        
        res.json(thought)
      })
      .catch((err) => res.status(500).json(err));
    },

    // Update a thought
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .then((thought) =>
          !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },

    // Delete a thought 
    deleteThought(req, res) {
      Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Thought deleted but no user with this id was found!',
              })
            : res.json({ message: 'Thought successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create a reaction stored in a single thought's `reactions` array field
    addReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
      .then((thought) =>
          !thought
          ? res.status(404).json({ message: 'No thought found with that ID ☹️' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },

    // Remove a reaction by the reaction's `reactionId` value
    removeReaction(req, res) {
      Thought.findOneAndUpdate(
        { reactions: req.params.reactionId },
        { $pull: { reactions: req.params.reactionId } },
        { runValidators: true, new: true }
      )
      .then((thought) =>
          !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID ☹️' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
};
  
const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authNiddleware");
//as set and get goal have same routes so we can write them in one lin insteadd
//of separate functions
router.route("/").get(protect, getGoal).post(protect, setGoal);
// router.get('/',getGoals)

// router.post('/',setGoal)

//as put and delete goal have same routes so we can write them in one lin insteadd
//of separate functions
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)
module.exports = router;

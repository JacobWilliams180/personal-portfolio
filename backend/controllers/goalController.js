const asyncHandler = require('express-async-handler')

//@desc get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) =>{
    res.status(200).json({message: 'get Goals'})
})

//@desc set Goals
// @route POST /api/goals
// @access Private
const setGoal =  asyncHandler (async (req, res) =>{
    if(!req.body.text){
        console.log("this is a post request",req.body.text)
        res.status(400)
        throw new Error('Please add a text field')
    }   
    res.status(200).json({message: 'set Goals'})
})


//@desc update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `update goal ${req.params.id}`})
})


//@desc delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
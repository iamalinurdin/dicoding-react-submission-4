import { ActionType } from "./action";

function threadReducer(thread = {}, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_THREAD:
      return action.payload.thread
    case ActionType.UP_VOTE:
      return {
        ...thread,
        upVotesBy: thread.upVotesBy.includes(action.payload.userId)
          ? thread.upVotesBy.filter((item) => item !== action.payload.userId)
          : thread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: (thread.downVotesBy.includes(action.payload.userId)) && (thread.downVotesBy.filter((item) => item !== action.payload.userId))
      }
    case ActionType.DOWN_VOTE:
      return {
        ...thread,
        downVotesBy: thread.downVotesBy.includes(action.payload.userId)
          ? thread.downVotesBy.filter((item) => item !== action.payload.userId)
          : thread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: (thread.upVotesBy.includes(action.payload.userId)) && (thread.upVotesBy.filter((item) => item !== action.payload.userId))
      }
    case ActionType.ADD_COMMENT:
      return {
        ...thread,
        comments: [action.payload.comment, ...thread.comments]
      }
    default:
      return thread
  }
}

export default threadReducer
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { client } from '../../api/client'

const usersAdapter = createEntityAdapter()
const initialState = usersAdapter.getInitialState()
// const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   return action.payload
    // })
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  },
})

// export const selectAllUsers = (state) => state.users

// export const selectUsersById = (state, userId) => {
//   return state.users.find((user) => user.id === userId)
// }

export const { selectAll: selectAllUsers, selectById: selectUsersById } =
  usersAdapter.getSelectors((state) => state.users)

export default usersSlice.reducer

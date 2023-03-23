STEPS TO FOLLOW.

Step 1: Break the UI into a component hierarchy
Step 2: Build a static version in React
Step 3: Find the minimal but complete representation of UI state
Step 4: Identify where your state should live
Step 5: Add inverse data flow

### Step 1: Break the UI into a component hierarchy

Breakdown: ✅
![Components Breakdown](./src/components/intermediate/CommentSection/assets/interactive-comments-section-main/design/desktop-design-breakdown.jpg)

Components Hierarchy: ✅

Setup initial starter files and base styles, breakdown the ui into components study the sections. Create folders and corresponding files.

### Step 2: Build a static version in React

Build a static version of CommentSection, Individual Comments, Replies, Add a comment section below, Add Reply, Update your own comment or reply. Hover states for all. ✅

Missing: DELETE MODAL & Responsiveness.

### Step 3: Find the minimal but complete representation of UI state

- ADD COMMENTS - needs to be created with props (replying or adding new comment) + needs to have the corresponding onClick function passed (onReply, onComment) . It also needs to know CurrentUser

- COMMENTSECTION - needs to know currentUser.

- COMMENTS - needs to know current list of comment items (DATA) and for each render commentItem

- CommentItem needs to know the current main comment + list of replies.

- Comment needs to know

1.  comment details (content, counts, name, date)
2.  currentUser
3.  state of Editing
4.  Functions like Reply (Add a new addComment with replying functionalities into commentItem)
5.  Functions like Update, Delete.
6.  Functions to Update Counter

So states:

- currentUser

- List of Comments/CommentItems/Replies/Reply

- isEditing

- counter

FUNCTIONS

- Add new comment (Create)

- Add new reply (Create)

- Get the full list of comments to render (Read)

- Update the comment or reply (Update)

- Delete the comment or reply (Delete)

- Change currentUser

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

Uploaded images to Cloudinary CDN ✅

Uploaded data to FREE ONLINE JSON SERVER (npoint) ✅

Missing: DELETE MODAL ✅ & Responsiveness ✅.

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

- currentUser ✅

- List of Comments ✅

- isEditing ✅

- counter ✅ (implement: allow voting only once a)for upvote comment ✅ b) for upvote reply c) for downvote comment ✅ d) for downvote reply , prevent self vote ✅)

FUNCTIONS

- Add new comment (Create) ✅

- Add new reply to a comment itself ✅ or a reply to a reply ✅ (Create) (BUG: Replying to a brand new comment does not work) FIXED ✅

- Get the full list of comments to render (Read) ✅

- Update the comment ✅ or reply ✅ (Update)

- Delete the comment ✅ or reply ✅ (Delete)

- Change currentUser ✅

TODOS:

- BUG @replyingTo bug when replying to a reply. FIXED ✅

- Add MODAL for DELETE ✅

- Split Voting to own Component ✅

- Refactor States/Contexts

- Refactor / Tidy up + Reducer Version

- useLocalStorage after any updates, get the initials from a server.

- ADD Responsiveness ✅

- ANIMATIONS

- PNG VS WEBP (Check use cases, when to use which..)

- ADD ALT TAGS FOR IMGS + DO SOME AY11 CHECKING / ACCESSIBILITY TESTS

- ADD REALTIME STAMPS

### VOTE SYSTEM ✅

FOR VOTING COMMENT=

     CASES:

     - UPVOTE CASES

     User has not voted yet, and votes up => score +1 ✅, voted: true, direction: up, ✅

     User has voted up and clicks on vote up again => score -1 ✅, remove from vote object. ✅

     User has voted down, and clicks on vote up => score +2 ✅, voted: true, direction: up ✅.


     - DOWNVOTE CASES

     User has not voted yet, and votes down => score -1 ✅, voted: true, direction: down ✅,

     User has voted down, and clicks on vote down again => score +1 ✅, remove from vote object ✅.

     User has voted up and click on downvote => score -2 ✅, voted: true, direction: down ✅,

FOR VOTING REPLY =

Same 6 cases.

     - UPVOTE CASES

     User has not voted yet, and votes up => score +1 ✅, voted: true, direction: up, ✅

     User has voted up and clicks on vote up again => score -1 ✅, remove from vote object ✅.

     User has voted down, and clicks on vote up => score +2 ✅, voted: true, direction: up ✅.


     - DOWNVOTE CASES

     User has not voted yet, and votes down => score -1 ✅, voted: true, direction: down ✅,

     User has voted down, and clicks on vote down again => score +1 ✅, remove from vote object ✅.

     User has voted up and click on downvote => score -2 ✅, voted: true, direction: down ✅,

BREAKPOINTS:

900px
800px
650px
400px
370px
340px

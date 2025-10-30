# Blog CMS Setup Guide

This guide will help you set up Decap CMS (formerly Netlify CMS) for managing your blog posts with authentication.

## What's Been Implemented

✅ Decap CMS admin interface at `/admin`
✅ Markdown-based blog posts in `content/blog/`
✅ Netlify Identity authentication
✅ Admin button on blog page (bottom-left corner)
✅ Rich text markdown editor
✅ Image upload support

## Setup Steps (After Deploying to Netlify)

### 1. Enable Netlify Identity

1. Go to your Netlify dashboard
2. Navigate to your site
3. Click on **"Identity"** in the top navigation
4. Click **"Enable Identity"**

### 2. Enable Git Gateway

1. While in the Identity tab, scroll down to **"Services"**
2. Click **"Enable Git Gateway"**
3. This allows the CMS to commit directly to your GitHub repository

### 3. Invite Yourself as a User

1. In the Identity tab, click **"Invite users"**
2. Enter your email address
3. Check your email and click the invitation link
4. Set your password

### 4. Configure Registration (Optional but Recommended)

To prevent anyone from signing up:

1. In Identity tab, go to **"Settings and usage"**
2. Under **"Registration preferences"**, select **"Invite only"**
3. This ensures only you can access the admin panel

## How to Use the CMS

### Creating a New Blog Post

1. **On your deployed site**, go to your blog page (`/blog`)
2. Click the **purple button** in the bottom-left corner:
   - If not logged in: Click to login with your Netlify Identity account
   - If logged in: Click the "+" button to go to admin

3. In the admin panel (`/admin`):
   - Click **"New Blog Posts"**
   - Fill in the fields:
     - **Title**: Your post title
     - **Publish Date**: When the post should be dated
     - **Featured**: Toggle to make it the featured post
     - **Excerpt**: Short description (shown on blog list)
     - **Read Time**: e.g., "5 min read"
     - **Author**: Your name (defaults to "Herman Hylland")
     - **Tags**: Add relevant tags (React, AI, Design, etc.)
     - **Body**: Write your post content in Markdown

4. Click **"Save"** (saves as draft)
5. Click **"Publish"** → **"Publish now"** to make it live

### Editing an Existing Post

1. Go to `/admin`
2. Click on the post you want to edit
3. Make your changes
4. Save and publish

### Deleting a Post

1. Go to `/admin`
2. Click on the post
3. Click **"Delete"** (red button in the top right)

## Markdown Formatting Guide

The blog supports full Markdown syntax:

```markdown
## Headings (H2)
### Subheadings (H3)

**Bold text**
*Italic text*

- Bullet points
- Work like this

1. Numbered lists
2. Work too

[Link text](https://example.com)

`Inline code`

\`\`\`javascript
// Code blocks
function example() {
  return "Supported too!";
}
\`\`\`
```

## Important Notes

### Current Setup

The blog currently uses static data from `src/data/blog/posts.js`. The Decap CMS is set up to:
- Store new posts as markdown files in `content/blog/`
- Commit directly to your GitHub repository
- Use Netlify's build process to deploy updates

### Future Enhancement Needed

To fully integrate CMS-created posts with your blog, you'll need to either:
1. **Option A**: Create a build script that reads markdown files and generates `posts.js`
2. **Option B**: Update the blog data loader to read directly from markdown files at build time
3. **Option C**: Use a Netlify function to fetch and parse markdown files dynamically

For now, you can:
- Use the CMS to draft and store blog posts
- Manually copy the content to `src/data/blog/posts.js` when ready to publish

## Files Created

- `/public/admin/index.html` - Admin interface
- `/public/admin/config.yml` - CMS configuration
- `/content/blog/` - Markdown blog posts
- `/index.html` - Updated with Netlify Identity widget

## Troubleshooting

### Can't Login
- Make sure Netlify Identity is enabled on your site
- Check that you've confirmed your email invitation
- Clear browser cache and try again

### Admin Panel Not Loading
- Check that you're on the deployed Netlify site (not localhost)
- Ensure Git Gateway is enabled in Netlify Identity settings

### Posts Not Appearing on Site
- This is expected - you'll need to manually update `posts.js` or implement one of the integration options above

## Security

✅ Only invited users can access the admin panel
✅ All changes are committed to your GitHub repo (version controlled)
✅ Netlify Identity handles authentication securely
✅ Admin panel is only accessible to authenticated users

## Next Steps

1. Deploy your site to Netlify
2. Follow the setup steps above
3. Create your first blog post!
4. (Optional) Implement automatic markdown-to-posts.js conversion

---

Need help? Check the [Decap CMS Documentation](https://decapcms.org/docs/intro/)

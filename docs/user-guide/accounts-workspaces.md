---
sidebar_position: 8
title: Accounts & Workspaces
description: How to sign in to MUSE, organize logic models in workspaces, invite members, and manage your account
---

# Accounts & Workspaces

An account lets you generate logic models with AI, save them, and share them. Saved logic models live in **workspaces**: a personal one for your own work, and shared ones you create to collaborate with a team.

## What Works Without an Account

| Without signing in | Requires signing in |
|--------------------|---------------------|
| Browse and search evidence | Generate a logic model or a Measurement Recipe with AI |
| Build and edit a logic model by hand on the canvas | Save a logic model, view its version history, share it |
| Export an image or JSON | Use workspaces and the Logic models list |
| Open a logic model shared by link | Open a logic model shared with you as a member |

## Signing In

1. Click **Sign in** at the bottom of the sidebar. The same dialog also opens when you click **Save** or **Sign in to generate** while signed out.
2. Wait for the verification check in the dialog to complete; the buttons are disabled until it passes.
3. Choose **Sign in with Google** or **Sign in with GitHub**.

There is no separate sign-up step: the first sign-in creates your account. You return to the page you were on, and an unsaved canvas draft is still there.

By signing in you agree to the Terms of Service and Privacy Policy, both linked from the dialog and from the bottom of the sidebar.

To sign out, open the account menu at the bottom of the sidebar (your avatar and name) and choose **Sign out**.

:::warning Signing Out Removes Unsaved Drafts
Signing out deletes the canvas drafts stored in that browser. Save anything you want to keep first.
:::

## Workspaces

A workspace is the place where logic models are stored. Every account starts with a **personal workspace** that only you can use. To work with other people, create a shared workspace and invite them.

### Switching Workspaces

The **workspace switcher** at the top of the sidebar shows the active workspace. Open it to switch to another workspace you belong to. The **Logic models** list and every new logic model you save follow the active workspace.

### Creating a Workspace

1. Open the workspace switcher and click **Create workspace**.
2. Enter a name and confirm.

You become the owner of the workspace. There is a limit of 10 workspaces per account; past it, creating another one fails.

### Roles

| Role | Can do |
|------|--------|
| **Owner** | Everything an admin can, plus assigning the Owner role and deleting the workspace |
| **Admin** | Change workspace settings, invite and remove members, change roles, delete logic models in the workspace |
| **Member** | Create logic models in the workspace and open the ones shared with them |

Being a member of a workspace does not by itself give access to every logic model in it. Each logic model is visible to its owner and to the people it has been [shared with](./saving-sharing#sharing).

### Inviting Members

Invitations are available in shared workspaces, not in a personal workspace.

1. In the sidebar, open **Organization → Members**.
2. Enter the person's email address, choose a role, and click **Invite**.
3. Click **Copy link** on the pending invitation and send the link to the person yourself. MUSE does not send invitation emails.

The person opens the link, signs in with an account that uses the invited email address, and clicks **Join workspace**. A pending invitation shows its expiry date and can be withdrawn with **Cancel invitation**.

### Changing Roles and Removing Members

On the **Members** page, owners and admins can change a member's role or click **Remove**. When a member is removed, the logic models they had shared in the workspace pass to an owner, and their unshared ones move to their personal workspace.

### Workspace Settings

**Organization → Settings** is where owners and admins rename the workspace and control private mode.

#### Private Mode

Turning on **Private mode** does two things for the workspace:

- External paper search is not run during AI generation.
- Link sharing is turned off, and every existing share link in the workspace is revoked.

Use it when the logic models in a workspace should not leave the workspace.

### Leaving or Deleting a Workspace

Both actions are in the **Danger zone** of **Organization → Settings**. A personal workspace has neither.

- **Leave workspace** — Your shared logic models pass to an owner, and the rest move to your personal workspace. If you are the only owner, make someone else an owner first.
- **Delete workspace** (owners only) — Removes the workspace, its members, and every logic model in it. This cannot be undone.

## Your Account

Open the account menu at the bottom of the sidebar and choose **Account**.

- **Profile** — Change your display name. Your email address and avatar come from the sign-in provider and are read-only.
- **Sign-in methods** — Shows whether Google and GitHub are linked to your account.

### Deleting Your Account

**Delete account** is in the Danger zone of the Account page. Deleting your account:

- deletes your personal workspace and the logic models in it,
- passes the logic models you shared in team workspaces to an owner of that workspace, and deletes your unshared ones,
- removes the canvas drafts stored in the browser.

If you are the only owner of a shared workspace, add another owner or delete that workspace before deleting your account. If you signed in a while ago, MUSE asks you to sign in again before the deletion goes through.

## Next Steps

- [Save, version, and share a logic model →](./saving-sharing)
- [Generate a logic model with AI →](./ai-generation)

# Keeping Your Template Updated

This repository includes a pre-configured GitHub Action that can automatically sync your new project with any future updates made to the original template. This guide explains the one-time setup required to enable this feature.

[Back to Main README](../README.md)

## How It Works

The workflow is defined in .github/workflows/sync-template.yml. When it runs, it compares your repository with the original template. If it finds any new changes, it will automatically create a pull request in your repository with those updates.

## Required Setup

There are two main configuration steps:

1.  Allowing Actions to Create Pull Requests.
2.  (Optional) Providing an access token if the template repository is private.

### 1\. Allow GitHub Actions to Create Pull Requests

For security, GitHub repositories have a default setting that prevents workflows from creating pull requests. You must enable this to allow the sync action to work.

**Step-by-step instructions:**

1.  Navigate to the main page of your new repository.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Actions** > **General**.
4.  Scroll down to the **"Workflow permissions"** section.
5.  Find the option that says **"Allow GitHub Actions to create and approve pull requests"** and check the box.
6.  Click **Save**.

### 2\. Configure Access for a Private Template

**If the original template repository is public, you can skip this section.**

If the template repository is private, you must provide the workflow with a **Personal Access Token (PAT)** so it has permission to read the template's code.

#### How to Generate the Personal Access Token (PAT)

1.  Navigate to your token settings on GitHub:
    - Click your profile picture in the top-right corner.
    - Go to **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**.

2.  Click **"Generate new token"** and select **"Generate new token (classic)"**.
3.  Fill out the form:
    - **Note:** Give it a descriptive name, like template-sync-token.
    - **Expiration:** Choose an appropriate expiration date (e.g., 90 days).
    - **Select scopes:** Check the box for **repo**. This grants the token the necessary permissions to read from private repositories.

4.  Click **"Generate token"** at the bottom of the page.
5.  **Important:** Copy the generated token immediately. **You will not be able to see it again.**

#### How to Add the Token as a Repository Secret

1.  In your new repository, go to **Settings** > **Secrets and variables** > **Actions**.
2.  Click the **"New repository secret"** button.
3.  For the **Name**, enter TEMPLATE_SYNC_PAT. This must match the name used in the workflow file.
4.  For the **Secret**, paste the Personal Access Token you just copied.
5.  Click **"Add secret"**.

Your repository is now fully configured. The sync workflow will run on its schedule (or when manually triggered) and will be able to securely access the private template to create pull requests with any new updates.

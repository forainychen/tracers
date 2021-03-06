# Contributing

> #### Table of Contents
> - [Running Locally](#running-locally)
> - [Creating a Pull Request](#creating-a-pull-request)

## Running Locally

1. Fork this repository.

2. Clone your forked repo to your machine.

    ```bash
    git clone https://github.com/<your-username>/tracers.git    
    ```

3. Install [Docker](https://docs.docker.com/install/), if not already installed.

4. Install dependencies, and build executables.

    ```bash
    cd tracers

    npm install
    
    npm run build
    ```
    
5. Run executables.

    ```bash
    # Build visualization libraries
    ./bin/build

    # Build a visualization library for a specific language.
    ./bin/build cpp
    
    # Create library documentations.
    ./bin/docs /path/to/destination/
    
    # Compile users' codes.
    ./bin/compile cpp /path/to/code/
    
    # Run users' codes.
    ./bin/run cpp /path/to/code/
    
    # Release a new version.
    GITHUB_TOKEN=personal_access_token ./bin/release
    ```

## Creating a Pull Request
  
6. Create a branch addressing the issue/improvement you'd like to tackle.

    ```bash
    git checkout -b my-problem-fixer-branch
    ```

7. Write some awesome code.

8. Commit the changes, and push them to `my-problem-fixer-branch` branch on your forked repo.

    ```bash
    git add .
    
    git commit -m "Explain my awesome changes"

    git push origin my-problem-fixer-branch
    ```

9. Create a pull request from `my-problem-fixer-branch` branch on your forked repo to `master` branch on the main repo.

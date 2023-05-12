# Beyond the Framework: Distributing Your Desktop App Like a Pro

This is the code accompanying the JSNation 2023 workshop. 

## Prerequisites

1. Setup Tauri prerequisites for your OS (especially on Linux): 
   https://tauri.app/v1/guides/getting-started/prerequisites/

2. Install [NodeJS](https://nodejs.org/en) then run the following command to enable corepack (this will make all popular package managers available)

    ```
    corepack enable
    ```

3. Clone this repo

    ```
    git clone https://github.com/crabnebula-dev/jsnation23-workshop
    ```

4. Install dependencies

    ```
    npm i
    
    # OR
    
    pnpm i
    
    # OR
    
    yarn
    ```

## Structure

This repo contains a handful or numbered snapshots (1 through 4) in the `./checkpoints` subfolder that correspond to the numbered stages on the slides. You can check out any of these to time-travel or skip ahead. 

## Getting Started

You can run the checkpoint apps by running one of the following commands:

```
npm run tauri dev --workspace=checkpoint-<checkpoint number>

# OR

pnpm run --filter checkpoint-<checkpoint number> tauri dev

# OR

yarn workspace checkpoint-<checkpoint number> tauri dev
```

To build production-ready bundles run

```
npm run tauri build --workspace=checkpoint-<checkpoint number>

# OR

pnpm run --filter checkpoint-<checkpoint number> tauri build

# OR

yarn workspace checkpoint-<checkpoint number> tauri build
```

## License

<sup>
Licensed under either of <a href="LICENSE-APACHE">Apache License, Version
2.0</a> or <a href="LICENSE-MIT">MIT license</a> at your option.
</sup>
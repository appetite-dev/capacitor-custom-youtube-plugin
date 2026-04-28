# se-youtube-player

Capacitor plugin for playing YouTube videos on iOS.

## Project Structure

```text
se-youtube-player/
|-- src/
|   |-- index.ts
|   |-- interface.ts
|   `-- web.ts
|-- android/
|   |-- src/main/java/com/stockedge/plugins/yotubeplayer/
|   `-- src/main/res/
|-- ios/
|   |-- Sources/YoutubePlayerPlugin/
|   `-- Tests/YoutubePlayerPluginTests/
|-- package.json
|-- Package.swift
|-- SeYoutubePlayer.podspec
|-- rollup.config.mjs
`-- tsconfig.json
```

## What Lives Where

`src/` contains the TypeScript plugin definition and web implementation.

`android/` contains the native Android plugin code, player classes, and XML resources.

`ios/` contains the native Swift implementation and iOS tests.

## Install

Using npm:

```bash
npm install se-youtube-player
```

Using yarn:

```bash
yarn add se-youtube-player
```

Sync Capacitor after installation:

```bash
npx cap sync
```

## Usage

```ts
import { YoutubePlayer } from 'se-youtube-player';

await YoutubePlayer.play({
  videoId: 'dQw4w9WgXcQ',
});
```

## API

<docgen-index>

* [`play(...)`](#play)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### play(...)

```typescript
play(options: { videoId: string; }) => Promise<{ status: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ videoId: string; }</code> |

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

--------------------

</docgen-api>

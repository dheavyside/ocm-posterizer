# OCM Posterizer

This is an On Chain Monkey community tool that enables crafting of posters with NFTs using curated templates.

## Features

- Client-side image generation with dom-to-image
- Custom CORS-friendly image proxy
- Background customization
- Multiple theme support

## Development

```bash
npm install
npm run dev
```

## Implementation Details

The application uses a hybrid approach for image generation:
- Client-side rendering with dom-to-image
- Server-side image proxy to handle CORS restrictions
- Fallback mechanisms for compatibility

# Blackcode Research Windows AI Assistant Website

This repository contains the marketing and distribution website for Blackcode Research's Windows AI Assistant application. The website serves as a platform where users can learn about the product, create accounts, and download the software.

## Project Overview

The Windows AI Assistant is a desktop application that:
- Integrates multiple AI models (Claude, OpenAI, ElevenLabs)
- Connects AI to various data sources through Model Context Protocol (MCP)
- Controls the computer directly through Computer Use Agents (CUA)
- Provides voice interaction through advanced TTS/STT

## Technologies Used

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **State Management**: Redux Toolkit

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/blackcode-research/windows-ai-assistant-website.git
cd windows-ai-assistant-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app directory with pages
- `src/components`: Reusable React components
- `src/styles`: Global styles and Tailwind configuration
- `src/assets`: Static assets used throughout the site
- `public`: Public assets (images, favicon, etc.)

## Main Features

The website includes the following key sections:

- **Homepage**: Overview, value proposition, key features
- **Features**: 
   - AI Providers section (Claude, OpenAI, ElevenLabs)
   - MCP Integrations (with detailed descriptions of each MCP)
   - Computer Use capabilities
   - Voice interaction features
- **MCPs Explained**: Dedicated section explaining each MCP in detail
- **Use Cases**: Example scenarios showing the assistant in action
- **Pricing**: Plan options and feature comparison
- **Documentation**: User guides and technical documentation
- **Account**: User registration, login, dashboard
- **Download**: Secure application download section

## Build and Deployment

To build the project for production:

```bash
npm run build
```

The build output will be in the `.next` folder, which can be deployed to services like Vercel, Netlify, or AWS Amplify.

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is proprietary and confidential. All rights reserved by Blackcode Research.

## Contact

For any inquiries, please contact:
- support@blackcode-research.com
- [Website](https://blackcode-research.com) 
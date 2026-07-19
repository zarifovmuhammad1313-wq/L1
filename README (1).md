# 🧼 LaundryPro CRM

Premium CRM system for furniture cleaning businesses.

## Features

- 📊 Dashboard with real-time analytics
- 📋 Order management system
- 👥 Client relationship management
- 💰 Financial tracking
- 📸 Photo gallery
- 📄 Document generation
- 🔔 Notifications
- 🗺️ Route optimization
- And 19+ more features!

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **State:** Zustand, React Query
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone repository
```bash
git clone https://github.com/yourusername/laundry-pro-crm.git
cd laundry-pro-crm
```

2. Install dependencies
```bash
npm install
```

3. Setup environment
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Supabase credentials

5. Run development server
```bash
npm run dev
```

6. Open http://localhost:3000

## Database Setup

```bash
npm run db:migrate
npm run db:seed
```

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run linter
npm run type-check       # Check TypeScript
npm run db:migrate       # Run migrations
npm run db:seed          # Seed demo data
```

## Deployment

### Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t laundry-pro-crm .
docker run -p 3000:3000 laundry-pro-crm
```

## License

MIT - Free for commercial use

## Support

For help, visit the documentation or open an issue on GitHub.

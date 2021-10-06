# TypeScript, Tailwind CSS, Apollo and GraphQL setup

Template with preconfigured Next.js app with TS, Tailwind CSS, Apollo and Graphql

Before start you should create GraphQL server. 
Folder lib/graphql - there you create graphql query with setup depencs on your server.

Basic query hook for query data.

```tsx
import { useNewsQuery } from './news.graphql'

const News = () => {
	// Typed already️⚡️
	const { data: { news } } = useNewsQuery()

	return <div>{news.map(...)}</div>
}
```

By default `**/*.graphqls` is recognized as GraphQL schema and `**/*.graphql` as GraphQL documents. If you prefer the other extensions, make sure the settings of the webpack loader in `next.config.js` and `.graphql-let.yml` are consistent.

### Graphql server

In `.graphql-let.yml` change graphql server url address.

## Env
In .env.development create this env variables:
- NEXT_PUBLIC_ADMIN_URL -> URL address of your admin server
- NEXT_PUBLIC_MAINTENANCE_MODE -> Maintenance mode
	- soon - template with coming soon
	- maintenance - template witih maintenance
## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-graphql with-typescript-graphql-app
# or
yarn create next-app --example with-typescript-graphql with-typescript-graphql-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
